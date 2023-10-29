import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { FC, useState } from 'react'

const ProductGallery: FC<{ images: string[] }> = ({ images }) => {
	const [activeIndex, setActiveIndex] = useState<number>(0)
	return (
		<div className='flex gap-10'>
			<div className='flex flex-col gap-5'>
				{images.map((image, i) => (
					<Button
						className='w-[90px] h-[135px] p-0'
						variant={'ghost'}
						onClick={() => setActiveIndex(i)}
						key={i}
					>
						<Image
							className='w-full h-full hover:scale-110 transition-all rounded-lg'
							src={image}
							alt=''
							width={200}
							height={200}
							draggable={false}
							priority
						/>
					</Button>
				))}
			</div>
			<div className='w-[700px] h-[880px]'>
				<Image
					priority
					src={images[activeIndex]}
					className='w-full h-full rounded-lg'
					alt={images[activeIndex]}
					width={200}
					height={200}
					draggable={false}
				/>
			</div>
		</div>
	)
}

export default ProductGallery
