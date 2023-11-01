import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export interface ISize {
	__typename?: 'Size' | undefined
	id: number
	name: string
}

export interface ICartStoreToggle {
	id: number
	name: string
	price: number
	size: ISize
	quantity: number
}

export interface ICartStore {
	cartArray: ICartStoreToggle[]
	totalPrice: number
	toggleCart: (data: ICartStoreToggle) => void
	plusItem: (id: number) => void
	removeItem: (id: number) => void
	resetCart: () => void
}

export const cartStore = create<ICartStore>()(
	persist(
		(set, get) => ({
			cartArray: [],
			totalPrice: 0,
			toggleCart: (data: ICartStoreToggle) => {
				const { cartArray } = get()
				const isExistCart = cartArray.some(item => item.id === data.id)
				if (isExistCart) {
					const index = cartArray.findIndex(item => item.id === data.id)
					if (index !== -1) {
						const filtered = cartArray.filter(item => item.id !== data.id)
						set({ cartArray: filtered })
					}
				} else {
					set({ cartArray: [...cartArray, data] })
				}
			},
			plusItem: (id: number) => {
				const { cartArray } = get()
				set({
					cartArray: cartArray.map(item => ({
						...item,
						quantity: item.id === id ? item.quantity++ : item.quantity
					}))
				})
			},

			removeItem: (id: number) => {
				const { cartArray } = get()
				const filtered = cartArray.filter(item => item.id !== id)
				set({ cartArray: filtered })
			},
			resetCart: () => set({ cartArray: [] })
		}),
		{
			version: 1,
			name: 'cart',
			storage: createJSONStorage(() => localStorage)
		}
	)
)
