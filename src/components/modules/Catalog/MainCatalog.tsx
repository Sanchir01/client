import { getClient } from '@/apollo/clietn'
import Catalog from '@/components/templates/Catalog'
import { redirect } from 'next/navigation'
import { FC } from 'react'
import { GetAllProductsDashboardDocument } from '../../../../graphql/gql/graphql'

type PropsParams = {
	sorting: string
	categoryId: string
	maxRange: string
}
const MainCatalog: FC<{ filter: PropsParams }> = async ({ filter }) => {
	const {
		data: items,
		loading,
		error
	} = await getClient().query({
		query: GetAllProductsDashboardDocument,
		variables: {
			getAllProductInput: {
				page: '1',
				perPage: '20',
				sort: filter.sorting ? filter.sorting : '',
				categoryId: filter.categoryId ? filter.categoryId : '',
				minPrice: '0',
				maxPrice: filter.maxRange ? filter.maxRange : '10000'
			}
		},

		context: {
			fetchOptions: {
				next: {
					revalidate: 10
				}
			}
		}
	})

	return loading ? (
		<div className='text-black'>Load</div>
	) : error ? (
		redirect('404')
	) : (
		<Catalog
			Products={items!.getAllProducts.products}
			isFavorites
			title='Модная Одежда Бренда Sandjma'
			loading={loading}
		/>
	)
}

export default MainCatalog
