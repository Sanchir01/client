import Login from '@/components/templates/Login'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Login',
	description: 'LOgin',
}

export default function Page() {
	return <Login />
}
