import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import Favorites from '@/components/templates/Favorites'

export const metadata: Metadata = {
	title: 'favorites',
	...NO_INDEX_PAGE
}

export default function Page() {
	return <Favorites />
}
