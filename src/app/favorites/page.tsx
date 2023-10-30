import type { Metadata } from 'next'

import { getClient } from '@/apollo/clietn'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import Catalog from '@/components/templates/Catalog'
import { redirect } from 'next/navigation'
import { GetUserFavoritesAllDocument } from '../../../graphql/gql/graphql'

export const metadata: Metadata = {
	title: 'favorites',
	...NO_INDEX_PAGE
}

export default async function Page() {
	const { data, loading, error } = await getClient().query({
		query: GetUserFavoritesAllDocument
	})

	return loading ? (
		<div>Loading</div>
	) : error ? (
		redirect('404')
	) : (
		<Catalog
			title={'Избранное'}
			Products={data.getProfile.favorites!}
			loading={false}
			notFoundProduct='Список желаний пуст'
		/>
	)
}
