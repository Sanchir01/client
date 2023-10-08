'use client'
import styles from '@/styles/desctop/Dashboard.module.scss'
import { IDashboardSliderContent } from '@/types/DasboardSlider'
import { FC } from 'react'
import 'swiper/css'
import Slider from './Slider'

const DashboardSlider: FC<IDashboardSliderContent> = ({ items, title }) => {
	return (
		<section className={styles.dashboard__container}>
			<h2 className={styles.dashboard__title}>{title}</h2>
			<Slider items={items} />
		</section>
	)
}

export default DashboardSlider
