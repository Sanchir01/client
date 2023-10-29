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
import { useRouter, useSearchParams } from 'next/navigation'
import { FC } from 'react'

const Sort: FC = () => {
	const { replace } = useRouter()
	const paramsSearch = useSearchParams()

	const categoryId = paramsSearch.get('categoryId')
	const categoryIdIsExist = categoryId ? `categoryId=${categoryId}&` : ''

	const changeSort = (value: string) => {
		replace(`/catalog?${categoryIdIsExist}sorting=${value}`)
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
