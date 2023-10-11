'use client'
import styles from '@/styles/desctop/Header.module.scss'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import ContentHeader from './Content'

export const Header: FC<{ children: React.ReactNode }> = ({ children }) => {
	const pathname = usePathname()
	return (
		<header
			className={`${styles.header} ${
				pathname !== '/' ? 'text-black' : ''
			} absolute text-xl font-medium z-[2]`}
		>
			{children}
		
		</header>
	)
}

export default Header
