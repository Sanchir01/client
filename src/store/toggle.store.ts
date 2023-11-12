import { create } from 'zustand'

export const toggle = create(set => ({
	toggle: false
}))
