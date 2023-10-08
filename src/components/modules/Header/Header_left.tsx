import Link from 'next/link'
import { FC } from 'react'
import styles from '@/styles/desctop/Header.module.scss'
const Header_left: FC = () => {
  return (
		<div className={styles.header__left}>
			<Link href='/catalog'>Каталог</Link>

			<Link href='/about'>О Нас</Link>

			<Link href='/contacts'>Контакты</Link>
		</div>
	)
}

export default Header_left