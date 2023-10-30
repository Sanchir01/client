/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { defaultClient } from '@/apollo/DefaultClient'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/components/ui/sheet'
import { useCheckParams } from '@/hooks/useCheckParams'
import { filtersStore } from '@/store/Catalog.store'
import { useQuery } from '@apollo/client'
import { SlidersHorizontal } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { FC, useState } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { GetAllCategoriesDocument } from '../../../../../graphql/gql/graphql'
import Range from './Range'
const Categories: FC = () => {
	const { data, loading } = useQuery(GetAllCategoriesDocument, {
		client: defaultClient
	})

	const [categoriesIdZustand, changeCategoriesId, sliderValue, changeRangeMax] =
		filtersStore(
			useShallow(state => [
				state.categoriesId,
				state.changeCategoriesId,
				state.rangeMax,
				state.changeRangeMax
			])
		)
	const [indexCategory, setIndexCategory] = useState<number>(0)

	const { replace } = useRouter()
	const params = useSearchParams()
	const pathname = usePathname()

	const sorting = params.get('sorting')

	const { sortingIsExist } = useCheckParams({ sort: sorting })
	const changeProduct = () => {
		replace(
			`${pathname}?${sortingIsExist}&categoryId=${categoriesIdZustand}&maxRange=${sliderValue}`
		)
	}

	const resetFilters = () => {
		changeRangeMax(10000)
		replace(`${pathname}?${sortingIsExist}`)
	}

	return (
		<Sheet>
			<SheetTrigger asChild>
				<div className='flex gap-3'>
					<p>Фильтры</p>
					<SlidersHorizontal className='hover:cursor-pointer' />
				</div>
			</SheetTrigger>
			<SheetContent side='left' className='text-black'>
				<SheetHeader>
					<SheetTitle>Фильтры</SheetTitle>
					<SheetDescription>Выберите фильтры для товаров</SheetDescription>
				</SheetHeader>
				<div className='grid gap-4 py-4'>
					<div className='grid grid-cols-4 items-center gap-4'>
						<Label htmlFor='category' className='text-right'>
							Выберите категорию
						</Label>
						<Select
							onValueChange={value => (
								changeCategoriesId(value), setIndexCategory(Number(value) - 1)
							)}
						>
							<SelectTrigger className='w-[220px]'>
								<SelectValue
									placeholder={
										data ? data.getAllCategories[indexCategory].name : ''
									}
								/>
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									{loading
										? 'Loading'
										: data?.getAllCategories.map(item => (
												<SelectItem key={item.id} value={item.id.toString()}>
													{item.name}
												</SelectItem>
										  ))}
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
				</div>
				<Range />
				<SheetFooter>
					<div className='flex flex-col gap-2 w-full'>
						<SheetClose asChild>
							<Button type='button' onClick={resetFilters}>
								Сбросить фильтры
							</Button>
						</SheetClose>
						<SheetClose asChild>
							<Button type='button' onClick={changeProduct}>
								Применить фильтры
							</Button>
						</SheetClose>
					</div>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}

export default Categories
