import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const link = createHttpLink({
	uri: process.env.NEXT_PUBLIC_SERVER_URL,
	credentials: 'include'
})
const authLink = setContext((_, { headers }) => {
	return {
		headers: {
			...headers
		}
	}
})
export const defaultClient = new ApolloClient({
	cache: new InMemoryCache(),
	connectToDevTools: true,
	link: authLink.concat(link)
})
