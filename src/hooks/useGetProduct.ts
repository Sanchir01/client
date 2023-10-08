'use client'
import { useSuspenseQuery, } from '@apollo/client'
import {
	GetAllProductInput,
	GetAllProductsDashboardDocument,
} from '../../graphql/gql/graphql'

export const useGetProductNoSeo = ({
	categoryId,
	maxPrice,
	minPrice,
	sort,
	newProduct,
	page = '1',
	perPage = '4',
	seller,
	searchTerm,
}: GetAllProductInput) => {
	const { data, error } = useSuspenseQuery(GetAllProductsDashboardDocument, {
		variables: {
			getAllProductInput: {
				categoryId,
				maxPrice,
				minPrice,
				sort,
				newProduct,
				page,
				perPage,
				seller,
				searchTerm,
			},
		},
	})
	data.getAllProducts

	return { data, error }
}
