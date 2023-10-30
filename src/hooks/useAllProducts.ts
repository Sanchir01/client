'use client'
import { defaultClient } from '@/apollo/DefaultClient'
import { filtersStore } from '@/store/Catalog.store'
import { useQuery } from '@apollo/client'
import { GetAllProductsDashboardDocument } from '../../graphql/gql/graphql'

export const useGetAllProduct = () => {
	const sorting = filtersStore(state => state.sorting)
	const categoriesId = filtersStore(state => state.categoriesId)
	const maxRange = filtersStore(state => state.rangeMax)
	const {
		data: items,
		loading,
		error
	} = useQuery(GetAllProductsDashboardDocument, {
		client: defaultClient,
		variables: {
			getAllProductInput: {
				page: '1',
				perPage: '20',
				sort: sorting,
				categoryId: categoriesId,
				maxPrice: maxRange?.toString(),
				minPrice: '0'
			}
		}
	})

	// return { items, loading, error }
}
