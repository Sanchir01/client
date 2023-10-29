'use client'
import { Button } from '@/components/ui/button'
import { BGContent } from '@/constants/header_content'
import { ToggleHeader } from '@/store/ToggleHeader.store'
import styles from '@/styles/desctop/BG_slider.module.scss'
import Link from 'next/link'
import { FC, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const BG_slider: FC = () => {
	const { ref, inView, entry } = useInView({
		threshold: 0.85
	})
	const toggleHeader = ToggleHeader(state => state.toggleHeaderBoolean)

	useEffect(() => {
		toggleHeader(inView)
	}, [inView])
	return (
		<section ref={ref} className={`${styles.bg} `}>
			<div className='wrapper-slider'>
				<Swiper
					className={`h-screen`}
					modules={[Pagination]}
					spaceBetween={50}
					slidesPerView={1}
					pagination={{ clickable: true }}
					autoplay={true}
					loop={true}
				>
					{BGContent.map(item => (
						<SwiperSlide
							key={item.id}
							className={` ${styles.bg__slide} `}
							style={{
								backgroundImage: `url(${item.image})`
							}}
						>
							<Link href={item.href} className={styles.bg__slide__link}>
								<h2 className={styles.bg__slide__title}>{item.title}</h2>
								<p className={styles.bg__slide__subtitle}>{item.subtitle}</p>
								<Button className='w-[200px] rounded text-xl'>
									{item.buttonText}
								</Button>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default BG_slider
