export interface IFiltersAndSorting {
	sorting: string
	categoriesId: string
	rangeMax: number | null
	changeSorting: (data: string) => void
	changeRangeMax: (data: number | null) => void
	changeCategoriesId: (data: string) => void
}
