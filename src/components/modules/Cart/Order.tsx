import { allItems } from '@/lib/utils'
import { useCartStore } from '@/store/Cart.store'
import { FC } from 'react'
import PushOrder from './pushOrder'

const Order: FC = () => {
	const cart = useCartStore(state => state.cart)

	const totalPrice = useCartStore(state => state.totalPrice)
	const allQuantity = allItems(cart)

	return (
		<div className='border rounded-lg shadow p-4'>
			<h2 className='text-2xl font-semibold'>Ваш заказ</h2>
			<div className='flex flex-col items-center gap-2 w-full mt-10 border-b-2 pb-10'>
				{cart.map((item, i) => (
					<div className='flex justify-between w-full' key={i}>
						<div className='flex gap-2'>
							<span>x{item.quantity}</span>
							<p>{item.name}</p>
						</div>
						<div className=''>{item.price}P</div>
					</div>
				))}
			</div>
			<div className='mt-10 flex flex-col gap-3'>
				<div className=' flex justify-between items-center'>
					<div className='flex gap-2'>
						<p>Всего товаров</p>
						<span>{allQuantity}</span>
					</div>
					<div className='flex gap-2'>
						<p>Итоговая сумма:</p>
						<span>{totalPrice}</span>
					</div>
				</div>
				<PushOrder />
			</div>
		</div>
	)
}

export default Order
