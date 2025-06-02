import { Div } from 'interface/html';
import * as theme from 'theme';
import * as types from 'types/grid-types';

export const Container = ({
	id,
	name = 'Container',
	size,
	tailwind,
	className,
	children,
	...props
}: types.ContainerProps) => {
	const base = theme.container({ size });
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const Grid = ({ id, name = 'Grid', cols = '12', tailwind, className, children, ...props }: types.GridProps) => {
	const base = theme.grid({ cols });
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
	const base = theme.col({ span, sm, md, lg, xl, xxl });
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs
// https://tailwindcss.com/docs/grid-template-rows
// https://tailwindcss.com/docs/order
