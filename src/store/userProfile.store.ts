import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { LoginMutation } from '../../graphql/gql/graphql'

export interface userStore {
	user: LoginMutation | null
	addUser: (data: LoginMutation | null) => void
}

export const useUserStore = create<userStore>()(
	devtools(
		persist(
			set => ({
				user: {} as LoginMutation | null,
				addUser: (data: LoginMutation | null) => set({ user: data })
			}),
			{
				name: 'User',
				storage: createJSONStorage(() => localStorage)
			}
		)
	)
)
