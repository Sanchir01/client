/* eslint-disable react-hooks/rules-of-hooks */
import { getClient } from '@/apollo/clietn'
import OneItem from '@/components/templates/OneItem'
import { TypeParamSlug, TypeParams } from '@/types/Params.interface'
import axios from 'axios'
import { Metadata } from 'next'
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
		description: product.data.getProductById.description
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

	const paths = data.getAllProducts.products.map((item: TypeParamSlug) => {
		return { params: { id: String(item.id) }, fallback: false }
	})

	return paths
}

async function getData(params: TypeParamSlug) {
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

	const [similar, items] = await Promise.all([similarData, itemData])

	return { similar, items }
}

export default async function ProductPage({ params }: TypeParams) {
	const data = await getData(params)

	return <OneItem similar={data.similar} item={data.items} />
}
