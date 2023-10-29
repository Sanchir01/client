import { Slider } from '@/components/ui/slider'
import { FC } from 'react'

const Range: FC<{
	sliderValue: number[]
	setSliderValue: (value: number[]) => void
}> = ({ setSliderValue, sliderValue }) => {
	return (
		<div className='flex gap-2 items-center pb-4'>
			<div>0</div>
			<Slider
				max={10000}
				defaultValue={[0]}
				step={10}
				className=''
				onValueChange={value => setSliderValue(value)}
			/>
			{sliderValue}
		</div>
	)
}

export default Range
