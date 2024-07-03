import { AccentBtn, Btn } from 'interface/buttons';
import { Font } from 'interface/fonts';
import { Div, Li, Ul } from 'interface/html';
import { AccentLink, Link } from 'interface/links';
import { iNav, iNavBody, iNavBtn, iNavHeader, iNavItem, iNavLink, iNavList, iNavTitle } from 'interface/navs.types';
import { borderProps, computeSectionSize, tailwindClassBuilder } from 'tailwind';

export const Nav = ({ id, name = 'Nav', className, children, ...tailwind }: iNav) => {
	const base = {
		bgColor: 'bg-white dark:bg-gray-900',
		...borderProps,
		borderRadius: 'rounded-md',
		display: 'block',
		position: 'relative',
	};
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<nav id={id} data-name={name} className={classes}>
			{children}
		</nav>
	);
};

export const NavHeader = ({ id, name = 'NavHeader', className, children, ...tailwind }: iNavHeader) => {
	const base = { ...borderProps, spacing: 'p-4' };
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const NavTitle = ({ id, name = 'NavTitle', size = 'h5', className, children, ...tailwind }: iNavTitle) => {
	const base = { fontWeight: 'font-bold' };
	const props = { ...base, ...tailwind, className, name };

	return (
		<Font size={size} {...props}>
			{children}
		</Font>
	);
};

export const NavBody = ({ id, name = 'NavBody', size = '', className, children, ...tailwind }: iNavBody) => {
	const base = { size: computeSectionSize(size), spacing: 'p-4' };
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const NavList = ({ id, name = 'NavList', className, children, ...tailwind }: iNavList) => {
	const base = { align: 'text-left', display: 'flex-column', space: 'space-y-1', spacing: '' };
	const props = { ...base, ...tailwind, className, name };

	return <Ul {...props}>{children}</Ul>;
};

export const NavItem = ({ id, name = 'NavItem', className, children, ...tailwind }: iNavItem) => {
	const base = { display: 'block' };
	const props = { ...base, ...tailwind, className, name };

	return <Li {...props}>{children}</Li>;
};

export const NavBtn = ({
	id,
	name = 'NavBtn',
	type = 'accent',
	taskRunning,
	onClick,
	className,
	children,
	...tailwind
}: iNavBtn) => {
	const base = { align: 'text-left', display: 'flex-start', space: 'space-x-4', width: 'w-full' };
	const props = { ...base, ...tailwind, className, name, taskRunning, onClick, children };

	switch (type) {
		case 'basic':
			return <Btn {...props} />;

		case 'accent':
			return <AccentBtn {...props} />;
	}
};

export const NavLink = ({
	id,
	name = 'NavLink',
	type = 'accent',
	href = '/',
	className,
	children,
	...tailwind
}: iNavLink) => {
	const base = { align: 'text-left', display: 'flex-start', space: 'space-x-4', width: 'w-full' };
	const props = { ...base, ...tailwind, className, name, href, children };

	switch (type) {
		case 'basic':
			return <Link {...props} />;

		case 'accent':
			return <AccentLink {...props} />;
	}
};

// Docs
// https://tailwindui.com/interface/application-ui/navigation/vertical-navigation
