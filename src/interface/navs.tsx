import * as HTML from '@ehubbell/html';
import { Btn } from 'interface/buttons';
import { Font } from 'interface/fonts';
import { Div, Li, Ul } from 'interface/html';
import { Link } from 'interface/links';
import * as styles from 'styles';
import { iNav, iNavBody, iNavBtn, iNavHeader, iNavItem, iNavLink, iNavList, iNavTitle } from 'types/nav-types';
import { computeSectionSize, tailwindClassBuilder } from 'utils';

export const Nav = ({ id, name = 'Nav', className, children, ...tailwind }: iNav) => {
	const base = styles.navBase;
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<HTML.Nav id={id} name={name} className={classes}>
			{children}
		</HTML.Nav>
	);
};

export const NavHeader = ({ id, name = 'NavHeader', className, children, ...tailwind }: iNavHeader) => {
	const base = styles.navHeaderBase;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const NavTitle = ({ id, name = 'NavTitle', size = 'h5', className, children, ...tailwind }: iNavTitle) => {
	const base = styles.navTitleBase;
	const props = { ...base, ...tailwind, className, name };

	return (
		<Font size={size} {...props}>
			{children}
		</Font>
	);
};

export const NavBody = ({ id, name = 'NavBody', size = '', className, children, ...tailwind }: iNavBody) => {
	const base = { ...styles.navBodyBase, size: computeSectionSize(size) };
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const NavList = ({ id, name = 'NavList', className, children, ...tailwind }: iNavList) => {
	const base = styles.navListBase;
	const props = { ...base, ...tailwind, className, name };

	return <Ul {...props}>{children}</Ul>;
};

export const NavItem = ({ id, name = 'NavItem', className, children, ...tailwind }: iNavItem) => {
	const base = styles.navItemBase;
	const props = { ...base, ...tailwind, className, name };

	return <Li {...props}>{children}</Li>;
};

export const NavBtn = ({ id, name = 'NavBtn', variant = 'accent', className, children, ...tailwind }: iNavBtn) => {
	const base = styles.navBtnBase;
	const props = { ...base, ...tailwind, children, className, name };

	return <Btn variant={variant} {...props} />;
};

export const NavLink = ({ id, name = 'NavLink', variant = 'accent', className, children, ...tailwind }: iNavLink) => {
	const base = styles.navLinkBase;
	const props = { ...base, ...tailwind, children, className, name };

	return <Link variant={variant} {...props} />;
};

// Docs
// https://tailwindui.com/interface/application-ui/navigation/vertical-navigation
