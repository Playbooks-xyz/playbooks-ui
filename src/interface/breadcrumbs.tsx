import { iBreadcrumbBtn, iBreadcrumbItem, iBreadcrumbLink, iBreadcrumbs } from 'interface/breadcrumbs.types';
import { TextBtn } from 'interface/buttons';
import { Li } from 'interface/html';
import { FarIcon } from 'interface/icons';
import { TextLink } from 'interface/links';
import { Nav, NavList } from 'interface/navs';
import { borderProps, breadcrumbBtnProps } from 'utils';

export const Breadcrumbs = ({ id, name = 'Breadcrumbs', className, children, ...tailwind }: iBreadcrumbs) => {
	const base = { bgColor: 'bg-transparent', ...borderProps, spacing: 'py-4' };
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
	const base = { display: 'flex-start', space: 'space-x-2' };
	const props = { ...base, ...tailwind, className, name };

	return (
		<Li {...props}>
			{children}
			{arrow && <FarIcon icon={icon} color='gray-400' fontSize='text-xs' />}
		</Li>
	);
};

export const BreadcrumbBtn = ({
	id,
	name = 'BreadcrumbBtn',
	icon,
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
