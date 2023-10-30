import { getClient } from '@/apollo/clietn'
import styles from '@/styles/desctop/CategoryDashboard.module.scss'
import { FC } from 'react'
import { GetAllCategoriesDocument } from '../../../../../graphql/gql/graphql'
import OneCategoryBlock from './OneCategoryBlock'

const CategoryDashBoard: FC = async () => {
	const { data, loading } = await getClient().query({
		query: GetAllCategoriesDocument,
		context: {
			fetchOptions: {
				next: { revalidate: 50 }
			}
		}
	})

	return (
		<section className={styles.category}>
			<div className={styles.wrapper}>
				<div className={styles.category}>
					{loading ? (
						<div>Loading</div>
					) : (
						data.getAllCategories.map(item => (
							<OneCategoryBlock
								key={item.id}
								id={item.id}
								image={item.image}
								title={item.name}
							/>
						))
					)}
				</div>
			</div>
		</section>
	)
}

export default CategoryDashBoard
