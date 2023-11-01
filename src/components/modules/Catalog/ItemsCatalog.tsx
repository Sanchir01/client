import styles from '@/styles/desctop/Catalog.module.scss'
import { IPropsOneItem } from '@/types/Catalog.interface'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import AddToFavoritesItem from './AddTofavoritesItem'

const OneItemCatalog: FC<IPropsOneItem> = ({ data }) => {
	return (
		<div className={styles.catalog__item}>
			<Link href={`/catalog/${data.id}`} className={styles.image}>
				<Image
					loading='lazy'
					className={styles.image__item}
					src={data.images[1]}
					alt={data.name}
					width={450}
					height={400}
				/>
			</Link>
			<div className='flex justify-between'>
				<div className='flex flex-col'>
					<h5>{data.name}</h5>
					<p>{data.price} P</p>
				</div>
				<AddToFavoritesItem
					id={data.id}
					images={data.images}
					price={data.price}
					name={data.name}
					size={data.size || []}
				/>
			</div>
		</div>
	)
}

export default OneItemCatalog
