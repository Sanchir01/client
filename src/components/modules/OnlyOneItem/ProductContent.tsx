'use client'
import { Button } from '@/components/ui/button'

import { useCartStore } from '@/store/Cart.store'
import { useParameterCloth } from '@/store/ParametsCloth.store'
import { ISize } from '@/types/cart.types'
import { FC } from 'react'
import AddToFavoritesItem from '../Catalog/AddTofavoritesItem'
import SizeLine from './SizeLine'

export interface IProductContent {
	__typename?: string | undefined
	id: number
	description: string
	images: string[]
	name: string
	price: number
	categoryId: number
	size: ISize[]
}

const ProductContent: FC<{ item: IProductContent }> = ({ item }) => {
	const cart = useCartStore(state => state.cart)
	const toggleCart = useCartStore(state => state.toggleCartItem)
	const sizeParameter = useParameterCloth(state => state.size)
	console.log(cart)

	const toggleCartButton = ({
		item,
		Size
	}: {
		item: IProductContent
		Size: ISize
	}) => {
		toggleCart({
			id: item.id,
			name: item.name,
			price: item.price,
			size: Size,
			quantity: 1,
			image: item.images[0]
		})
	}

	const isExistCart = cart.findIndex(
		cart => cart.id === item.id && cart.size === sizeParameter
	)
	return (
		<div className='flex flex-col gap-4'>
			<h1 className='text-3xl font-semibold'>{item.name}</h1>
			<p className='text-xl'>Тут на будущее сделал блок для вб айди</p>
			<p className='text-xl'>Sandjma Store</p>
			<p className='text-xl'>{item.price} Р</p>
			<SizeLine />
			<div className='flex gap-3 items-center'>
				<Button
					onClick={() => toggleCartButton({ item: item, Size: sizeParameter })}
				>
					{isExistCart !== -1 ? 'Удалить из корзины' : 'Добавить в корзину'}
				</Button>
				<AddToFavoritesItem
					id={item.id}
					images={item.images}
					name={item.name}
					price={item.price}
					size={item.size}
				/>
			</div>
		</div>
	)
}

export default ProductContent
