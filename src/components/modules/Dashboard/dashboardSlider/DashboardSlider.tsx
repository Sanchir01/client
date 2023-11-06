/* eslint-disable react/display-name */
'use client'
import styles from '@/styles/desctop/Dashboard.module.scss'
import { IDashboardSliderContent } from '@/types/DasboardSlider'
import cn from 'clsx'
import { FC } from 'react'
import 'swiper/css'
import Slider from './Slider'

const DashboardSlider: FC<IDashboardSliderContent> = ({
	items,
	title,
	className
}) => {
	return (
		<section className={styles.dashboard__container}>
			<h2 className={cn(styles.dashboard__title, className)}>{title}</h2>
			<Slider items={items} />
		</section>
	)
}

export default DashboardSlider
