import Container from '@/Providers/Container/Container'
import { FC } from 'react'
import Categories from './Categories'
import Sort from './Sort'

const FiltersAndSorting: FC = () => {
	return (
		<Container>
			<div className='flex justify-center gap-10 items-center '>
				<Categories />
				<Sort />
			</div>
		</Container>
	)
}

export default FiltersAndSorting
