import styles from '@/styles/desctop/Catalog.module.scss'
import { IPropsCatalog } from '@/types/Catalog.interface'
import { FC } from 'react'
import FiltersAndSorting from '../modules/Catalog/FiltersAndSort/FiltersAndSorting'
import OneItemCatalog from '../modules/Catalog/ItemsCatalog'

const Catalog: FC<IPropsCatalog> = ({
	title,
	isFavorites = false,
	Products,
	loading
}) => {
	return (
		<section className={styles.catalog}>
			<div className={styles.wrapper}>
				<h1>{title}</h1>
				{isFavorites ? <FiltersAndSorting /> : <></>}
				<div className={styles.catalog__grid}>
					{loading
						? 'Loading'
						: Products.map(product => (
								<OneItemCatalog key={product.id} data={product} />
						  ))}
				</div>
			</div>
		</section>
	)
}

export default Catalog
