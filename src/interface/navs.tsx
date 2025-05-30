import * as HTML from '@ehubbell/html';
import { Btn } from 'interface/buttons';
import { Font } from 'interface/fonts';
import { Div, Li, Ul } from 'interface/html';
import { Link } from 'interface/links';
import * as styles from 'styles/nav-styles';
import * as types from 'types/nav-types';
import { computeSectionSize, tailwindClassBuilder } from 'utils';

export const Nav = ({ id, name = 'Nav', className, children, ...tailwind }: types.iNav) => {
	const base = styles.nav;
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<HTML.Nav id={id} name={name} className={classes}>
			{children}
		</HTML.Nav>
	);
};

export const NavHeader = ({ id, name = 'NavHeader', className, children, ...tailwind }: types.iNavHeader) => {
	const base = styles.navHeader;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const NavTitle = ({ id, name = 'NavTitle', size = 'h5', className, children, ...tailwind }: types.iNavTitle) => {
	const base = styles.navTitle;
	const props = { ...base, ...tailwind, className, name };

	return (
		<Font size={size} {...props}>
			{children}
		</Font>
	);
};

export const NavBody = ({ id, name = 'NavBody', size = '', className, children, ...tailwind }: types.iNavBody) => {
	const base = { ...styles.navBody, size: computeSectionSize(size) };
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const NavList = ({ id, name = 'NavList', className, children, ...tailwind }: types.iNavList) => {
	const base = styles.navList;
	const props = { ...base, ...tailwind, className, name };

	return <Ul {...props}>{children}</Ul>;
};

export const NavItem = ({ id, name = 'NavItem', className, children, ...tailwind }: types.iNavItem) => {
	const base = styles.navItem;
	const props = { ...base, ...tailwind, className, name };

	return <Li {...props}>{children}</Li>;
};

export const NavBtn = ({
	id,
	name = 'NavBtn',
	variant = 'accent',
	className,
	children,
	...tailwind
}: types.iNavBtn) => {
	const base = styles.navBtn;
	const props = { ...base, ...tailwind, children, className, name };

	return <Btn variant={variant} {...props} />;
};

export const NavLink = ({
	id,
	name = 'NavLink',
	variant = 'accent',
	className,
	children,
	...tailwind
}: types.iNavLink) => {
	const base = styles.navLink;
	const props = { ...base, ...tailwind, children, className, name };

	return <Link variant={variant} {...props} />;
};

// Docs
// https://tailwindui.com/interface/application-ui/navigation/vertical-navigation
