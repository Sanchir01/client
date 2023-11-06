/* eslint-disable react-hooks/rules-of-hooks */
import { ICartStoreToggle } from '@/types/cart.types'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const allItems = (item: ICartStoreToggle[]) => {
	const totalQuantity = item.reduce((total, item) => total + item.quantity, 0)

	return totalQuantity
}
