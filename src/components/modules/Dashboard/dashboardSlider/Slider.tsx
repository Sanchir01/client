import styles from '@/styles/desctop/Dashboard.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import 'swiper/css'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { GetAllProductsDashboardQuery } from '../../../../../graphql/gql/graphql'

const Slider: FC<{ items: GetAllProductsDashboardQuery }> = ({ items }) => {
	return (
		<Swiper slidesPerView={3.5} navigation={true} modules={[Navigation]}>
			{items.getAllProducts.products.map(item => (
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
						<span>{item.price} P</span>
					</Link>
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default Slider
