import { getClient } from '@/apollo/clietn'
import OneItem from '@/components/templates/OneItem'
import { Metadata } from 'next'
import {
	GetAllProductsDashboardDocument,
	GetOneProductByIdDocument
} from '../../../../graphql/gql/graphql'

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
export default async function ProductPage({
	params
}: {
	params: { id: string }
}) {
	const { data: item } = await getClient().query({
		query: GetOneProductByIdDocument,
		variables: {
			getProductById: {
				id: Number(params.id)
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
	const { data: similar } = await getClient().query({
		query: GetAllProductsDashboardDocument,
		variables: {
			getAllProductInput: {
				categoryId: item.getProductById.categoryId.toString(),
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
	return <OneItem similar={similar} item={item} />
}
