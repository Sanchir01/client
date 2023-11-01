'use client'
import { Button } from '@/components/ui/button'
import { SizeArray } from '@/constants/Size.content'
import { useParameterCloth } from '@/store/ParametsCloth.store'
import { FC } from 'react'

const SizeLine: FC = () => {
	const toggleSizeActive = useParameterCloth(state => state.changeSize)
	const activeIndex = useParameterCloth(state => state.size)
	return (
		<div className='flex gap-2'>
			{SizeArray.map(item => (
				<Button
					onClick={() => toggleSizeActive(item)}
					variant={item.id === activeIndex.id ? 'default' : 'outline'}
					key={item.id}
				>
					{item.name}
				</Button>
			))}
		</div>
	)
}

export default SizeLine
