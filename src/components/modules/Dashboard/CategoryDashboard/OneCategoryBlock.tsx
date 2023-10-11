import { Button } from '@/components/ui/button'
import styles from '@/styles/desctop/CategoryDashboard.module.scss'
import Link from 'next/link'
import { FC } from 'react'

export interface PropsDashboardCategory {
	image: string
	title: string
}

const OneCategoryBlock: FC<PropsDashboardCategory> = ({ image, title }) => {
	return (
		<div className={styles.block}>
			<Link href={'/catalog'} className='h-[500px] w-[600px]'>
				<div
					className={styles.image}
					style={{ backgroundImage: `url(${image})` }}
				/>
				<div className={styles.item}>
					<div className={styles.title}>{title}</div>
					<Button className={styles.btn} >
						К покупкам
					</Button>
				</div>
			</Link>
		</div>
	)
}

export default OneCategoryBlock
