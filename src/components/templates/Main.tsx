import Dashboard from '../modules/Dashboard/Dashboard'
import BG_slider from '../modules/GB_slider/BG_slider'

function Main() {
	const colorArray = ['XL', 'L']
	const color = 'XL'

	const defaultIndex = colorArray.findIndex(item => item === color)
	console.log(defaultIndex)
	return (
		<>
			<BG_slider />
			<Dashboard />
		</>
	)
}

export default Main
