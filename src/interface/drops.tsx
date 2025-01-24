import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

import { Fade } from 'components/animation-wrapper';
import { useKeyPress, useMouseUp } from 'hooks';
import { AccentBtn, Btn } from 'interface/buttons';
import {
	iDrop,
	iDropBtn,
	iDropHeader,
	iDropItem,
	iDropLink,
	iDropList,
	iDropMenu,
	iDropMenuWrapper,
	iDropSubtitle,
	iDropTitle,
	iDropToggle,
} from 'interface/drops.types';
import { H6, P } from 'interface/fonts';
import { Div, Li, Ul } from 'interface/html';
import { AccentLink } from 'interface/links';
import { borderProps, tailwindClassBuilder } from 'utils';

export const Drop = ({ id, name = 'Drop', open, onClose, className, children, ...tailwind }: iDrop) => {
	const base = {};
	const props = { ...base, ...tailwind, className, name };
	const router = useRouter();
	const ref = useRef(null);

	// Hooks
	useEffect(() => {
		if (open) onClose();
	}, [router.asPath]);

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
		if (ref?.current?.contains(e.target)) return;
		onClose();
	}

	// Render
	return (
		<Div id={id} ref={ref} {...props}>
			{children}
		</Div>
	);
};

export const DropToggle = ({
	id,
	name = 'DropToggle',
	alt,
	nextIcon = 'chevron-down',
	variant = 'accent',
	className,
	children,
	...tailwind
}: iDropToggle) => {
	const base = { display: 'flex-between', space: 'space-x-4' };
	const props = { ...base, ...tailwind, className, name, children };

	return <Btn alt={alt} variant={variant} nextIcon={nextIcon} {...props} />;
};

export const DropMenu = ({ id, name = 'DropMenu', open, className, children, ...tailwind }: iDropMenu) => {
	const base = {
		bgColor: 'bg-white dark:bg-gray-900',
		inset: 'right-0',
		position: 'absolute',
		border: 'border',
		...borderProps,
		borderRadius: 'rounded-md',
		shadow: 'shadow-lg',
		shadowColor: 'dark:shadow-gray-800/25',
		textAlign: 'text-left',
		width: 'min-w-full w-auto',
		overflow: 'overflow-hidden overflow-y-scroll',
	};
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<DropMenuWrapper open={open}>
			<div role='menu' aria-orientation='vertical' aria-labelledby='menu-button' tabIndex={-1} className={classes}>
				{children}
			</div>
		</DropMenuWrapper>
	);
};

export const DropMenuWrapper = ({
	id,
	name = 'DropMenuWrapper',
	open,
	className,
	children,
	...tailwind
}: iDropMenuWrapper) => {
	const base = {
		position: 'absolute',
		width: 'w-full',
		transition: 'transition-all',
		zIndex: 'z-10',
	};
	const [animation, setAnimation] = useState('opacity-0 scale-90 translate-y-4');
	const props = { ...base, ...tailwind, animation, className };
	const ref = useRef(null);

	return (
		<Fade
			ref={ref}
			show={open}
			timeout={{ enter: 0, exit: 100 }}
			onEntered={() => setAnimation('opacity-100 scale-100 translate-y-0')}
			onExiting={() => setAnimation('opacity-0 scale-90 translate-y-4')}>
			<Div ref={ref} {...props}>
				{children}
			</Div>
		</Fade>
	);
};

export const DropHeader = ({ id, name = 'DropHeader', className, children, ...tailwind }: iDropHeader) => {
	const base = {
		align: 'text-left',
		border: 'border-b',
		...borderProps,
		space: 'space-y-1',
		spacing: 'px-6 py-4',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const DropTitle = ({ id, name = 'DropTitle', className, children, ...tailwind }: iDropTitle) => {
	const base = {
		color: 'gray-800 dark:white',
		whitespace: 'whitespace-nowrap',
		fontWeight: 'font-semibold',
		textTransform: 'capitalize',
		tracking: 'tracking-wide',
	};
	const props = { ...base, ...tailwind, className, name };

	return <H6 {...props}>{children}</H6>;
};

export const DropSubtitle = ({ id, name = 'DropSubtitle', className, children, ...tailwind }: iDropSubtitle) => {
	const base = {
		color: 'gray-500 dark:gray-300',
		whitespace: 'whitespace-nowrap',
		fontWeight: 'font-normal',
		fontSize: 'text-sm',
	};
	const props = { ...base, ...tailwind, className, name };

	return <P {...props}>{children}</P>;
};

export const DropList = ({ id, name = 'DropList', className, children, ...tailwind }: iDropList) => {
	const base = { border: '', ...borderProps, space: 'space-y-1', spacing: 'p-2' };
	const props = { ...base, ...tailwind, className, name };

	return <Ul {...props}>{children}</Ul>;
};

export const DropItem = ({ id, name = 'DropItem', className, children, ...tailwind }: iDropItem) => {
	const base = { display: 'block', width: 'w-full' };
	const props = { ...base, ...tailwind, className, name };

	return <Li {...props}>{children}</Li>;
};

export const DropBtn = ({ id, name = 'DropBtn', className, children, ...tailwind }: iDropBtn) => {
	const base = { align: 'text-left', display: 'flex-start', space: 'space-x-4', width: 'w-full' };
	const props = { ...base, ...tailwind, className, name, children };

	return <AccentBtn {...props} />;
};

export const DropLink = ({ id, name = 'DropLink', className, children, ...tailwind }: iDropLink) => {
	const base = { align: 'text-left', display: 'flex-start', space: 'space-x-4', width: 'w-full' };
	const props = { ...base, ...tailwind, className, name, children };

	return <AccentLink {...props} />;
};

// Docs
// https://tailwindui.com/interface/application-ui/elements/drops
