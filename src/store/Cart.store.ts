import { CartStore } from '@/types/cart.types'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export const useCartStore = create<CartStore>()(
	persist(
		set => ({
			cart: [],
			totalPrice: 0,
			toggleCartItem: item =>
				set(state => {
					const index = state.cart.findIndex(
						cartItem =>
							cartItem.id === item.id && cartItem.size.id === item.size.id
					)

					if (index === -1) {
						state.cart.push(item)
						state.totalPrice += item.price
					} else {
						state.cart.splice(index, 1)
						state.totalPrice -= item.price
					}

					return { cart: [...state.cart], totalPrice: state.totalPrice }
				}),
			plus: data =>
				set(state => {
					const index = state.cart.findIndex(
						cartItem =>
							cartItem.id === data.id && cartItem.size.id === data.size.id
					)

					state.cart[index].quantity += 1
					state.totalPrice -= state.cart[index].price

					return { cart: [...state.cart], totalPrice: state.totalPrice }
				}),
			minus: data =>
				set(state => {
					const index = state.cart.findIndex(
						cartItem =>
							cartItem.id === data.id && cartItem.size.id === data.size.id
					)

					state.cart[index].quantity -= 1
					state.totalPrice -= state.cart[index].price

					return { cart: [...state.cart], totalPrice: state.totalPrice }
				}),

			resetCart: () => set({ cart: [] })
		}),
		{
			version: 0,
			name: 'cart',
			storage: createJSONStorage(() => localStorage)
		}
	)
)
