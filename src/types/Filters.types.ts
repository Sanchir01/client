import { IPropsProduct } from './Catalog.interface'

export interface IFiltersAndSorting {
	catalog: IPropsProduct[]
	sorting: string
	categoriesId: number
	rangeMax: number | null
	changeSorting: (data: string) => void
	changeRangeMax: (data: number | null) => void
	changeCategoriesId: (data: number) => void
}
