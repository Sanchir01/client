import Register from '@/components/templates/Register'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Registration',
	description: 'Registration',
}
export const dynamic = 'force-dynamic'
export default function Page() {
	return <Register />
}
