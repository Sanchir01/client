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
	const { data: favorites, loading } = useQuery(
		GetUserFavoritesIdArrayDocument,
		{
			client: defaultClient
		}
	)
	const toggle = async (id: number) => {
		await mutate({ variables: { productId: id } })
			.then(res => toast.success(res.data?.toggleFavoritesProfile as string))
			.catch(er => console.log(er.message))
	}

	const isExistFavorites = loading
		? false
		: favorites?.getProfile?.favorites?.some(el => el.id === id)
	return (
		<Button onClick={() => toggle(id)} variant={'secondary'}>
			{isExistFavorites ? (
				<Heart size={20} fill={'black'} />
			) : (
				<Heart size={20} fill={'white'} />
			)}
		</Button>
	)
}

export default AddToFavoritesItem
