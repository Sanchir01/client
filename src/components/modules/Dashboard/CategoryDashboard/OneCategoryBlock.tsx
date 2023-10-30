import { Button } from '@/components/ui/button'
import styles from '@/styles/desctop/CategoryDashboard.module.scss'
import { PropsDashboardCategory } from '@/types/DashboardCategory'
import Link from 'next/link'
import { FC } from 'react'

const OneCategoryBlock: FC<PropsDashboardCategory> = ({ image, title, id }) => {
	return (
		<div className={styles.block}>
			<Link href={`/catalog?categoryId=${id}`} className='h-[500px] w-[600px]'>
				<div
					className={styles.image}
					style={{ backgroundImage: `url(${image})` }}
				/>
				<div className={styles.item}>
					<div className={styles.title}>{title}</div>
					<Button className={styles.btn}>К покупкам</Button>
				</div>
				
			</Link>
		</div>
	)
}

export default OneCategoryBlock
