import type { Metadata } from 'next'

import About from '@/components/templates/About'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
export const dynamic = 'force-static'

export const metadata: Metadata = {
	title: 'Контакты',
	...NO_INDEX_PAGE
}

export default function Page() {
	return <About />
}
