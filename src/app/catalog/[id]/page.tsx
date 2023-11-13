/* eslint-disable react-hooks/rules-of-hooks */
import { getClient } from '@/apollo/clietn'
import OneItem from '@/components/templates/OneItem'
import { TypeParamSlug, TypeParams } from '@/types/Params.interface'
import axios from 'axios'
import {
	GetAllProductsDashboardDocument,
	GetOneProductByIdDocument
} from '../../../../graphql/gql/graphql'

export const revalidate = 60
export const dynamic = 'force-dynamic'
// export async function Metadata({
// 	params
// }: {
// 	params: { id: string }
// }): Promise<Metadata> {
// 	const product = await getClient().query({
// 		query: GetOneProductByIdDocument,
// 		variables: {
// 			getProductById: {
// 				id: Number(params.id)
// 			}
// 		},
// 		fetchPolicy: 'network-only'
// 	})
// 	return {
// 		title: product.data.getProductById.name,
// 		description: product.data.getProductById.description
// 	}
// }

export const generateStaticParams = async () => {
	const { data } = (
		await axios.post('http://localhost:5000/graphql', {
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

	return { similarData, itemData }
}

export default async function ProductPage({ params }: TypeParams) {
	const data = await getData(params)

	return <OneItem similar={data.similarData} item={data.itemData} />
}
