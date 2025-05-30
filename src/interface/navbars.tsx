import * as HTML from '@ehubbell/html';
import { Img, Ul } from 'interface/html';
import { LinkWrapper } from 'interface/links';
import { iNavbar, iNavbarBrand, iNavbarList } from 'types/navbar-types';
import { borderProps, tailwindClassBuilder } from 'utils';

export const Navbar = ({ id, ref, name = 'Navbar', className, children, ...tailwind }: iNavbar) => {
	const base = {
		bgColor: 'bg-white dark:bg-gray-900',
		...borderProps,
		display: 'flex-between',
		position: 'relative',
		spacing: 'p-4',
		width: 'w-full',
	};
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
}: iNavbarBrand) => {
	const base = { display: 'inline-block', flex: 'shrink-0', width: 'w-44' };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<LinkWrapper alt={alt} name={name} href={href} className={classes}>
			<Img src={src} alt='Brand logo' width='w-full' />
		</LinkWrapper>
	);
};

export const NavbarList = ({ id, name = 'NavbarList', className, children, ...tailwind }: iNavbarList) => {
	const base = { display: 'flex-end', space: 'space-x-2', spacing: '' };
	const props = { ...base, ...tailwind, className, name };

	return <Ul {...props}>{children}</Ul>;
};

// Docs
// https://tailwindui.com/interface/application-ui/navigation/navbars
