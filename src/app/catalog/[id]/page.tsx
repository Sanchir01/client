import { getClient } from '@/apollo/clietn'
import OneItem from '@/components/templates/OneItem'
import { EnumTokens } from '@/service/auth.service'
import { TypeParamSlug, TypeParams } from '@/types/Params.interface'
import axios from 'axios'
import { Metadata } from 'next'
import { cookies } from 'next/headers'
import {
	GetAllProductsDashboardDocument,
	GetOneProductByIdDocument
} from '../../../../graphql/gql/graphql'

export const revalidate = 60

export async function generateMetadata({
	params
}: {
	params: { id: string }
}): Promise<Metadata> {
	const product = await getClient().query({
		query: GetOneProductByIdDocument,
		variables: {
			getProductById: {
				id: Number(params.id)
			}
		}
	})
	return {
		title: product.data.getProductById.name,
		description: product.data.getProductById.description,
		openGraph: {
			images: [
				{
					url: product.data.getProductById.images[0],
					width: 500,
					height: 500,
					alt: 'Go'
				},
				{
					url: product.data.getProductById.images[0],
					width: 700,
					height: 700,
					alt: 'Go'
				}
			],
			description: product.data.getProductById.description,
			siteName: 'Sandjma',
			url: process.env.NEXT_PUBLIC_CLIENT_HOST,
			locale: 'ru_RU',
			type: 'website',
			countryName: 'Kalmyk'
		}
	}
}

export const generateStaticParams = async () => {
	

	const { data } = (
		await axios.post(process.env.NEXT_PUBLIC_SERVER_URL as string, {
			query: `query GetAllProductsDashboard($getAllProductInput: GetAllProductInput!) {
	getAllProducts(getAllProductInput: $getAllProductInput) {
		length
		products {
			id
			images
			name
			price
			size {
				id
				name
			}
		}
	}
}`,
			variables: {
				getAllProductInput: {
					page: '1'
				}
			}
		})
	).data

	const paths = data.getAllProducts.products.map((item: any) => {
		return [{ params: { id: item.id } }]
	})

	return paths
}

async function getData(params: TypeParamSlug) {
	const cookie = cookies().get(EnumTokens.ACCESS_TOKEN)?.value

	console.log(cookie)
	const { data: itemData } = await getClient().query({
		query: GetOneProductByIdDocument,
		variables: {
			getProductById: {
				id: Number(params.id)
			}
		}
	})
	const { data: similarData } = await getClient().query({
		query: GetAllProductsDashboardDocument,
		variables: {
			getAllProductInput: {
				categoryId: itemData.getProductById.categoryId.toString(),
				page: '1'
			}
		}
	})

	return { similarData, itemData }
}

export default async function ProductPage({ params }: TypeParams) {
	const data = await getData(params)

	return <OneItem similar={data.similarData} item={data.itemData} />
}
