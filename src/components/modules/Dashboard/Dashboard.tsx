import { getClient } from '@/apollo/clietn'
import CategoryDashBoard from '@/components/modules/Dashboard/CategoryDashboard/CategoryDashBoard'
import styles from '@/styles/desctop/Dashboard.module.scss'
import { GetAllProductsDashboardDocument } from '../../../../graphql/gql/graphql'
import DashboardSlider from './dashboardSlider/DashboardSlider'

async function Dashboard() {
	const { data: newsProduct, loading } = await getClient().query({
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
	const { data: sellers, loading: loadingSeller } = await getClient().query({
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
			{loading ? (
				'Loading'
			) : (
				<DashboardSlider
					title='Новинки'
					items={newsProduct.getAllProducts.products}
				/>
			)}
			{loadingSeller ? (
				'Loading'
			) : (
				<DashboardSlider title='Хиты' items={sellers.getAllProducts.products} />
			)}
		</div>
	)
}

export default Dashboard
