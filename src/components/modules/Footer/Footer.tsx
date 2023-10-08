'use client'
import Container from '@/Providers/Container/Container'
import { useMediaQuery } from '@/hooks/useMedia'
import styles from '@/styles/desctop/Footer.module.scss'
import { FC } from 'react'
import { AccordionDemo } from './Colum'
import Desctop_Content from './Desctrop_Content'

const Footer: FC = () => {
	const useMedia700 = useMediaQuery(700)
	return (
		<footer className={styles.footer}>
			<Container>
				{!useMedia700 ? (
					<div className={`${styles.footer__wrapper} `}>
						<Desctop_Content />
					</div>
				) : (
					<AccordionDemo />
				)}
			</Container>
		</footer>
	)
}

export default Footer
