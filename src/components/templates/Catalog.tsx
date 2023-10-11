import styles from '@/styles/desctop/Catalog.module.scss'
import { FC } from 'react'
import { GetAllProductsDashboardQuery } from './../../../graphql/gql/graphql'

export interface IPropsCatalog {
	title: string
	isFavorites: boolean
	Products: GetAllProductsDashboardQuery
	loading: boolean
}

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
				{isFavorites ? <div className={styles.filters}></div> : <></>}
				{loading
					? 'Loading'
					: Products.getAllProducts.products.map(product => (
							<div key={product.id} className={styles.content}>
								{product.id}
							</div>
					  ))}
			</div>
		</section>
	)
}

export default Catalog
