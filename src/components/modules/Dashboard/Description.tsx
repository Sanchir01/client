import Cookies from 'js-cookie'
import { FC } from 'react'

const Description: FC = async () => {
	const access = Cookies.get('accessToken')
	

	return (
		<section>
			<div className=''>
				<span> 213123</span>{' '}
				<div className=''>
					- это стильная комфортная одежда для женщин и мужчин
				</div>
			</div>
		</section>
	)
}

export default Description
