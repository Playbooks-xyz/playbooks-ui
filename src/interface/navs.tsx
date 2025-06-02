import * as HTML from '@ehubbell/html';
import { AccentBtn } from 'interface/buttons';
import { Font } from 'interface/fonts';
import { Div, Li, Ul } from 'interface/html';
import { AccentLink } from 'interface/links';
import * as theme from 'theme';
import * as types from 'types/nav-types';
import { classBuilder } from 'utils';

export const Nav = ({ id, name = 'NavWrapper', tailwind, className, children, ...props }: types.NavProps) => {
	const base = theme.nav();
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.Nav name={name} className={computed}>
			{children}
		</HTML.Nav>
	);
};

export const NavHeader = ({
	id,
	name = 'NavHeader',
	tailwind,
	className,
	children,
	...props
}: types.NavHeaderProps) => {
	const base = theme.navHeader();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const NavTitle = ({
	id,
	name = 'NavTitle',
	size = 'h6',
	tailwind,
	className,
	children,
	...props
}: types.NavTitleProps) => {
	const base = theme.navTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const NavBody = ({
	id,
	name = 'NavBody',
	size,
	tailwind,
	className,
	children,
	...props
}: types.NavBodyProps) => {
	const base = theme.navBody({ size });
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const NavList = ({ tailwind, children, ...props }) => {
	const base = theme.navList();
	const computed = { ...base, ...props, tailwind };

	return <Ul {...computed}>{children}</Ul>;
};

export const NavItem = ({ tailwind, children, ...props }) => {
	const base = theme.navItem();
	const computed = { ...base, ...props, tailwind };

	return <Li {...computed}>{children}</Li>;
};

export const NavBtn = ({ id, name = 'NavBtn', tailwind, className, children, ...props }: types.NavBtnProps) => {
	const base = theme.navBtn();
	const computed = { ...base, ...props, tailwind, children, className, name };

	return <AccentBtn {...computed} />;
};

export const NavLink = ({ id, name = 'NavLink', tailwind, className, children, ...props }: types.NavLinkProps) => {
	const base = theme.navLink();
	const computed = { ...base, ...props, tailwind, children, className, name };

	return <AccentLink {...computed} />;
};

// Docs
// https://tailwindui.com/interface/application-ui/navigation/sidebar-navigation
