'use client'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'
import { SortingArray } from '@/constants/CatalogSelect.content'
import { useCheckParams } from '@/hooks/useCheckParams'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { FC } from 'react'

const Sort: FC = () => {
	const { replace } = useRouter()
	const paramsSearch = useSearchParams()
	

	const categoryId = paramsSearch.get('categoryId')
	const maxRange = paramsSearch.get('maxRange')

	const pathname = usePathname()
	const { maxRangeIsExist, categoryIdIsExist } = useCheckParams({
		categoryId: categoryId,
		maxRange: maxRange
	})
	const changeSort = (value: string) => {
		replace(
			`${pathname}?sorting=${value}${categoryIdIsExist}${maxRangeIsExist}`
		)
	}
	return (
		<div className='flex items-center gap-2'>
			<p className='flex min-w-[130px]'>Cортировать по:</p>
			<Select onValueChange={value => changeSort(value)}>
				<SelectTrigger>
					<SelectValue placeholder='Выберите сортировку товаров' />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{SortingArray.map(item => (
							<SelectItem key={item.id} value={item.value}>
								{item.name}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	)
}

export default Sort
