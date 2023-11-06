'use client'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/Cart.store'
import styles from '@/styles/desctop/Cart.module.scss'
import { Trash2 } from 'lucide-react'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { useShallow } from 'zustand/react/shallow'
import MainCart from '../modules/Cart/MainCart'
import SimilarCart from '../modules/Cart/SimilarCart'

const Cart: FC = () => {
	const [resetCart, cart] = useCartStore(
		useShallow(state => [state.resetCart, state.cart])
	)

	const [hasHydrated, setHasHydrated] = useState(false)

	useEffect(() => {
		useCartStore.persist.rehydrate()
		setHasHydrated(true)
	}, [])

	if (!hasHydrated) return <>Загрузка</>
	return (
		<section className={styles.cart}>
			<div className={styles.cart__wrapper}>
				<div
					className={`${
						cart.length === 0 ? 'flex justify-center pb-5' : styles.cart__header
					} `}
				>
					<h1 className={styles.cart__header__title}>Корзина</h1>
					{cart.length !== 0 && (
						<Button
							variant={'outline'}
							className='flex gap-3'
							onClick={resetCart}
						>
							<h4>Очистить корзину</h4>
							<Trash2 color='black' />
						</Button>
					)}
				</div>
				{cart.length === 0 ? (
					<div className=' justify-center flex gap-5 items-center'>
						<p className='text-2xl font-medium'>В корзине отсутствуют товары</p>
						<Button>
							<Link href={'/catalog'}>Вернутся в каталог</Link>
						</Button>
					</div>
				) : (
					<MainCart />
				)}
			</div>
			{cart.length === 0 && <SimilarCart />}
		</section>
	)
}

export default Cart
