import React, { FC } from 'react'

const Container: FC<React.PropsWithChildren> = ({ children }) => {
	return <div className='max-w-[1220px] mx-auto px-[10px]'>{children}</div>
}

export default Container
