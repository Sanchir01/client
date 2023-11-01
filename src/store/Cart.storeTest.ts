import { create } from 'zustand'

type Product = {
	id: number
	name: string
	price: number
	images: string[]
}

type CartItem = {
	product: Product
	size: string
	quantity: number
}

type CartState = {
	items: Record<number, CartItem>
	addItem: (product: Product, size: string) => void
}

export const useCart = create<CartState>(set => ({
	items: [],
	addItem: (product, size) =>
		set(state => {
			const itemId = product.id
			const existingItem = state.items[itemId]
			if (existingItem.size !== size) {
				return {
					items: {
						...state.items,
						[itemId]: existingItem
					}
				}
			}
			const quantity = existingItem ? existingItem.quantity + 1 : 1
			const newItem: CartItem = {
				product,
				size,
				quantity
			}
			return {
				items: {
					...state.items,
					[itemId]: newItem
				}
			}
		})
}))
