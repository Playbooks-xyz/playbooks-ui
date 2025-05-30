import * as HTML from '@ehubbell/html';
import { Img, Ul } from 'interface/html';
import { LinkWrapper } from 'interface/links';
import * as styles from 'styles/navbar-styles';
import * as types from 'types/navbar-types';
import { tailwindClassBuilder } from 'utils';

export const Navbar = ({ id, ref, name = 'Navbar', tailwind, className, children, ...props }: types.NavPropsbar) => {
	const base = styles.navbar;
	const computed = tailwindClassBuilder({ ...base, ...props, tailwind, className });

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
	const base = styles.navbarBrand;
	const computed = tailwindClassBuilder({ ...base, ...props, tailwind, className });

	return (
		<LinkWrapper alt={alt} name={name} href={href} className={computed}>
			<Img src={src} alt='Brand logo' width='w-full' />
		</LinkWrapper>
	);
};

export const NavbarList = ({ id, name = 'NavbarList', tailwind, className, children, ...props }: types.NavPropsbarList) => {
	const base = styles.navbarList;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Ul {...computed}>{children}</Ul>;
};

// Docs
// https://tailwindui.com/interface/application-ui/navigation/navbars
