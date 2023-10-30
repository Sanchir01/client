import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import styles from '@/styles/desctop/NotFound.module.scss'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Not Found',
	...NO_INDEX_PAGE
}

export default function NotFoundPage() {
	return (
		<div className={styles.notfound_box}>
			<div className={styles.notfound_box_container}>
				<h1 className={styles.notfound_box_title}>
					<>404</>
				</h1>
				<span className={styles.notfound_box_description}>
					Извините, но такой страницы не существует
				</span>

				<Link href={'/catalog'} className={styles.notfound_box_link}>
					Назад в каталог
				</Link>
			</div>
		</div>
	)
}
