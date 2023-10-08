import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Admin panel',
	...NO_INDEX_PAGE
}

export default function Page() {
	return <div className='text-black'>Admin Panel</div>
}
