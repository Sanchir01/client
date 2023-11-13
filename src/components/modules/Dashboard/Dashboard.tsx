import { getClient } from '@/apollo/clietn'
import CategoryDashBoard from '@/components/modules/Dashboard/CategoryDashboard/CategoryDashBoard'
import styles from '@/styles/desctop/Dashboard.module.scss'
import { Suspense } from 'react'
import { GetAllProductsDashboardDocument } from '../../../../graphql/gql/graphql'
import DashboardSlider from './dashboardSlider/DashboardSlider'

async function Dashboard() {
	const { data: newsProduct } = await getClient().query({
		query: GetAllProductsDashboardDocument,
		variables: {
			getAllProductInput: { newProduct: true, page: '1', perPage: '8' }
		},
		context: {
			fetchOptions: {
				next: { revalidate: 60 }
			}
		}
	})
	const { data: sellers } = await getClient().query({
		query: GetAllProductsDashboardDocument,
		variables: {
			getAllProductInput: { seller: true, page: '1', perPage: '8' }
		},
		context: {
			fetchOptions: {
				next: { revalidate: 60 }
			}
		}
	})

	return (
		<div className={styles.dashboard}>
			<CategoryDashBoard />
			{
				<Suspense fallback='Loading'>
					<DashboardSlider
						title='Новинки'
						items={newsProduct.getAllProducts.products}
					/>
				</Suspense>
			}
			{
				<Suspense fallback='Loading'>
					<DashboardSlider
						title='Хиты'
						items={sellers.getAllProducts.products}
					/>
				</Suspense>
			}
		</div>
	)
}

export default Dashboard
