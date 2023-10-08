'use client'
import { footerContent } from '@/constants/Footer_content'
import Link from 'next/link'
import { FC } from 'react'

const Desctop_Content: FC = () => {
	return (
		<>
			{footerContent.map(content => (
				<div
					className='flex flex-col justify-between gap-2'
					key={content.title}
				>
					<h5 className='text-black text-xl'>{content.title}</h5>
					{content.value.map((item, i) => (
						<p key={i}>
							<Link href={item.href}>{item.text}</Link>
						</p>
					))}
				</div>
			))}
		</>
	)
}

export default Desctop_Content
