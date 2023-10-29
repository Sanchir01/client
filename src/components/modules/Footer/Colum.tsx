'use client'
import {
	Accordion,
	AccordionItem,
	AccordionTrigger
} from '@/components/ui/accordion'
import { footerContent } from '@/constants/Footer_content'
import { AccordionContent } from '@radix-ui/react-accordion'
import Link from 'next/link'

export function AccordionDemo() {
	return (
		<Accordion
			type='single'
			collapsible={true}
			className=' text-black items-center px-10 w-full'
		>
			{footerContent.map((content, i) => (
				<AccordionItem key={i} value={content.title}>
					<AccordionTrigger className='text-xl'>
						{content.title}
					</AccordionTrigger>
					{content.value.map((item, i) => (
						<AccordionContent key={i}>
							<Link href={item.href}>{item.text}</Link>
						</AccordionContent>
					))}
				</AccordionItem>
			))}
		</Accordion>
	)
}
