import * as HTML from '@ehubbell/html';
import * as theme from '@playbooks/theme';
import { Img, Ul } from 'interface/html';
import { LinkWrapper } from 'interface/links';
import * as types from 'types/navbar-types';
import { classBuilder } from 'utils';

export const Navbar = ({ id, ref, name = 'Navbar', tailwind, className, children, ...props }: types.NavPropsbar) => {
	const base = theme.navbar();
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.Nav ref={ref} name={name} className={computed}>
			{children}
		</HTML.Nav>
	);
};

export const NavbarBrand = ({
	id,
	name = 'NavbarBrand',
	href = '/',
	src,
	alt = 'home',
	tailwind,
	className,
	children,
	...props
}: types.NavPropsbarBrand) => {
	const base = theme.navbarBrand();
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<LinkWrapper alt={alt} name={name} href={href} className={computed}>
			<Img src={src} alt='Brand logo' width='w-full' />
		</LinkWrapper>
	);
};

export const NavbarList = ({
	id,
	name = 'NavbarList',
	tailwind,
	className,
	children,
	...props
}: types.NavPropsbarList) => {
	const base = theme.navbarList();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Ul {...computed}>{children}</Ul>;
};

// Docs
// https://tailwindui.com/interface/application-ui/navigation/navbars
