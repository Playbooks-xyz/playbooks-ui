import { TextBtn } from 'interface/buttons';
import { Li } from 'interface/html';
import { FarIcon } from 'interface/icons';
import { TextLink } from 'interface/links';
import { Nav, NavList } from 'interface/navs';
import * as styles from 'styles/breadcrumb-styles';
import * as types from 'types/breadcrumb-types';
import { breadcrumbBtnProps } from 'utils';

export const Breadcrumbs = ({
	id,
	name = 'Breadcrumbs',
	tailwind,
	className,
	children,
	...props
}: types.BreadcrumbsProps) => {
	const base = styles.breadcrumbs;
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Nav {...computed}>
			<NavList display='flex flex-row' space='space-x-2'>
				{children}
			</NavList>
		</Nav>
	);
};

export const BreadcrumbItem = ({
	id,
	name = 'BreadcrumbItem',
	icon = 'chevron-right',
	arrow = true,
	tailwind,
	className,
	children,
	...props
}: types.BreadcrumbItemProps) => {
	const base = styles.breadcrumbItem;
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Li {...computed}>
			{children}
			{arrow && <FarIcon icon={icon} color='text-gray-400' fontSize='text-xs' />}
		</Li>
	);
};

export const BreadcrumbBtn = ({
	id,
	name = 'BreadcrumbBtn',
	size = 'xxs',
	active,
	onClick,
	tailwind,
	className,
	children,
	...props
}: types.BreadcrumbBtnProps) => {
	const base = { ...breadcrumbBtnProps(active) };
	const computed = { ...base, ...props, tailwind, size, className, name, active, children };

	return <TextBtn onClick={onClick} {...computed} />;
};

export const BreadcrumbLink = ({
	id,
	name = 'BreadcrumbLink',
	size = 'xxs',
	active,
	href,
	tailwind,
	className,
	children,
	...props
}: types.BreadcrumbLinkProps) => {
	const base = { ...breadcrumbBtnProps(active) };
	const computed = { ...base, ...props, tailwind, size, className, name, active, children };

	return <TextLink href={href} {...computed} />;
};

// Docs
// https://tailwindui.com/interface/application-ui/navigation/breadcrumbs
