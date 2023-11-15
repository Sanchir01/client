import Login from '@/components/templates/Login'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Login',
	description: 'LOgin',
}
export const dynamic = 'force-dynamic'
export default function Page() {
	return <Login />
}
