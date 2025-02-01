import { Fragment, useEffect, useRef, useState } from 'react';

import { Fade } from 'components/animation-wrapper';
import { useInterface } from 'contexts';
import { useKeyPress, useMouseUp } from 'hooks';
import { AccentBtn } from 'interface/buttons';
import { H6, P } from 'interface/fonts';
import { Div, Li, Ul } from 'interface/html';
import { AccentLink } from 'interface/links';
import {
	iMenu,
	iMenuBackdrop,
	iMenuBtn,
	iMenuItem,
	iMenuLink,
	iMenuList,
	iMenuMenu,
	iMenuSubtitle,
	iMenuTitle,
	iMenuToggle,
} from 'interface/menus.types';
import { borderProps, tailwindClassBuilder } from 'utils';

export const Menu = ({ id, name = 'Menu', open, onClose, className, children, ...tailwind }: iMenu) => {
	const base = { zIndex: 'z-20' };
	const props = { ...base, ...tailwind, className, name };
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
			<Div id={id} ref={ref} {...props}>
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
	className,
	children,
	...tailwind
}: iMenuBackdrop) => {
	const base = {
		bgColor: 'bg-black dark:bg-gray-700',
		duration: 'duration-200',
		ease: 'ease-in',
		height: 'h-full',
		inset: 'left-0 right-0 bottom-0',
		position: 'fixed',
		transition: 'transition-all',
		zIndex: 'z-1',
	};
	const [fade, setFade] = useState({ display: 'hidden', bgOpacity: '' });
	const props = { ...base, ...tailwind, ...fade, className, name };
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
			<Div ref={ref} onClick={onClose} {...props}>
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
	className,
	children,
	...tailwind
}: iMenuToggle) => {
	const base = { display: 'flex-between', space: 'space-x-4' };
	const props = { ...base, ...tailwind, className, name };

	return (
		<AccentBtn alt={alt} nextIcon={icon} onClick={onClick} {...props}>
			{children}
		</AccentBtn>
	);
};

export const MenuMenu = ({ id, name = 'MenuMenu', open, className, children, ...tailwind }: iMenuMenu) => {
	const base = {
		bgColor: 'bg-white dark:bg-gray-900',
		border: 'border-b',
		...borderProps,
		ease: 'ease-in',
		height: 'max-h-[100vh]',
		inset: 'right-0 left-0',
		position: 'absolute',
		shadow: 'shadow-lg',
		shadowColor: 'dark:shadow-gray-800/25',
		textAlign: 'text-left',
		width: 'min-w-full w-auto',
		overflow: 'overflow-hidden overflow-y-scroll',
	};
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<MenuMenuWrapper open={open}>
			<div role='menu' aria-orientation='vertical' aria-labelledby='menu-button' tabIndex={-1} className={classes}>
				{children}
			</div>
		</MenuMenuWrapper>
	);
};

export const MenuMenuWrapper = ({
	id,
	name = 'MenuMenuWrapper',
	open,
	className,
	children,
	...tailwind
}: iMenuMenu) => {
	const base = {
		position: 'absolute',
		width: 'w-full',
		transition: 'transition-all',
		zIndex: 'z-20',
	};
	const [animation, setAnimation] = useState('opacity-0 scale-90 -translate-y-4');
	const props = { ...base, ...tailwind, animation, className };
	const ref = useRef(null);

	return (
		<Fade
			ref={ref}
			show={open}
			timeout={{ enter: 0, exit: 200 }}
			onEntered={() => setAnimation('opacity-100 translate-y-0')}
			onExiting={() => setAnimation('opacity-0 -translate-y-4')}>
			<Div ref={ref} {...props}>
				{children}
			</Div>
		</Fade>
	);
};

export const MenuBlock = ({ id, name = 'MenuBlock', className, children, ...tailwind }: iMenuList) => {
	const base = { spacing: 'p-4' };
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const MenuTitle = ({ id, name = 'MenuTitle', className, children, ...tailwind }: iMenuTitle) => {
	const base = {
		fontWeight: 'font-bold',
		spacing: 'px-3 mb-4',
		textTransform: 'capitalize',
		tracking: 'tracking-wide',
	};
	const props = { ...base, ...tailwind, className, name };

	return <H6 {...props}>{children}</H6>;
};

export const MenuSubtitle = ({ id, name = 'MenuSubtitle', className, children, ...tailwind }: iMenuSubtitle) => {
	const base = {
		color: 'gray-500 dark:gray-300',
		whitespace: 'whitespace-nowrap',
		fontWeight: 'font-normal',
		fontSize: 'text-sm',
	};
	const props = { ...base, ...tailwind, className, name };

	return <P {...props}>{children}</P>;
};

export const MenuList = ({ id, name = 'MenuList', className, children, ...tailwind }: iMenuList) => {
	const base = { display: 'flex-column', space: 'space-y-2', spacing: 'py-4' };
	const props = { ...base, ...tailwind, className, name };

	return <Ul {...props}>{children}</Ul>;
};

export const MenuItem = ({ id, name = 'MenuItem', className, children, ...tailwind }: iMenuItem) => {
	const base = { display: 'flex', spacing: '', width: 'w-inherit' };
	const props = { ...base, ...tailwind, className, name };

	return <Li {...props}>{children}</Li>;
};

export const MenuBtn = ({
	id,
	name = 'MenuBtn',
	active,
	onClick,
	taskRunning,
	className,
	children,
	...tailwind
}: iMenuBtn) => {
	const base = { align: 'text-left', display: 'flex-start' };
	const props = { ...base, ...tailwind, children, className, name };

	return <AccentBtn active={active} taskRunning={taskRunning} onClick={onClick} {...props} />;
};

export const MenuLink = ({ id, name = 'MenuLink', href = '', className, children, ...tailwind }: iMenuLink) => {
	const base = { align: 'text-left', display: 'flex-start', width: 'w-full' };
	const props = { ...base, ...tailwind, children, className, name };

	return <AccentLink href={href} {...props} />;
};

// Docs
// https://tailwindui.com/interface/application-ui/elements/menus
