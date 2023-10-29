export interface IItemsSlider {
	__typename?: string | undefined
	id: number
	images: string[]
	name: string
	price: number
}

export interface IDashboardSliderContent {
	items: IItemsSlider[]
	title: string
}
