import styles from '@/styles/desctop/Dashboard.module.scss'
import { IItemsSlider } from '@/types/DasboardSlider'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import 'swiper/css'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Slider: FC<{ items: IItemsSlider[] }> = ({ items }) => {
	return (
		<Swiper slidesPerView={3.5} navigation={true} modules={[Navigation]}>
			{items.map(item => (
				<SwiperSlide key={item.id}>
					<Link
						href={`/catalog/${item.id}`}
						className={styles.dashboard__product}
					>
						<div className='h-[600px] w-[430px]'>
							<Image
								className='h-full w-full'
								src={item.images[0]}
								width={400}
								height={500}
								alt={item.name}
							/>
						</div>
						<div className=''>{item.name}</div>
						<p>{item.price} P</p>
					</Link>
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default Slider
