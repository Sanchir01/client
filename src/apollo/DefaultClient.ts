import { AuthService } from '@/service/auth.service'
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const link = createHttpLink({
	uri: process.env.NEXT_PUBLIC_SERVER_URL,
	credentials: 'include'
})
const authLink = setContext((_, { headers }) => {
	const token =  AuthService.getRefreshToken()
	return {
		headers: {
			...headers,
			Authorization: token ? `Bearer ${token}` : ''
		}
	}
})
export const defaultClient = new ApolloClient({
	cache: new InMemoryCache(),
	connectToDevTools: true,
	link: authLink.concat(link)
})
