import { TextBtn } from 'interface/buttons';
import { Li } from 'interface/html';
import { FarIcon } from 'interface/icons';
import { TextLink } from 'interface/links';
import { Nav, NavList } from 'interface/navs';
import * as styles from 'styles';
import { iBreadcrumbBtn, iBreadcrumbItem, iBreadcrumbLink, iBreadcrumbs } from 'types/breadcrumb-types';
import { breadcrumbBtnProps } from 'utils';

export const Breadcrumbs = ({ id, name = 'Breadcrumbs', className, children, ...tailwind }: iBreadcrumbs) => {
	const base = styles.breadcrumbs;
	const props = { ...base, ...tailwind, className, name };

	return (
		<Nav {...props}>
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
	className,
	children,
	...tailwind
}: iBreadcrumbItem) => {
	const base = styles.breadcrumbItem;
	const props = { ...base, ...tailwind, className, name };

	return (
		<Li {...props}>
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
	className,
	children,
	...tailwind
}: iBreadcrumbBtn) => {
	const base = { ...breadcrumbBtnProps(active) };
	const props = { ...base, ...tailwind, size, className, name, active, children };

	return <TextBtn onClick={onClick} {...props} />;
};

export const BreadcrumbLink = ({
	id,
	name = 'BreadcrumbLink',
	size = 'xxs',
	active,
	href,
	className,
	children,
	...tailwind
}: iBreadcrumbLink) => {
	const base = { ...breadcrumbBtnProps(active) };
	const props = { ...base, ...tailwind, size, className, name, active, children };

	return <TextLink href={href} {...props} />;
};

// Docs
// https://tailwindui.com/interface/application-ui/navigation/breadcrumbs
