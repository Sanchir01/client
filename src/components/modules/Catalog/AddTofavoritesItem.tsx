'use client'
import { defaultClient } from '@/apollo/DefaultClient'
import { Button } from '@/components/ui/button'
import { useMutation, useQuery } from '@apollo/client'
import { FC } from 'react'
import toast from 'react-hot-toast'

import { Heart } from 'lucide-react'
import Link from 'next/link'
import {
	GetUserFavoritesIdArrayDocument,
	ToggleFavoritesProfileDocument
} from '../../../../graphql/gql/graphql'

const AddToFavoritesItem: FC<{ id: number }> = ({ id }) => {
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

	const { data: favo, loading } = useQuery(GetUserFavoritesIdArrayDocument, {
		client: defaultClient
	})

	const isExistFavorites = loading
		? false
		: favo?.getProfile?.favorites?.some(el => el.id === id)

	const toggle = async (id: number) => {
		await mutate({ variables: { productId: id } })
			.then(res => toast.success(res.data?.toggleFavoritesProfile as string))
			.catch(er =>
				toast.loading(
					<div className='flex flex-col gap-3 bg-white  items-center text-black'>
						<p>Для добавления в избранное нужно войти в аккаунт</p>
						<Link className='w-full' href={'/auth/login'}>
							<Button className='w-full' type='button' variant={'default'}>
								Войти
							</Button>
						</Link>
						<Button className='w-full' type='submit' variant={'default'}>
							Закрыть
						</Button>
					</div>,
					{ duration: 2000 }
				)
			)
	}
	return (
		<Button onClick={() => toggle(id)} variant={'secondary'}>
			{<Heart size={20} fill={isExistFavorites ? 'black' : 'white'} />}
		</Button>
	)
}

export default AddToFavoritesItem
