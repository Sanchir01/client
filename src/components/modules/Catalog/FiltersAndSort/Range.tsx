import { Slider } from '@/components/ui/slider'
import { filtersStore } from '@/store/Catalog.store'
import { FC } from 'react'
import { useShallow } from 'zustand/react/shallow'

const Range: FC = () => {
	const [setSliderValue, sliderValue] = filtersStore(
		useShallow(state => [state.changeRangeMax, state.rangeMax])
	)

	return (
		<div className='flex gap-2 items-center pb-4'>
			<div>0</div>
			<Slider
				max={10000}
				defaultValue={sliderValue ? [sliderValue] : [0]}
				step={10}
				className=''
				onValueChange={value => setSliderValue(value[0])}
			/>
			{sliderValue}
		</div>
	)
}

export default Range
