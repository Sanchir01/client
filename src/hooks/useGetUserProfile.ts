import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import {
	GetUserFavoritesIdArrayDocument,
	GetUserFavoritesIdArrayQuery
} from '../../graphql/gql/graphql'

export const useGetUserProfileFavoritesId = () => {
	const [favorites, setFavorites] = useState<GetUserFavoritesIdArrayQuery>(
		{} as GetUserFavoritesIdArrayQuery
	)
	const toggleFavorites = async () => {
		const { data } = await useQuery(GetUserFavoritesIdArrayDocument)

		data !== undefined && setFavorites(data)
	}
	useEffect(() => {
		toggleFavorites()
	}, [])
	return { favorites }
}
