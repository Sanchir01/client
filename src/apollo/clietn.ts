import { EnumTokens } from '@/service/auth.service'
import { HttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'
import {
	NextSSRApolloClient,
	NextSSRInMemoryCache,
} from '@apollo/experimental-nextjs-app-support/ssr'
import Cookies from 'js-cookie'

export const { getClient } = registerApolloClient(() => {
	const authLink = setContext((_, { headers }) => {
		const accessToken = Cookies.get(EnumTokens.REFRESH_TOKEN)
		return {
			headers: {
				...headers,
				authorization: accessToken ? `Bearer ${accessToken}` : '',
			},
		}
	})
	const myLink = new HttpLink({
		uri: process.env.NEXT_PUBLIC_SERVER_URL,
		credentials: 'include',
	})
	return new NextSSRApolloClient({
		cache: new NextSSRInMemoryCache(),
		link: authLink.concat(myLink),
	})
})
