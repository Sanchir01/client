import Centering from '@/Providers/СenteringProvider/Centering'
import { FC, ReactNode } from 'react'

const AuthLayout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className='mt-[120px]'>
			<Centering>{children}</Centering>
		</div>
	)
}

export default AuthLayout
