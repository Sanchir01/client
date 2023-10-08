import styles from '@/styles/desctop/Header.module.scss'
import Link from 'next/link'

import { FC } from 'react'
import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai'
import { BsCart } from 'react-icons/bs'
import { MdAdminPanelSettings } from 'react-icons/md'
import { RxAvatar } from 'react-icons/rx'

const Header_right: FC = () => {
	return (
		<div className={styles.header__right}>
			<Link href='/catalog'>
				<AiOutlineSearch size={30} />
			</Link>
			<Link href='/favorites'>
				<div className={styles.header__right__favorites}>
					<AiOutlineHeart size={30} />
					<span className={styles.header__right__favorites__span}>1</span>
				</div>
			</Link>
			<Link href='/profile'>
				<RxAvatar size={30} />
			</Link>
			<Link href='/cart'>
				<div className={styles.header__right__cart}>
					<BsCart size={30} />
					<span className={styles.header__right__cart__span}>1</span>
				</div>
			</Link>
			{true ? (
				<Link href={'/admin'}>
					<MdAdminPanelSettings size={30} />{' '}
				</Link>
			) : (
				<></>
			)}
		</div>
	)
}

export default Header_right
