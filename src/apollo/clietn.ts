import { EnumTokens } from '@/service/auth.service'
import { HttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'
import {
	NextSSRApolloClient,
	NextSSRInMemoryCache
} from '@apollo/experimental-nextjs-app-support/ssr'
import Cookies from 'js-cookie'
import { cookies } from 'next/headers'
export const { getClient } = registerApolloClient(() => {
	const authLink = setContext((_, { headers }) => {
		const cookieStore = cookies()
		const token = cookieStore.get(EnumTokens.ACCESS_TOKEN)?.value

		const tokens = Cookies.get(EnumTokens.ACCESS_TOKEN)
		return {
			headers: {
				...headers,
				authorization: tokens ? `Bearer ${tokens}` : ''
			}
		}
	})
	const myLink = new HttpLink({
		uri: process.env.NEXT_PUBLIC_SERVER_URL,
		credentials: 'include'
	})
	return new NextSSRApolloClient({
		cache: new NextSSRInMemoryCache(),
		link: authLink.concat(myLink)
	})
})
