export const useCheckParams = ({
	categoryId,
	sort,
	maxRange
}: {
	categoryId?: string | null
	sort?: string | null
	maxRange?: string | null
}) => {
	const categoryIdIsExist = categoryId ? `&categoryId=${categoryId}` : ''
	const sortingIsExist = sort ? `&sorting=${sort}` : ''
	const maxRangeIsExist = maxRange ? `&maxRange=${maxRange}` : ''

	return { maxRangeIsExist, sortingIsExist, categoryIdIsExist }
}
