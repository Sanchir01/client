import { getClient } from '@/apollo/clietn'
import styles from '@/styles/desctop/Dashboard.module.scss'
import { GetAllProductsDashboardDocument } from '../../../../graphql/gql/graphql'
import Description from './Description'
import DashboardSlider from './dashboardSlider/DashboardSlider'

async function Dashboard() {
	const { data: newsProduct, loading } = await getClient().query({
		query: GetAllProductsDashboardDocument,
		variables: {
			getAllProductInput: { newProduct: true, page: '1', perPage: '8' },
		},
		context: {
			fetchOptions: {
				next: { revalidate: 600 },
			},
		},
	})
	const { data: sellers, loading: loadingSeller } = await getClient().query({
		query: GetAllProductsDashboardDocument,
		variables: {
			getAllProductInput: { seller: true, page: '1', perPage: '8' },
		},
		context: {
			fetchOptions: {
				next: { revalidate: 600 },
			},
		},
	})

	return (
		<div className={styles.dashboard}>
			{loading ? (
				'Loading'
			) : (
				<DashboardSlider items={newsProduct} title='Новинки' />
			)}
			{loadingSeller ? (
				'Loading'
			) : (
				<DashboardSlider items={sellers} title='Хиты' />
			)}
			<Description />
		</div>
	)
}

export default Dashboard
