import { BtnWrapper } from 'interface/buttons';
import { FarIcon } from 'interface/icons';
import { Nav } from 'interface/navs';
import * as styles from 'styles/pagination-styles';
import { iPagination, iPaginationBtn } from 'types/pagination-types';
import { paginationProps, tailwindClassBuilder } from 'utils';

export const Pagination = ({ id, name = 'Pagination', className, children, ...tailwind }: iPagination) => {
	const base = styles.pagination;
	const props = { ...base, ...tailwind, className, name };

	return <Nav {...props}>{children}</Nav>;
};

export const PaginationFirst = ({
	id,
	name = 'PaginationFirst',
	alt = 'first page',
	page,
	disabled,
	className,
	onClick,
	...tailwind
}: iPaginationBtn) => {
	const base = paginationProps();
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<BtnWrapper name={name} alt={alt} onClick={() => onClick(page)} disabled={disabled} className={classes}>
			<FarIcon icon='chevrons-left' />
		</BtnWrapper>
	);
};

export const PaginationPrev = ({
	id,
	name = 'PaginationPrev',
	alt = 'prev page',
	page,
	disabled,
	className,
	onClick,
	...tailwind
}: iPaginationBtn) => {
	const base = paginationProps();
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<BtnWrapper name={name} alt={alt} onClick={() => onClick(page)} disabled={disabled} className={classes}>
			<FarIcon icon='chevron-left' />
		</BtnWrapper>
	);
};

export const PaginationBtn = ({
	id,
	name = 'PaginationBtn',
	alt = 'specific page',
	page,
	active,
	className = '',
	onClick,
	...tailwind
}: iPaginationBtn) => {
	const base = { ...paginationProps(active) };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<BtnWrapper name={name} alt={alt} active={active} onClick={onClick} className={classes}>
			{page}
		</BtnWrapper>
	);
};

export const PaginationNext = ({
	id,
	name = 'PaginationNext',
	alt = 'next page',
	page,
	disabled,
	className,
	onClick,
	...tailwind
}: iPaginationBtn) => {
	const base = paginationProps();
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<BtnWrapper name={name} alt={alt} onClick={() => onClick(page)} disabled={disabled} className={classes}>
			<FarIcon icon='chevron-right' />
		</BtnWrapper>
	);
};

export const PaginationLast = ({
	id,
	name = 'PaginationLast',
	alt = 'last page',
	page,
	disabled,
	className,
	onClick,
	...tailwind
}: iPaginationBtn) => {
	const base = paginationProps();
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<BtnWrapper name={name} alt={alt} onClick={() => onClick(page)} disabled={disabled} className={classes}>
			<FarIcon icon='chevrons-right' />
		</BtnWrapper>
	);
};

// Docs:
// https://tailwindui.com/interface/application-ui/navigation/pagination
