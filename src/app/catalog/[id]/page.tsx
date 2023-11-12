import { getClient } from '@/apollo/clietn'
import OneItem from '@/components/templates/OneItem'
import { TypeParams } from '@/types/Params.interface'
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

export async function generateStaticParams() {
	const productParams = await getClient().query({
		query: GetAllProductsDashboardDocument,
		variables: { getAllProductInput: { page: '1' } }
	})

	const paths = productParams.data.getAllProducts.products.map(items => {
		return {
			params: { id: items.id }
		}
	})

	return paths
}

export default async function ProductPage({ params }: TypeParams) {
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
		},
		context: {
			fetchOptions: {
				next: {
					revalidate: 60
				}
			}
		}
	})

	const [similar, items] = await Promise.all([similarData, itemData])

	return <OneItem similar={similar} item={items} />
}
