export interface IPropsProduct {
	id: number
	images: string[]
	name: string
	price: number
}

export interface IPropsCatalog {
	title: string
	isFavorites: boolean
	Products: IPropsProduct[]
	loading: boolean
}

export interface IPropsOneItem {
	data: IPropsProduct
}