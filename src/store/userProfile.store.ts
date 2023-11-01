import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

export interface IUSer {
	__typename?: string | undefined
	email?: string
	id: number
	isAdmin: boolean
}
export interface userStore {
	user: IUSer | null
	addUser: (data: IUSer | null) => void
}

export const useUserStore = create<userStore>()(
	devtools(
		persist(
			set => ({
				user: {} as IUSer | null,
				addUser: (data: IUSer | null) => set({ user: data })
			}),
			{
				version: 0,
				name: 'user',
				storage: createJSONStorage(() => localStorage),
				skipHydration: true
			}
		)
	)
)
