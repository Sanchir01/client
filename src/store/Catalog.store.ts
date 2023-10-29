import { IFiltersAndSorting } from '@/types/Filters.types'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export const filtersStore = create<IFiltersAndSorting>()(
	devtools(set => ({
		catalog: [],
		sorting: '',
		categoriesId: 0,
		rangeMax: 0,
		changeRangeMax: (data: number | null) => set({ rangeMax: data }),
		changeSorting: (data: string) => set({ sorting: data }),
		changeCategoriesId: (data: number) => set({ categoriesId: data })
	}))
)
