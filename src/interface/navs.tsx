import * as HTML from '@ehubbell/html';
import { Btn } from 'interface/buttons';
import { Font } from 'interface/fonts';
import { Div, Li, Ul } from 'interface/html';
import { Link } from 'interface/links';
import * as styles from 'styles/nav-styles';
import * as types from 'types/nav-types';
import { computeSectionSize, tailwindClassBuilder } from 'utils';

export const Nav = ({ id, name = 'Nav', tailwind, className, children, ...props }: types.NavProps) => {
	const base = styles.nav;
	const computed = tailwindClassBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.Nav id={id} name={name} className={computed}>
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
	const base = styles.navHeader;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const NavTitle = ({
	id,
	name = 'NavTitle',
	size = 'h5',
	tailwind,
	className,
	children,
	...props
}: types.NavTitleProps) => {
	const base = styles.navTitle;
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
	size = '',
	tailwind,
	className,
	children,
	...props
}: types.NavBodyProps) => {
	const base = { ...styles.navBody, size: computeSectionSize(size) };
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const NavList = ({ id, name = 'NavList', tailwind, className, children, ...props }: types.NavListProps) => {
	const base = styles.navList;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Ul {...computed}>{children}</Ul>;
};

export const NavItem = ({ id, name = 'NavItem', tailwind, className, children, ...props }: types.NavItemProps) => {
	const base = styles.navItem;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Li {...computed}>{children}</Li>;
};

export const NavBtn = ({
	id,
	name = 'NavBtn',
	variant = 'accent',
	tailwind,
	className,
	children,
	...props
}: types.NavBtnProps) => {
	const base = styles.navBtn;
	const computed = { ...base, ...props, tailwind, children, className, name };

	return <Btn variant={variant} {...computed} />;
};

export const NavLink = ({
	id,
	name = 'NavLink',
	variant = 'accent',
	tailwind,
	className,
	children,
	...props
}: types.NavLinkProps) => {
	const base = styles.navLink;
	const computed = { ...base, ...props, tailwind, children, className, name };

	return <Link variant={variant} {...computed} />;
};

// Docs
// https://tailwindui.com/interface/application-ui/navigation/vertical-navigation
