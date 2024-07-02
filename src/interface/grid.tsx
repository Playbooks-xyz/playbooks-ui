import { iCol, iContainer, iGrid } from 'types/grid.types';
import { Div } from 'interface/html';
import { computeCol, computeContainer } from 'tailwind';

export const Container = ({ id, name = 'Container', size, className, children, ...tailwind }: iContainer) => {
	const base = {
		// base: 'container',
		margin: 'mx-auto',
		spacing: 'px-4',
		size: computeContainer(size),
	};
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const Grid = ({ id, name = 'Grid', cols = 'grid-cols-12', className, children, ...tailwind }: iGrid) => {
	const base = {
		cols,
		gap: 'gap-4',
		grid: 'grid',
		width: 'w-full',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const Col = ({ id, name = 'Col', span = '12', sm, md, lg, xl, xxl, className, children, ...tailwind }: iCol) => {
	const base = {
		span: computeCol('span', span),
		sm: computeCol('sm', sm),
		md: computeCol('md', md),
		lg: computeCol('lg', lg),
		xl: computeCol('xl', xl),
		xxl: computeCol('xxl', xxl),
	};
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

// Docs
// https://tailwindcss.com/docs/grid-template-rows
// https://tailwindcss.com/docs/order
