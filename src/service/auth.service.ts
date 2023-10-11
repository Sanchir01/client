import Cookies from 'js-cookie'

export enum EnumTokens {
	ACCESS_TOKEN = 'accessToken',
	REFRESH_TOKEN = 'refreshToken'
}

export const AuthService = {
	saveTokenToStorage: (refreshToken: string) => {
		const oneDay = 2 * 24 * 60 * 60 * 1000
		const expirationDate = new Date(Date.now() + oneDay)
		Cookies.set(EnumTokens.REFRESH_TOKEN, refreshToken, {
			expires: expirationDate,
			domain: `localhost`,
			sameSite: 'Strict',
			secure: false,
			path: '/'
		})
	},
	getRefreshToken: () => Cookies.get(EnumTokens.REFRESH_TOKEN),

	removerTokenFromStorage: () => {
		Cookies.remove(EnumTokens.REFRESH_TOKEN)
		Cookies.remove(EnumTokens.ACCESS_TOKEN)
	},

	logout: () => {
		AuthService.removerTokenFromStorage()
		localStorage.removeItem('User')
	}
}
