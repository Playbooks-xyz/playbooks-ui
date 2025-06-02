import { useRef, useState } from 'react';

import { Fade } from 'components/fade-wrapper';
import { useInterface } from 'contexts';
import { useKeyPress, useMouseUp } from 'hooks';
import { AccentBtn } from 'interface/buttons';
import { H6, P } from 'interface/fonts';
import { Div, Li, Ul } from 'interface/html';
import { AccentLink } from 'interface/links';
import * as types from 'types/menu-types';

export const Menu = ({
	id,
	ref,
	name = 'Menu',
	open,
	onClose,
	tailwind,
	className,
	children,
	...props
}: types.MenuProps) => {
	const { theme } = useInterface();
	const base = theme.menu();
	const computed = { ...base, ...props, tailwind, className, name };
	const internalRef = useRef(null);

	// Computed
	const combinedRef = element => {
		internalRef.current = element;
		if (ref) typeof ref === 'function' ? ref(element) : (ref.current = element);
	};

	// Hooks
	useKeyPress(onKeyDown, [open]);
	useMouseUp(onMouseUp, [open]);

	// Functions
	function onKeyDown(e) {
		if (!open) return;
		if (e.target.dataset.name === 'FormInput') return;
		if (e.keyCode === 27) onClose();
	}

	function onMouseUp(e) {
		if (!open) return;
		if (internalRef?.current?.contains(e.target)) return;
		onClose();
	}

	// Render
	return (
		<Div id={id} ref={combinedRef} {...computed}>
			{children}
		</Div>
	);
};

export const MenuWrapper = ({
	id,
	name = 'MenuWrapper',
	open,
	onClose,
	tailwind,
	className,
	children,
	...props
}: types.MenuWrapperProps) => {
	const { theme } = useInterface();
	const base = theme.menuWrapper();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div {...computed}>
			{children}
			<MenuBackdrop open={open} onClose={onClose} tailwind={tailwind?.backdrop} />
		</Div>
	);
};

export const MenuBackdrop = ({
	id,
	name = 'MenuBackdrop',
	open,
	onClose,
	tailwind,
	className,
	...props
}: types.MenuBackdropProps) => {
	const { theme } = useInterface();
	const base = theme.menuBackdrop({ open });
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div onClick={onClose} {...computed} />;
};

export const MenuMenu = ({
	id,
	name = 'MenuMenu',
	open,
	onClose,
	tailwind,
	className,
	children,
	...props
}: types.MenuMenuProps) => {
	const [show, setShow] = useState(false);
	const { theme } = useInterface();
	const base = theme.menuMenu({ open: show });
	const computed = { ...base, ...props, tailwind, className, name };
	const ref = useRef(null);

	// Methods
	const onEnter = () => setShow(true);
	const onExit = () => setShow(false);

	// Render
	return (
		<Fade ref={ref} show={open} timeout={200} onEnter={onEnter} onExit={onExit}>
			<MenuWrapper open={show} onClose={onClose} tailwind={tailwind?.wrapper}>
				<Div ref={ref} aria-orientation='vertical' aria-labelledby='menu-button' tabIndex={-1} {...computed}>
					{children}
				</Div>
			</MenuWrapper>
		</Fade>
	);
};

export const MenuBlock = ({ id, name = 'MenuBlock', tailwind, className, children, ...props }: types.MenuListProps) => {
	const { theme } = useInterface();
	const base = theme.menuBlock();
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
	const { theme } = useInterface();
	const base = theme.menuTitle();
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
	const { theme } = useInterface();
	const base = theme.menuSubtitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const MenuList = ({ id, name = 'MenuList', tailwind, className, children, ...props }: types.MenuListProps) => {
	const { theme } = useInterface();
	const base = theme.menuList();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Ul {...computed}>{children}</Ul>;
};

export const MenuItem = ({ id, name = 'MenuItem', tailwind, className, children, ...props }: types.MenuItemProps) => {
	const { theme } = useInterface();
	const base = theme.menuItem();
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
	const { theme } = useInterface();
	const base = theme.menuBtn();
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
	const { theme } = useInterface();
	const base = theme.menuLink();
	const computed = { ...base, ...props, tailwind, children, className, name };

	return <AccentLink href={href} {...computed} />;
};

// Docs
// https://tailwindui.com/interface/application-ui/elements/menus
