import { Fragment, useEffect, useRef, useState } from 'react';

import { Fade } from 'components/fade-wrapper';
import { useInterface } from 'contexts';
import { useKeyPress, useMouseUp } from 'hooks';
import { AccentBtn } from 'interface/buttons';
import { H6, P } from 'interface/fonts';
import { Div, Li, Ul } from 'interface/html';
import { AccentLink } from 'interface/links';
import * as styles from 'styles/menu-styles';
import * as types from 'types/menu-types';
import { classBuilder } from 'utils';

export const Menu = ({
	id,
	name = 'Menu',
	open,
	onClose,
	tailwind,
	className,
	children,
	...props
}: types.MenuProps) => {
	const base = styles.menu;
	const computed = { ...base, ...props, tailwind, className, name };
	const { toggleScroll } = useInterface();
	const ref = useRef(null);

	// Hooks
	useEffect(() => {
		toggleScroll(open);
	}, [open]);

	useKeyPress(onKeyDown, [open]);
	useMouseUp(onMouseUp, [open]);

	// Methods
	function onKeyDown(e) {
		if (!open) return;
		if (e.target.dataset.name === 'FormInput') return;
		if (e.keyCode === 27) onClose();
	}

	function onMouseUp(e) {
		if (!open) return;
		if (ref?.current?.contains(e.target)) return;
		onClose();
	}

	// Render
	return (
		<Fragment>
			<Div id={id} ref={ref} {...computed}>
				{children}
			</Div>
			<MenuBackdrop open={open} onClose={onClose} />
		</Fragment>
	);
};

export const MenuBackdrop = ({
	id,
	name = 'MenuBackdrop',
	open,
	onClose,
	tailwind,
	className,
	children,
	...props
}: types.MenuBackdropProps) => {
	const base = styles.menuBackdrop;
	const [fade, setFade] = useState({ display: 'hidden', bgOpacity: '' });
	const computed = { ...base, ...props, tailwind, ...fade, className, name };
	const ref = useRef(null);

	return (
		<Fade
			ref={ref}
			show={open}
			timeout={{ enter: 0, exit: 200 }}
			onEnter={() => setFade({ display: '', bgOpacity: 'bg-opacity-0 dark:bg-opacity-0' })}
			onEntered={() => setFade({ display: '', bgOpacity: 'bg-opacity-[85%] dark:bg-opacity-[85%]' })}
			onExiting={() => setFade({ display: '', bgOpacity: 'bg-opacity-0 dark:bg-opacity-0' })}
			onExited={() => setFade({ display: 'hidden', bgOpacity: 'bg-opacity-0 dark:bg-opacity-0' })}>
			<Div ref={ref} onClick={onClose} {...computed}>
				{children}
			</Div>
		</Fade>
	);
};

export const MenuToggle = ({
	id,
	name = 'MenuToggle',
	alt = 'toggle',
	icon = 'chevron-down',
	onClick,
	tailwind,
	className,
	children,
	...props
}: types.MenuToggleProps) => {
	const base = { display: 'flex-between', space: 'space-x-4' };
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<AccentBtn alt={alt} nextIcon={icon} onClick={onClick} {...computed}>
			{children}
		</AccentBtn>
	);
};

export const MenuMenu = ({
	id,
	name = 'MenuMenu',
	open,
	tailwind,
	className,
	children,
	...props
}: types.MenuMenuProps) => {
	const base = styles.menuMenu;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<MenuMenuWrapper open={open}>
			<div role='menu' aria-orientation='vertical' aria-labelledby='menu-button' tabIndex={-1} className={computed}>
				{children}
			</div>
		</MenuMenuWrapper>
	);
};

export const MenuMenuWrapper = ({
	id,
	name = 'MenuMenuWrapper',
	open,
	tailwind,
	className,
	children,
	...props
}: types.MenuMenuProps) => {
	const base = styles.menuMenuWrapper;
	const [animation, setAnimation] = useState('opacity-0 scale-90 -translate-y-4');
	const computed = { ...base, ...props, tailwind, animation, className };
	const ref = useRef(null);

	return (
		<Fade
			ref={ref}
			show={open}
			timeout={{ enter: 0, exit: 200 }}
			onEntered={() => setAnimation('opacity-100 translate-y-0')}
			onExiting={() => setAnimation('opacity-0 -translate-y-4')}>
			<Div ref={ref} {...computed}>
				{children}
			</Div>
		</Fade>
	);
};

export const MenuBlock = ({ id, name = 'MenuBlock', tailwind, className, children, ...props }: types.MenuListProps) => {
	const base = styles.menuBlock;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const MenuTitle = ({
	id,
	name = 'MenuTitle',
	tailwind,
	className,
	children,
	...props
}: types.MenuTitleProps) => {
	const base = styles.menuTitle;
	const computed = { ...base, ...props, tailwind, className, name };

	return <H6 {...computed}>{children}</H6>;
};

export const MenuSubtitle = ({
	id,
	name = 'MenuSubtitle',
	tailwind,
	className,
	children,
	...props
}: types.MenuSubtitleProps) => {
	const base = styles.menuSubtitle;
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const MenuList = ({ id, name = 'MenuList', tailwind, className, children, ...props }: types.MenuListProps) => {
	const base = styles.menuList;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Ul {...computed}>{children}</Ul>;
};

export const MenuItem = ({ id, name = 'MenuItem', tailwind, className, children, ...props }: types.MenuItemProps) => {
	const base = styles.menuItem;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Li {...computed}>{children}</Li>;
};

export const MenuBtn = ({
	id,
	name = 'MenuBtn',
	active,
	onClick,
	taskRunning,
	tailwind,
	className,
	children,
	...props
}: types.MenuBtnProps) => {
	const base = styles.menuBtn;
	const computed = { ...base, ...props, tailwind, children, className, name };

	return <AccentBtn active={active} taskRunning={taskRunning} onClick={onClick} {...computed} />;
};

export const MenuLink = ({
	id,
	name = 'MenuLink',
	href = '',
	tailwind,
	className,
	children,
	...props
}: types.MenuLinkProps) => {
	const base = styles.menuLink;
	const computed = { ...base, ...props, tailwind, children, className, name };

	return <AccentLink href={href} {...computed} />;
};

// Docs
// https://tailwindui.com/interface/application-ui/elements/menus
