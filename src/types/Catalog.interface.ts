export interface ISize {
	__typename?: 'Size' | undefined
	id: number
	name: string
}
export interface IPropsProduct {
	__typename?: 'Product' | undefined
	id: number
	images: string[]
	name: string
	price: number
	size?: ISize[]
}

export interface IPropsCatalog {
	title: string
	isFavorites?: boolean
	Products: IPropsProduct[]
	loading: boolean
	notFoundProduct?:string
}

export interface IPropsOneItem {
	data: IPropsProduct
}
