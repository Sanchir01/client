export interface ISize {
	__typename?: 'Size' | undefined
	id: number
	name: string
}
export interface ICartStoreToggle {
	id: number
	image: string
	name: string
	price: number
	size: ISize
	quantity: number
}

export interface CartStore {
	cart: ICartStoreToggle[]
	totalPrice: number
	toggleCartItem: (item: ICartStoreToggle) => void
	minus: (id: number, size: ISize) => void
	plus: (id: number, size: ISize) => void

	resetCart: () => void
}
