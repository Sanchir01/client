import styles from '@/styles/desctop/Dashboard.module.scss'
import { IItemsSlider } from '@/types/DasboardSlider'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import 'swiper/css'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import AddToFavoritesItem from '../../Catalog/AddTofavoritesItem'

const Slider: FC<{ items: IItemsSlider[] }> = ({ items }) => {
	return (
		<Swiper slidesPerView={3.5} navigation={true} modules={[Navigation]}>
			{items.map(item => (
				<SwiperSlide key={item.id}>
					<div className={`${styles.dashboard__product} max-w-[430px]`}>
						<Link href={`/catalog/${item.id}`} className='h-[600px] w-[430px]'>
							<Image
								className='h-full w-full'
								src={item.images[0]}
								width={400}
								height={500}
								alt={item.name}
							/>
						</Link>
						<div className='mt-3 flex justify-between'>
							<div>
								<div>{item.name}</div>
								<p>{item.price} P</p>
							</div>
							<AddToFavoritesItem
								id={item.id}
								images={item.images}
								name={item.name}
								price={item.price}
							/>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default Slider
