import { useInterface } from 'contexts';
import { BtnWrapper } from 'interface/buttons';
import { FarIcon } from 'interface/icons';
import { Nav } from 'interface/navs';
import * as types from 'types/pagination-types';

export const Pagination = ({
	id,
	name = 'Pagination',
	tailwind,
	className,
	children,
	...props
}: types.PaginationProps) => {
	const { theme } = useInterface();
	const base = theme.pagination();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Nav {...computed}>{children}</Nav>;
};

export const PaginationFirst = ({
	id,
	name = 'PaginationFirst',
	alt = 'first page',
	disabled,
	tailwind,
	className,
	onClick,
	...props
}: types.PaginationBtnProps) => {
	const { theme } = useInterface();
	const base = theme.paginationBtn();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<BtnWrapper name={name} alt={alt} onClick={onClick} disabled={disabled} {...computed}>
			<FarIcon icon='chevrons-left' />
		</BtnWrapper>
	);
};

export const PaginationPrev = ({
	id,
	name = 'PaginationPrev',
	alt = 'prev page',
	disabled,
	tailwind,
	className,
	onClick,
	...props
}: types.PaginationBtnProps) => {
	const { theme } = useInterface();
	const base = theme.paginationBtn();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<BtnWrapper name={name} alt={alt} onClick={onClick} disabled={disabled} {...computed}>
			<FarIcon icon='chevron-left' />
		</BtnWrapper>
	);
};

export const PaginationBtn = ({
	id,
	name = 'PaginationBtn',
	alt = 'specific page',
	active,
	tailwind,
	className = '',
	onClick,
	children,
	...props
}: types.PaginationBtnProps) => {
	const { theme } = useInterface();
	const base = theme.paginationBtn(active);
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<BtnWrapper name={name} alt={alt} active={active} onClick={onClick} {...computed}>
			{children}
		</BtnWrapper>
	);
};

export const PaginationNext = ({
	id,
	name = 'PaginationNext',
	alt = 'next page',
	disabled,
	tailwind,
	className,
	onClick,
	...props
}: types.PaginationBtnProps) => {
	const { theme } = useInterface();
	const base = theme.paginationBtn();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<BtnWrapper name={name} alt={alt} onClick={onClick} disabled={disabled} {...computed}>
			<FarIcon icon='chevron-right' />
		</BtnWrapper>
	);
};

export const PaginationLast = ({
	id,
	name = 'PaginationLast',
	alt = 'last page',
	disabled,
	tailwind,
	className,
	onClick,
	...props
}: types.PaginationBtnProps) => {
	const { theme } = useInterface();
	const base = theme.paginationBtn();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<BtnWrapper name={name} alt={alt} onClick={onClick} disabled={disabled} {...computed}>
			<FarIcon icon='chevrons-right' />
		</BtnWrapper>
	);
};

// Docs:
// https://tailwindui.com/interface/application-ui/navigation/pagination
