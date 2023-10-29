import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'

export const useFilters = () => {
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const { replace } = useRouter()
	const [Params, setParams] = useState<string>('')
	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams)
			params.set(name, value)

			setParams(params.toString)
		},
		[searchParams]
	)
}
