import Centering from '@/Providers/СenteringProvider/Centering'
import { FC, ReactNode } from 'react'

const AuthLayout: FC<{ children: ReactNode }> = ({ children }) => {
	return <Centering>{children}</Centering>
}

export default AuthLayout
