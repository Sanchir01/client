import { getClient } from '@/apollo/clietn'
import Catalog from '@/components/templates/Catalog'
import type { Metadata } from 'next'
import { GetAllProductsDashboardDocument } from '../../../graphql/gql/graphql'

export const metadata: Metadata = {
	title: 'Sandjma | Catalog',
	description: 'Super store clothes'
}

export default async function Page() {
	const { data: items, loading } = await getClient().query({
		query: GetAllProductsDashboardDocument,
		variables: { getAllProductInput: { page: '1', perPage: '20' } }
	})
	return (
		<Catalog
			Products={items.getAllProducts.products}
			isFavorites
			title='Модная Одежда Бренда Sandjma'
			loading={loading}
		/>
	)
}
