import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import Cart from '@/components/templates/Cart'

export const metadata: Metadata = {
	title: 'Корзина',
	...NO_INDEX_PAGE
}
export const dynamic = 'force-dynamic'
export default function Page() {
	return <Cart />
}
