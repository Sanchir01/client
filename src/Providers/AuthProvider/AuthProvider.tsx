/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { defaultClient } from '@/apollo/DefaultClient'
import { AuthService, EnumTokens } from '@/service/auth.service'
import { useUserStore } from '@/store/userProfile.store'
import { useMutation } from '@apollo/client'
import Cookies from 'js-cookie'
import { usePathname } from 'next/navigation'
import { FC, PropsWithChildren, useEffect } from 'react'
import { GetNewTokenDocument } from '../../../graphql/gql/graphql'

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const user = useUserStore(state => state.user)
	const addUser = useUserStore(state => state.addUser)
	const pathname = usePathname()

	const [newTokensMutation] = useMutation(GetNewTokenDocument, {
		client: defaultClient
	})

	useEffect(() => {
		if (!user) return

		const refreshToken = Cookies.get(EnumTokens.REFRESH_TOKEN)
		if (refreshToken) {
			return
		}

		const mutateToken = async () => {
			try {
				const { data } = await newTokensMutation()

				if (!data?.newToken) {
					AuthService.logout()
					addUser(null)
					return
				}
			} catch (err) {
				console.log(err)
				AuthService.logout()
				addUser(null)
			}
		}

		mutateToken()
	}, [pathname, user])

	return children
}

export default AuthProvider
