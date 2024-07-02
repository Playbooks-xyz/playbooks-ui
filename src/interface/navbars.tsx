import { forwardRef } from 'react';

import { Img, Ul } from 'interface/html';
import { LinkWrapper } from 'interface/links';
import { iNavbar, iNavbarBrand, iNavbarList } from 'types/navbars.types';
import { borderProps, tailwindClassBuilder } from 'tailwind';

export const Navbar = forwardRef(({ id, name = 'Navbar', className, children, ...tailwind }: iNavbar, ref) => {
	const base = {
		display: 'flex-between',
		bgColor: 'bg-white dark:bg-gray-900',
		...borderProps,
		position: 'relative',
		spacing: 'p-4',
		width: 'w-full',
	};
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<nav ref={ref} data-name={name} className={classes}>
			{children}
		</nav>
	);
});

export const NavbarBrand = ({
	id,
	name = 'NavbarBrand',
	href = '/',
	src,
	alt = 'Playbooks Logo',
	className,
	children,
	...tailwind
}: iNavbarBrand) => {
	const base = { display: 'inline-block', flex: 'shrink-0', width: 'w-44' };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<LinkWrapper href={href} className={classes}>
			<Img src={src} alt={alt} width='w-full' />
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
