import MainCatalog from '@/components/modules/Catalog/MainCatalog'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Sandjma | Catalog',
	description: 'Super store clothes'
}
type Props = {
	params: {}
	searchParams: { sorting: string; categoryId: string; maxRange: string }
}
export default function Page(props: Props) {
	const sorting = props.searchParams

	return <MainCatalog filter={sorting} />
}
