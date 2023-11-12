'use client'
import { useCartStore } from '@/store/Cart.store'
import styles from '@/styles/desctop/Cart.module.scss'
import { FC, useEffect, useState } from 'react'
import ItemCart from './ItemCart'
import Order from './Order'

const MainCart: FC = () => {
	const cart = useCartStore(state => state.cart)

	const [hasHydrated, setHasHydrated] = useState(false)

	useEffect(() => {
		useCartStore.persist.rehydrate()
		setHasHydrated(true)
	}, [])

	if (!hasHydrated) return <>Загрузка</>
	console.log(cart, 'cart')
	return (
		<div className={styles.cart__main}>
			<div className={styles.cart__main__items}>
				{cart.map((item, i) => (
					<ItemCart
						image={item.image}
						key={i}
						id={item.id}
						name={item.name}
						price={item.price}
						size={item.size}
						quantity={item.quantity}
					/>
				))}
			</div>
			<div className={styles.cart__main__order}>
				<Order />
			</div>
		</div>
	)
}

export default MainCart
