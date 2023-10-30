import { NextResponse, type NextRequest } from 'next/server'
import { GetUserProfileQuery } from '../graphql/gql/graphql'
import { EnumTokens } from './service/auth.service'

export async function middleware(request: NextRequest) {
	const accessToken = request.cookies.get(EnumTokens.ACCESS_TOKEN)?.value
	const refreshToken = request.cookies.get(EnumTokens.REFRESH_TOKEN)?.value

	const loginPage = request.nextUrl.pathname.startsWith('/auth/login')
	const registerPage = request.nextUrl.pathname.startsWith('/auth/register')
	const adminPanel = request.url.includes('/admin')

	if (loginPage || registerPage) {
		if (accessToken && refreshToken) {
			return NextResponse.redirect(new URL('/', request.url))
		}
	}
	if (loginPage || registerPage) return

	if (accessToken === undefined) {
		return NextResponse.redirect(new URL('/auth/login', request.url))
	}

	if (refreshToken === undefined) {
		return
	}
	const query = `query GetProfile {
					getProfile {
						id
						isAdmin
					}
					}`

	const url = process.env.NEXT_PUBLIC_SERVER_URL as string

	const response = (
		await fetch(url, {
			method: 'POST',
			body: JSON.stringify({ query }),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${refreshToken}`
			},

			credentials: 'include'
		}).then(response => response.json())
	).data as GetUserProfileQuery

	if (response.getProfile.isAdmin === true) return

	if (adminPanel) {
		return NextResponse.redirect(new URL('/404', request.url))
	}

	return
	//TODO: create errors message for Unauthorized
}
export const config = {
	matcher: ['/favorites', '/auth/:path*', '/admin/:path*']
}
