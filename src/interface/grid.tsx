import { Div } from 'interface/html';
import * as styles from 'styles/grid-styles';
import * as types from 'types/grid-types';
import { computeCol, computeContainer, computeGrid } from 'utils';

export const Container = ({
	id,
	name = 'Container',
	size,
	tailwind,
	className,
	children,
	...props
}: types.ContainerProps) => {
	const base = {
		...styles.container,
		size: computeContainer(size),
	};
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const Grid = ({ id, name = 'Grid', cols = '12', tailwind, className, children, ...props }: types.GridProps) => {
	const base = {
		...styles.grid,
		cols: computeGrid(cols),
	};
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const Col = ({
	id,
	name = 'Col',
	span = '12',
	sm,
	md,
	lg,
	xl,
	xxl,
	tailwind,
	className,
	children,
	...props
}: types.ColProps) => {
	const base = {
		span: computeCol('span', span),
		sm: computeCol('sm', sm),
		md: computeCol('md', md),
		lg: computeCol('lg', lg),
		xl: computeCol('xl', xl),
		xxl: computeCol('xxl', xxl),
	};
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs
// https://tailwindcss.com/docs/grid-template-rows
// https://tailwindcss.com/docs/order
