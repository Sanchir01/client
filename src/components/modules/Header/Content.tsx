import Container from '@/Providers/Container/Container'
import logo from '@/assets/header/logo.png'
import styles from '@/styles/desctop/Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import Header_left from './Header_left'
import Header_right from './Header_right'

const ContentHeader: FC = () => {
	return (
		<Container>
			<div className={styles.header__wrapper}>
				<Header_left />
				<div className={styles.header__logo}>
					<Link className={styles.header__logo__link} href='/'>
						<Image
							loading='lazy'
							className='object-cover'
							src={logo}
							width={200}
							height={100}
							alt='logo'
						/>
					</Link>
				</div>
				<Header_right />
			</div>
		</Container>
	)
}

export default ContentHeader
