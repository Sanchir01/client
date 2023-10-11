import { ApolloWrapper } from '@/Providers/ApolloProvider/apollo.roviders'
import Footer from '@/components/modules/Footer/Footer'
import { Header } from '@/components/modules/Header/Header'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'

import AuthProvider from '@/Providers/AuthProvider/AuthProvider'
import NextLoader from '@/components/ui/NextLoader'
import { Toaster } from 'react-hot-toast'
import './globals.css'
import ContentHeader from '@/components/modules/Header/Content'

const releway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Sandjma',
	description: 'Super Kalmyck shop'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={releway.className}>
				<NextLoader />
				<ApolloWrapper>
					<AuthProvider>
						<div className='wrapper'>
							<Header>
								<ContentHeader />
							</Header>
							<main className='main'>{children}</main>
							<Toaster />
							<Footer />
						</div>
					</AuthProvider>
				</ApolloWrapper>
			</body>
		</html>
	)
}
