'use client'
import { defaultClient } from '@/apollo/DefaultClient'
import { useQuery } from '@apollo/client'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { FC } from 'react'
import { GetUserFavoritesAllDocument } from '../../../graphql/gql/graphql'
import SimilarCart from '../modules/Cart/SimilarCart'
import { Button } from '../ui/button'
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
	) : error ? (
		redirect('404')
	) : (
		<div className='flex flex-col gap-10 text-black'>
			{data?.getProfile.favorites?.length !== 0 ? (
				<Catalog
					title={'Избранное'}
					Products={data?.getProfile.favorites!}
					loading={false}
					notFoundProduct='Список желаний пуст'
				/>
			) : (
				<div className='mt-[160px]'>
					<div className='flex justify-center gap-5 items-center'>
						<p className='text-2xl font-medium'>В избранном нет товаров.</p>
						<Link href={'/catalog'}>
							<Button className='text-xl'>Вернуться в каталог</Button>
						</Link>
					</div>
					<SimilarCart />
				</div>
			)}
		</div>
	)
}

export default Favorites
