'use client'
import { defaultClient } from '@/apollo/DefaultClient'
import { Button } from '@/components/ui/button'
import { useMutation, useQuery } from '@apollo/client'
import { FC } from 'react'
import toast from 'react-hot-toast'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import {
	GetUserFavoritesIdArrayDocument,
	ToggleFavoritesProfileDocument
} from '../../../../graphql/gql/graphql'

const AddToFavoritesItem: FC<{ id: number }> = ({ id }) => {
	const [mutate] = useMutation(ToggleFavoritesProfileDocument, {
		client: defaultClient,
		// refetchQueries: [
		// 	{
		// 		query: GetUserFavoritesIdArrayDocument
		// 	}
		// ]
		update(cache) {
			const ArrayId = cache.readQuery({
				query: GetUserFavoritesIdArrayDocument
			})
			const isArray = ArrayId?.getProfile.favorites?.find(el => el.id !== id)

			if (isArray?.id === id) {
				cache.modify({
					fields: {
						favorites(Product = []) {
							return Product.filter((el: any) => el.__ref !== `Product:${id}`)
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

	const toggle = async (id: number) => {
		await mutate({ variables: { productId: id } })
			.then(res => toast.success(res.data?.toggleFavoritesProfile as string))
			.catch(er => toast.error(er.message))
	}

	const { data: favo, loading } = useQuery(GetUserFavoritesIdArrayDocument, {
		client: defaultClient
	})
	// const data = defaultClient.query({ query: GetUserFavoritesIdArrayDocument })

	const isExistFavorites = loading
		? false
		: favo?.getProfile?.favorites?.some(el => el.id === id)

	return (
		<Button onClick={() => toggle(id)} variant={'secondary'}>
			{!isExistFavorites ? (
				<MdFavoriteBorder size={20} />
			) : (
				<MdFavorite size={20} />
			)}
		</Button>
	)
}

export default AddToFavoritesItem
