import type { Metadata } from 'next'

import { Button } from '@/components/ui/button'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Not Found',
	...NO_INDEX_PAGE
}

export default function NotFoundPage() {
	return (
		<div className='min-h-screen flex flex-col justify-center items-center '>
			<div className='text-black'>
				Сожалеем но данной страницы не существует
			</div>
			<Link href='/' className='text-black mt-3'>
				<Button>Go back to Home</Button>
			</Link>
		</div>
	)
}
