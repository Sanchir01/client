'use client'
import styles from '@/styles/desctop/Header.module.scss'
import { useQuery } from '@apollo/client'
import Link from 'next/link'

import { defaultClient } from '@/apollo/DefaultClient'
import {
	Heart,
	Search,
	ShieldCheck,
	ShoppingCart,
	UserCircle2
} from 'lucide-react'
import { FC } from 'react'

import { cartStore } from '@/store/Cart.store'
import { GetUserFavoritesIdArrayDocument } from '../../../../graphql/gql/graphql'

const Header_right: FC = () => {
	const { data: favo, loading } = useQuery(GetUserFavoritesIdArrayDocument, {
		client: defaultClient
	})
	const cartLenght = cartStore(state => state.cartArray)
	return (
		<div className={styles.header__right}>
			<Link href='/catalog'>
				<Search size={30} />
			</Link>
			<Link href='/favorites'>
				<div className={styles.header__right__favorites}>
					<Heart size={30} />
					<span className={styles.header__right__favorites__span}>
						{loading || favo?.getProfile.favorites?.length === 0
							? ''
							: favo?.getProfile.favorites?.length}
					</span>
				</div>
			</Link>
			<Link href='/profile'>
				<UserCircle2 size={30} />
			</Link>
			<Link href='/cart'>
				<div className={styles.header__right__cart}>
					<ShoppingCart size={35} />
					{cartLenght.length === 0 ? (
						<></>
					) : (
						<span className={styles.header__right__cart__span}>
							{cartLenght.length}
						</span>
					)}
				</div>
			</Link>
			{false ? (
				<Link href={'/admin'}>
					<ShieldCheck size={30} />
				</Link>
			) : (
				<></>
			)}
		</div>
	)
}

export default Header_right
