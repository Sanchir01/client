'use client'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'
import {
	GetAllProductsDashboardQuery,
	GetOneProductByIdQuery
} from '../../../graphql/gql/graphql'
import DashboardSlider from '../modules/Dashboard/dashboardSlider/DashboardSlider'
import ProductContent from '../modules/OnlyOneItem/ProductContent'
import ProductGallery from '../modules/OnlyOneItem/ProductGallery'

export interface IOneItem {
	similar: GetAllProductsDashboardQuery
	item: GetOneProductByIdQuery
}

const OneItem: FC<IOneItem> = ({ similar, item }) => {
	return (
		<div className='mt-[200px] px-20 text-black'>
			<Link href={'/catalog'} className='flex gap-2'>
				<ArrowLeft />
				<p>В каталог</p>
			</Link>
			<div className='flex gap-20  mt-10 justify-center'>
				<ProductGallery images={item.getProductById.images} />
				<ProductContent item={item.getProductById} />
			</div>
			<DashboardSlider
				items={similar.getAllProducts.products}
				title={'Похожие товары'}
			/>
		</div>
	)
}

export default OneItem
