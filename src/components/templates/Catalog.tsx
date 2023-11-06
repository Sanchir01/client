import styles from '@/styles/desctop/Catalog.module.scss'
import { IPropsCatalog } from '@/types/Catalog.interface'
import Link from 'next/link'
import { FC } from 'react'
import FiltersAndSorting from '../modules/Catalog/FiltersAndSort/FiltersAndSorting'
import OneItemCatalog from '../modules/Catalog/ItemsCatalog'
import { Button } from '../ui/button'

const Catalog: FC<IPropsCatalog> = ({
	title,
	isFavorites = false,
	Products,
	loading,
	notFoundProduct = ''
}) => {
	return (
		<section className={styles.catalog}>
			<div className={styles.wrapper}>
				<h1 className={styles.catalog__title}>{title}</h1>
				{isFavorites ? <FiltersAndSorting /> : <></>}
				<div className={styles.catalog__grid}>
					{Products.length === 0 || loading ? (
						<Link href={'/catalog'}>
							<Button className='text-black text-xl font-medium'>
								{notFoundProduct}
							</Button>
						</Link>
					) : (
						Products.map(product => (
							<OneItemCatalog key={product.id} data={product} />
						))
					)}
				</div>
			</div>
		</section>
	)
}

export default Catalog
