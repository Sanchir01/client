import { makeClient } from '@/apollo/Apollo.provider'
import { defaultClient } from '@/apollo/DefaultClient'
import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support/ssr'

export function ApolloWrapper({ children }: React.PropsWithChildren) {
	return (
		<ApolloNextAppProvider makeClient={makeClient || defaultClient}>
			{children}
		</ApolloNextAppProvider>
	)
}
