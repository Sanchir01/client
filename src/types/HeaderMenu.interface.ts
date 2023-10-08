import { GetAllCategoriesQuery } from '../../graphql/gql/graphql'

export interface IPropsMenu {
	title: string
	catalog: GetAllCategoriesQuery
}