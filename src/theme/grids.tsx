import { computeCol, computeContainer, computeGrid } from 'theme/utils';

export const container = ({ size }) => ({
	margin: 'mx-auto',
	size: computeContainer(size),
	spacing: 'px-4',
});

export const grid = ({ cols }) => ({
	cols: computeGrid(cols),
	gap: 'gap-4',
	grid: 'grid',
	width: 'w-full',
});

export const col = ({ span, sm, md, lg, xl, xxl }) => ({
	lg: computeCol('lg', lg),
	md: computeCol('md', md),
	sm: computeCol('sm', sm),
	span: computeCol('span', span),
	xl: computeCol('xl', xl),
	xxl: computeCol('xxl', xxl),
});
