import styles from '@/styles/desctop/BG_auth.module.scss'
import { FC, ReactNode } from 'react'

const Centering: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className={`min-h-screen flex flex-col justify-center items-center ${styles.bg}`}>
			{children}
		</div>
	)
}

export default Centering
