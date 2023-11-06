/* eslint-disable react/display-name */
'use client'
import { defaultClient } from '@/apollo/DefaultClient'
import { Button } from '@/components/ui/button'
import { IPropsProduct } from '@/types/Catalog.interface'
import { useMutation, useQuery } from '@apollo/client'
import { Heart } from 'lucide-react'
import { FC } from 'react'
import toast from 'react-hot-toast'
import {
	GetUserFavoritesAllDocument,
	GetUserFavoritesIdArrayDocument,
	ToggleFavoritesProfileDocument
} from '../../../../graphql/gql/graphql'

const AddToFavoritesItem: FC<IPropsProduct> = ({
	id,
	images,
	name,
	price,
	size
}) => {
	const [mutate] = useMutation(ToggleFavoritesProfileDocument, {
		client: defaultClient,
		update(cache) {
			const ArrayId = cache.readQuery({
				query: GetUserFavoritesIdArrayDocument
			})
			const isArray = ArrayId?.getProfile.favorites?.find(el => el.id === id)
			const isDeleteFavorites = ArrayId?.getProfile.favorites?.filter(
				el => el.id !== id
			)
			const favoritesArray = cache.readQuery({
				query: GetUserFavoritesAllDocument
			})

			const favoritesIsExist = favoritesArray?.getProfile.favorites?.find(
				favo => favo.id === id
			)

			const filteredFavoritesItem =
				favoritesArray?.getProfile.favorites?.filter(favo => favo.id !== id)

			if (!!favoritesIsExist) {
				cache.writeQuery({
					query: GetUserFavoritesAllDocument,
					data: {
						getProfile: {
							favorites: [...filteredFavoritesItem!]
						}
					}
				})
			} else {
				cache.writeQuery({
					query: GetUserFavoritesAllDocument,
					data: {
						getProfile: {
							favorites: [
								{
									__typename: 'Product',
									id: id,
									images: images,
									name: name,
									price: price,
									size: size ? size : []
								},
								...favoritesArray?.getProfile.favorites!
							]
						}
					}
				})
			}
			if (!!isArray) {
				cache.writeQuery({
					query: GetUserFavoritesIdArrayDocument,
					data: {
						getProfile: {
							favorites: [...isDeleteFavorites!]
						}
					}
				})
			} else {
				cache.writeQuery({
					query: GetUserFavoritesIdArrayDocument,
					data: {
						getProfile: {
							favorites: [
								{ __typename: 'Product', id: id },
								...ArrayId?.getProfile.favorites!
							]
						}
					}
				})
			}
		}
	})
	const { data: favo, loading } = useQuery(GetUserFavoritesIdArrayDocument, {
		client: defaultClient
	})

	const isExistFavorites = loading
		? false
		: favo?.getProfile?.favorites?.some(el => el.id === id)

	const toggle = async (id: number) => {
		await mutate({ variables: { productId: id } })
			.then(res => toast.success(res.data?.toggleFavoritesProfile as string))
			.catch(er => console.log(er))
	}
	return (
		<Button onClick={() => toggle(id)} variant={'secondary'}>
			{<Heart size={20} fill={isExistFavorites ? 'black' : 'white'} />}
		</Button>
	)
}

export default AddToFavoritesItem
