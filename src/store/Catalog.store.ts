import { IFiltersAndSorting } from '@/types/Filters.types'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export const filtersStore = create<IFiltersAndSorting>()(
	devtools(set => ({
		sorting: '',
		categoriesId: '1',
		rangeMax: 10000,
		changeRangeMax: (data: number | null) => set({ rangeMax: data }),
		changeSorting: (data: string) => set({ sorting: data }),
		changeCategoriesId: (data: string) => set({ categoriesId: data })
	}))
)
