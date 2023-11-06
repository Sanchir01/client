import { defaultClient } from '@/apollo/DefaultClient'
import { useSuspenseQuery } from '@apollo/client'
import { FC } from 'react'
import { GetAllProductsDashboardDocument } from '../../../../graphql/gql/graphql'
import DashboardSlider from '../Dashboard/dashboardSlider/DashboardSlider'

const SimilarCart: FC = () => {
	const { data } = useSuspenseQuery(GetAllProductsDashboardDocument, {
		client: defaultClient,
		variables: {
			getAllProductInput: { seller: true, perPage: '20' }
		}
	})
	return (
		<div className='mt-[160px]'>
			<DashboardSlider
				items={data.getAllProducts.products}
				title={'Специально для вас'}
				className=' justify-center flex'
			/>
		</div>
	)
}

export default SimilarCart
