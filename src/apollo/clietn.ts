import { EnumTokens } from '@/service/auth.service'
import { HttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'
import {
	NextSSRApolloClient,
	NextSSRInMemoryCache
} from '@apollo/experimental-nextjs-app-support/ssr'
import Cookies from 'js-cookie'

export const { getClient } = registerApolloClient(() => {
	const authLink = setContext((_, { headers }) => {
		const cookieStore = Cookies.get(EnumTokens.ACCESS_TOKEN)
		console.log(cookieStore, 'cookie')
		// const token = cookieStore.get(EnumTokens.ACCESS_TOKEN)?.value
		return {
			headers: {
				...headers,
				authorization: cookieStore ? `Bearer ${cookieStore}` : ''
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
