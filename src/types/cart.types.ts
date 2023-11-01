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

export interface CartStore {
	cart: ICartStoreToggle[]
	totalPrice: number
	toggleCartItem: (item: ICartStoreToggle) => void
	minus: (data: ICartStoreToggle) => void
	plus: (data: ICartStoreToggle) => void
	resetCart: () => void
}
