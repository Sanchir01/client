'use client'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/Cart.store'
import styles from '@/styles/desctop/Cart.module.scss'
import { ISize } from '@/types/cart.types'
import { Delete, Minus, Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useShallow } from 'zustand/react/shallow'
import AddToFavoritesItem from '../Catalog/AddTofavoritesItem'

export interface IItemCart {
	id: number
	name: string
	price: number
	size: ISize
	quantity: number
	image: string
}

const ItemCart: FC<IItemCart> = ({
	id,
	name,
	price,
	size,
	image,
	quantity
}) => {
	const [minus, plus, toggle] = useCartStore(
		useShallow(state => [state.minus, state.plus, state.toggleCartItem])
	)
	return (
		<div className='flex gap-10 justify-center'>
			<Link href={`/catalog/${id}`}>
				<Image loading='lazy' src={image} alt={name} width={210} height={290} />
			</Link>
			<div className='flex justify-between'>
				<div className='flex flex-col gap-5'>
					<h5 className='font-medium text-xl'>{name}</h5>
					<div className='flex  gap-4 items-center'>
						<span className=''>{size.name}</span>
						<div className='flex items-center gap-1'>
							<Button
								disabled={quantity === 1}
								onClick={() => minus(id, size)}
								variant={'ghost'}
								className='bg-bg_button'
							>
								<Minus size={15} />
							</Button>
							<span className='block px-5 py-2 bg-bg_button rounded-md '>
								{quantity}
							</span>

							<Button
								onClick={() => plus(id, size)}
								variant={'ghost'}
								className='bg-bg_button '
							>
								<Plus size={15} />
							</Button>
						</div>
						<span>{price * quantity} Р</span>
					</div>
				</div>
				<div className='flex flex-col gap-5 ml-20'>
					<div className='flex gap-4'>
						<span className={styles.sale}>{Math.round(price * 1.11)} P</span>
						<span>{price} P</span>
					</div>
					<div className='flex gap-5'>
						<Button
							onClick={() =>
								toggle({
									id: id,
									image: image,
									name: name,
									price: price,
									quantity: quantity,
									size: size
								})
							}
							variant={'outline'}
						>
							<Delete />
						</Button>
						<AddToFavoritesItem
							id={id}
							images={[image]}
							name={name}
							price={price}
							size={[size]}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ItemCart
