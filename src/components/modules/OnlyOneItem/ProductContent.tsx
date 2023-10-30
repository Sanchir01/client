'use client'
import { Button } from '@/components/ui/button'
import { SizeArray } from '@/constants/Size.content'
import { ISize, cartStore } from '@/store/Cart.store'
import { FC, useState } from 'react'
import AddToFavoritesItem from '../Catalog/AddTofavoritesItem'

export interface IProductContent {
	__typename?: string | undefined
	id: number
	description: string
	images: string[]
	name: string
	price: number
	categoryId: number
}

const ProductContent: FC<{ item: IProductContent }> = ({ item }) => {
	const [activeIndex, setActiveIndex] = useState<number>(0)
	const [Size, setSize] = useState<ISize>({} as ISize)
	const cart = cartStore(state => state.cartArray)
	const toggleCart = cartStore(state => state.toggleCart)

	const toggleSizeActive = ({ size }: { size: ISize }) => {
		setActiveIndex(size.id), setSize(size)
	}

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
			quantity: 1
		})
	}

	const isExistCartItem = cart.find(cart => cart.id === item.id)
	return (
		<div className='flex flex-col gap-4'>
			<h1 className='text-3xl font-semibold'>{item.name}</h1>
			<p className='text-xl'>Тут на будущее сделал блок для вб айди</p>
			<p className='text-xl'>Sandjma Store</p>
			<p className='text-xl'>{item.price} Р</p>
			<div className='flex gap-2'>
				{SizeArray.map((size, i) => (
					<Button
						onClick={() => toggleSizeActive({ size: size })}
						variant={size.id === activeIndex ? 'default' : 'outline'}
						key={size.id}
					>
						{size.size}
					</Button>
				))}
			</div>
			<div className='flex gap-3 items-center'>
				<Button onClick={() => toggleCartButton({ item: item, Size: Size })}>
					{!!isExistCartItem ? 'Удалить из корзины' : 'Добавить в корзину'}
				</Button>
				<AddToFavoritesItem id={item.id} />
			</div>
		</div>
	)
}

export default ProductContent
