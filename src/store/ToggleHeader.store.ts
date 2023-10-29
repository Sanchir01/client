import { create } from 'zustand'

export interface IToggleHeader {
	headerBoolean: boolean
	toggleHeaderBoolean: (data: boolean) => void
}

export const ToggleHeader = create<IToggleHeader>(set => ({
	headerBoolean: false,
	toggleHeaderBoolean: (data: boolean) => set({ headerBoolean: data })
}))
