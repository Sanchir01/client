'use client'
import { ToggleHeader } from '@/store/ToggleHeader.store'
import styles from '@/styles/desctop/Header.module.scss'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

export const Header: FC<{ children: React.ReactNode }> = ({ children }) => {
	const pathname = usePathname()
	const toggleHeader = ToggleHeader(state => state.headerBoolean)
	return (
		<header
			className={`${styles.header} ${
				!toggleHeader || pathname !== '/' ? styles.header__sticky : ''
			} absolute text-xl font-medium z-[2]`}
		>
			{children}
		</header>
	)
}

export default Header
