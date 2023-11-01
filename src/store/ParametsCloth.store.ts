import { ISize } from '@/types/cart.types'
import { create } from 'zustand'


export interface IParameterCloth {
	size: ISize
	changeSize: (data: ISize) => void
}

export const useParameterCloth = create<IParameterCloth>(set => ({
	size: { id: 0, name: 'XL' },
	changeSize: (data: ISize) => set({ size: data })
}))
