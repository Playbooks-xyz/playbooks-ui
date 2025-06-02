import { BtnWrapper } from 'interface/buttons';
import { FarIcon } from 'interface/icons';
import { Nav } from 'interface/navs';
import * as theme from 'theme';
import * as types from 'types/pagination-types';
import { classBuilder } from 'utils';

export const Pagination = ({
	id,
	name = 'Pagination',
	tailwind,
	className,
	children,
	...props
}: types.PaginationProps) => {
	const base = theme.pagination();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Nav {...computed}>{children}</Nav>;
};

export const PaginationFirst = ({
	id,
	name = 'PaginationFirst',
	alt = 'first page',
	page,
	disabled,
	tailwind,
	className,
	onClick,
	...props
}: types.PaginationBtnProps) => {
	const base = theme.paginationBtn();
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<BtnWrapper name={name} alt={alt} onClick={() => onClick(page)} disabled={disabled} className={computed}>
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
	tailwind,
	className,
	onClick,
	...props
}: types.PaginationBtnProps) => {
	const base = theme.paginationBtn();
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<BtnWrapper name={name} alt={alt} onClick={() => onClick(page)} disabled={disabled} className={computed}>
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
	tailwind,
	className = '',
	onClick,
	...props
}: types.PaginationBtnProps) => {
	const base = theme.paginationBtn(active);
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<BtnWrapper name={name} alt={alt} active={active} onClick={onClick} className={computed}>
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
	tailwind,
	className,
	onClick,
	...props
}: types.PaginationBtnProps) => {
	const base = theme.paginationBtn();
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<BtnWrapper name={name} alt={alt} onClick={() => onClick(page)} disabled={disabled} className={computed}>
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
	tailwind,
	className,
	onClick,
	...props
}: types.PaginationBtnProps) => {
	const base = theme.paginationBtn();
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<BtnWrapper name={name} alt={alt} onClick={() => onClick(page)} disabled={disabled} className={computed}>
			<FarIcon icon='chevrons-right' />
		</BtnWrapper>
	);
};

// Docs:
// https://tailwindui.com/interface/application-ui/navigation/pagination
