'use client'
import { defaultClient } from '@/apollo/DefaultClient'
import { useQuery } from '@apollo/client'
import { FC } from 'react'
import { GetUserFavoritesAllDocument } from '../../../graphql/gql/graphql'
import Catalog from './Catalog'

const Favorites: FC = () => {
	const { data, loading, error } = useQuery(GetUserFavoritesAllDocument, {
		client: defaultClient,
		context: {
			fetchOptions: {
				next: {
					revalidate: 10
				}
			}
		}
	})

	return loading ? (
		<div>Loading</div>
	) : (
		<Catalog
			title={'Избранное'}
			Products={data?.getProfile.favorites!}
			loading={false}
			notFoundProduct='Список желаний пуст'
		/>
	)
}

export default Favorites
