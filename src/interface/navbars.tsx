import * as HTML from '@ehubbell/html';
import { Img, Ul } from 'interface/html';
import { LinkWrapper } from 'interface/links';
import * as styles from 'styles/navbar-styles';
import * as types from 'types/navbar-types';
import { tailwindClassBuilder } from 'utils';

export const Navbar = ({ id, ref, name = 'Navbar', className, children, ...tailwind }: types.iNavbar) => {
	const base = styles.navbar;
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<HTML.Nav ref={ref} name={name} className={classes}>
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
	className,
	children,
	...tailwind
}: types.iNavbarBrand) => {
	const base = styles.navbarBrand;
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<LinkWrapper alt={alt} name={name} href={href} className={classes}>
			<Img src={src} alt='Brand logo' width='w-full' />
		</LinkWrapper>
	);
};

export const NavbarList = ({ id, name = 'NavbarList', className, children, ...tailwind }: types.iNavbarList) => {
	const base = styles.navbarList;
	const props = { ...base, ...tailwind, className, name };

	return <Ul {...props}>{children}</Ul>;
};

// Docs
// https://tailwindui.com/interface/application-ui/navigation/navbars
