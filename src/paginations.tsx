import { BtnWrapper } from 'buttons';
import { FarIcon } from 'icons';
import { Nav } from 'navs';
import { iPagination, iPaginationItem } from 'types/paginations.types';
import { borderProps, paginationProps, tailwindClassBuilder } from 'tailwind';

export const Pagination = ({ id, name = 'Pagination', className, children, ...tailwind }: iPagination) => {
	const base = {
		position: 'inline-flex',
		bgColor: '',
		border: 'border',
		...borderProps,
		borderRadius: 'rounded-md',
		overflow: 'o-hidden',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Nav {...props}>{children}</Nav>;
};

export const PaginationFirst = ({
	id,
	name = 'PaginationFirst',
	page,
	disabled,
	className,
	onClick,
	...tailwind
}: iPaginationItem) => {
	const base = paginationProps();
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<BtnWrapper onClick={() => !disabled && onClick(page)} disabled={disabled} className={classes}>
			<FarIcon icon='chevrons-left' />
		</BtnWrapper>
	);
};

export const PaginationPrev = ({
	id,
	name = 'PaginationPrev',
	page,
	disabled,
	className,
	onClick,
	...tailwind
}: iPaginationItem) => {
	const base = paginationProps();
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<BtnWrapper onClick={() => !disabled && onClick(page)} disabled={disabled} className={classes}>
			<FarIcon icon='chevron-left' />
		</BtnWrapper>
	);
};

export const PaginationItem = ({
	id,
	name = 'PaginationItem',
	page,
	active,
	className,
	onClick,
	...tailwind
}: iPaginationItem) => {
	const base = paginationProps(active);
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<BtnWrapper active={active} onClick={onClick} className={classes}>
			{page}
		</BtnWrapper>
	);
};

export const PaginationBtn = ({
	id,
	name = 'PaginationBtn',
	page,
	active,
	className = '',
	onClick,
	...tailwind
}: iPaginationItem) => {
	const base = { ...paginationProps(active) };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<BtnWrapper onClick={onClick} className={classes}>
			{page}
		</BtnWrapper>
	);
};

export const PaginationNext = ({
	id,
	name = 'PaginationNext',
	page,
	disabled,
	className,
	onClick,
	...tailwind
}: iPaginationItem) => {
	const base = paginationProps();
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<BtnWrapper onClick={() => !disabled && onClick(page)} disabled={disabled} className={classes}>
			<FarIcon icon='chevron-right' />
		</BtnWrapper>
	);
};

export const PaginationLast = ({
	id,
	name = 'PaginationLast',
	page,
	disabled,
	className,
	onClick,
	...tailwind
}: iPaginationItem) => {
	const base = paginationProps();
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<BtnWrapper onClick={() => !disabled && onClick(page)} disabled={disabled} className={classes}>
			<FarIcon icon='chevrons-right' />
		</BtnWrapper>
	);
};

// Docs:
// https://tailwindui.com/interface/application-ui/navigation/pagination
