import { useRef, useState } from 'react';
import { usePopper } from 'react-popper';

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
	const ref = useRef(null);

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
	variant = 'accent',
	nextIcon = 'chevron-down',
	onClick,
	className,
	children,
	...tailwind
}: iDropToggle) => {
	const base = { display: 'flex-between', space: 'space-x-4' };
	const props = { ...base, ...tailwind, children, className, name };

	return <Btn id={id} alt={alt} variant={variant} nextIcon={nextIcon} onClick={() => onClick(id)} {...props} />;
};

export const DropMenu = ({ id, ref, name = 'DropMenu', open, className, children, ...tailwind }: iDropMenu) => {
	const [parentRef, setParentRef] = useState(null);
	const [dropRef, setDropRef] = useState(null);
	// const [popperInstance, setPopperInstance] = useState(null);
	const base = {
		bgColor: 'bg-white dark:bg-gray-900',
		border: 'border',
		...borderProps,
		borderRadius: 'rounded-md',
		shadow: 'shadow-lg',
		shadowColor: 'dark:shadow-gray-800/25',
		textAlign: 'text-left',
		transition: 'transition-opacity transition-transform ease',
		width: 'w-auto',
		overflow: 'overflow-hidden overflow-y-scroll',
		zIndex: 'z-10',
	};
	const [fade, setFade] = useState('hidden');
	const classes = tailwindClassBuilder({ ...base, ...tailwind, fade, className });
	// const ref = useRef(null);
	const fadeRef = useRef(null);

	const { styles, attributes } = usePopper(ref, dropRef, {
		placement: 'bottom-end',
		strategy: 'fixed',
		modifiers: [{ name: 'offset', options: { offset: [0, 5] } }],
	});

	// Hooks
	// useEffect(() => {
	// 	if (ref?.current) {
	// 		const parentElement = ref.current.parentElement;
	// 		if (parentElement) setParentRef(parentElement);
	// 	}
	// }, [ref]);

	// useEffect(() => {
	// 	if (ref?.current) {
	// 		const instance = usePopper(parentRef, dropRef, {
	// 			placement: 'bottom-end',
	// 			strategy: 'fixed',
	// 			modifiers: [{ name: 'offset', options: { offset: [0, 5] } }],
	// 		});
	// 		// setPopperInstance(instance);
	// 	}
	// }, [ref]);

	// Render
	return (
		<Fade
			ref={fadeRef}
			show={open}
			timeout={100}
			onEnter={() => setFade(`opacity-0 scale-90 translate-y-4`)}
			onEntered={() => setFade('opacity-100 scale-100 translate-y-0')}
			onExiting={() => setFade('opacity-0 scale-90 translate-y-4')}
			onExited={() => setFade('hidden')}>
			<div
				id={id}
				ref={setDropRef}
				role='menu'
				aria-orientation='vertical'
				aria-labelledby='menu-button'
				tabIndex={-1}
				style={styles.popper}
				className='z-10'
				{...attributes.popper}>
				<Div className={classes}>{children}</Div>
			</div>
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
		color: 'text-gray-800 dark:text-white',
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
		color: 'text-gray-500 dark:text-gray-300',
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
	const props = { ...base, ...tailwind, children, className, name };

	return <AccentBtn {...props} />;
};

export const DropLink = ({ id, name = 'DropLink', className, children, ...tailwind }: iDropLink) => {
	const base = { align: 'text-left', display: 'flex-start', space: 'space-x-4', width: 'w-full' };
	const props = { ...base, ...tailwind, children, className, name };

	return <AccentLink {...props} />;
};

// Docs
// https://tailwindui.com/interface/application-ui/elements/drops
