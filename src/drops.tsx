import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

import { Fade } from 'components/animation-wrapper';
import { AccentBtn, BorderBtn, Btn } from 'buttons';
import {
	iDrop,
	iDropBtn,
	iDropHeader,
	iDropItem,
	iDropLink,
	iDropList,
	iDropMenu,
	iDropSubtitle,
	iDropTitle,
	iDropToggle,
} from 'types/drops.types';
import { H6, P } from 'fonts';
import { Div, Li, Ul } from 'html';
import { AccentLink, Link } from 'links';
import { borderProps, tailwindClassBuilder } from 'tailwind';

export const Drop = ({ id, name = 'Drop', open, setOpen, className, children, ...tailwind }: iDrop) => {
	const base = {};
	const props = { ...base, ...tailwind, className, name };
	const router = useRouter();
	const ref = useRef(null);

	// Hooks
	useEffect(() => {
		if (open) setOpen(false);
	}, [router.asPath]);

	useEffect(() => {
		open ? document.addEventListener('mouseup', onMouseUp) : document.removeEventListener('mouseup', onMouseUp);
		return () => document.removeEventListener('mouseup', onMouseUp);
	}, [open]);

	useEffect(() => {
		open ? window.addEventListener('keydown', onKeyDown) : window.removeEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	}, [open]);

	// Methods
	const onMouseUp = e => {
		if (ref?.current?.contains(e.target)) return;
		setOpen(false);
	};

	const onKeyDown = e => {
		if (e.keyCode === 27) setOpen(false);
		if (e.keyCode === 27) e.preventDefault();
	};

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
	type,
	nextIcon = 'chevron-down',
	onClick,
	className,
	children,
	...tailwind
}: iDropToggle) => {
	const base = { display: 'flex-between', space: 'space-x-4' };
	const props = { ...base, ...tailwind, className, name, children };

	switch (type) {
		case 'accent':
			return <AccentBtn nextIcon={nextIcon} onClick={onClick} {...props} />;

		case 'border':
			return <BorderBtn nextIcon={nextIcon} onClick={onClick} {...props} />;

		default:
			return <Btn nextIcon={nextIcon} onClick={onClick} {...props} />;
	}
};

export const DropMenuWrapper = ({ id, name = 'DropMenuWrapper', open, className, children, ...tailwind }) => {
	const base = {
		position: 'absolute',
		width: 'w-full',
		transition: 'transition-all',
		zIndex: 'z-10',
	};
	const [animation, setAnimation] = useState('opacity-0 scale-90 translate-y-4');
	const props = { ...base, ...tailwind, animation, className };

	return (
		<Fade
			show={open}
			timeout={{ enter: 0, exit: 100 }}
			onEntered={() => setAnimation('opacity-100 scale-100 translate-y-0')}
			onExiting={() => setAnimation('opacity-0 scale-90 translate-y-4')}>
			<Div {...props}>{children}</Div>
		</Fade>
	);
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
		overflow: 'o-hidden overflow-y-scroll',
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

export const DropBtn = ({
	id,
	name = 'DropBtn',
	type,
	active,
	onClick,
	taskRunning,
	className,
	children,
	...tailwind
}: iDropBtn) => {
	const base = { align: 'text-left', display: 'flex-start', space: 'space-x-4', width: 'w-full' };
	const props = { ...base, ...tailwind, className, name, active, taskRunning, onClick, children };

	switch (type) {
		case 'basic':
			return <Btn {...props} />;

		default:
			return <AccentBtn {...props} />;
	}
};

export const DropLink = ({ id, name = 'DropLink', type, href = '', className, children, ...tailwind }: iDropLink) => {
	const base = { align: 'text-left', display: 'flex-start', space: 'space-x-4', width: 'w-full' };
	const props = { ...base, ...tailwind, className, name, href, children };

	switch (type) {
		case 'basic':
			return <Link {...props} />;

		case 'accent':
			return <AccentLink {...props} />;

		default:
			return <AccentLink {...props} />;
	}
};

// Docs
// https://tailwindui.com/interface/application-ui/elements/drops
