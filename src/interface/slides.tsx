import { useEffect, useRef, useState } from 'react';

import { Fade } from 'components/animation-wrapper';
import { useInterface } from 'contexts/interface-context';
import { useKeyPress } from 'hooks';
import { AccentBtn } from 'interface/buttons';
import { H4 } from 'interface/fonts';
import { Div } from 'interface/html';
import {
	iSlide,
	iSlideBackdrop,
	iSlideBody,
	iSlideFooter,
	iSlideHeader,
	iSlideTitle,
	iSlideWrapper,
} from 'interface/slides.types';
import { borderProps, computeSlideAnimation } from 'utils';

export const SlideWrapper = ({
	id,
	name = 'SlideWrapper',
	open,
	onClose,
	className,
	children,
	...tailwind
}: iSlideWrapper) => {
	const base = {
		position: 'fixed',
		inset: 'inset-0',
		zIndex: 'z-20',
	};
	const props = { ...base, ...tailwind, className, name };

	return (
		<Div {...props}>
			{children}
			<SlideBackdrop open={open} onClose={onClose} />
		</Div>
	);
};

export const SlideBackdrop = ({ id, name = 'SlideBackdrop', open, onClose, ...tailwind }: iSlideBackdrop) => {
	const base = {
		bgColor: 'bg-black dark:bg-gray-700',
		bgOpacity: 'bg-opacity-75',
		duration: 'duration-200',
		ease: 'ease-in',
		height: 'h-full',
		inset: 'inset-0',
		position: 'fixed',
		transition: 'transition-all',
	};
	const [fade, setFade] = useState('hidden');
	const props = { ...base, ...tailwind, fade, name };
	const ref = useRef(null);

	return (
		<Fade
			ref={ref}
			show={open}
			timeout={{ enter: 0, exit: 200 }}
			onEnter={() => setFade('opacity-0')}
			onEntered={() => setFade('opacity-75')}
			onExit={() => setFade('opacity-75')}
			onExiting={() => setFade('opacity-0')}
			onExited={() => setFade('hidden')}>
			<Div ref={ref} onClick={onClose} {...props} />
		</Fade>
	);
};

export const Slide = ({
	id,
	name = 'Slide',
	open,
	placement = 'left',
	onClose,
	className,
	children,
	...tailwind
}: iSlide) => {
	const base = {
		position: 'fixed',
		bgColor: 'bg-white dark:bg-gray-900',
		transition: 'transition-all',
		transform: 'transform',
		ease: 'ease-out',
		delay: open ? 'delay-200' : '',
		display: 'flex-column',
		duration: 'duration-200',
		height: 'h-full',
		width: 'w-[400px] max-w-80vw min-w-40vw',
		placement: placement === 'left' ? 'left-0' : 'right-0',
		shadow: placement === 'left' ? 'shadow-r-lg' : 'shadow-l-lg',
		zIndex: 'z-20',
	};
	const [animation, setAnimation] = useState(`opacity-0 ${computeSlideAnimation(placement)}`);
	const props = { ...base, ...tailwind, animation, className };
	const { ref, createPortal, toggleScroll } = useInterface();
	const animationRef = useRef(null);

	// Hooks
	useEffect(() => {
		toggleScroll(open);
	}, [open]);

	useKeyPress(onKeyDown, []);

	// Function
	function onKeyDown(e) {
		if (!open) return;
		if (e.target.dataset.name === 'FormInput') return;
		if (e.keyCode === 27 && onClose) onClose();
	}

	// Render
	return ref?.current
		? createPortal(
				<Fade
					ref={animationRef}
					show={open}
					timeout={{ enter: 0, exit: 200 }}
					onEnter={() => setAnimation(`opacity-0 ${computeSlideAnimation(placement)}`)}
					onEntered={() => setAnimation('opacity-100 translate-x-0')}
					onExit={() => setAnimation('opacity-100 translate-x-0')}
					onExiting={() => setAnimation(`opacity-0 ${computeSlideAnimation(placement)}`)}>
					<SlideWrapper open={open} onClose={onClose}>
						<Div ref={animationRef} {...props}>
							{children}
						</Div>
					</SlideWrapper>
				</Fade>,
				ref?.current,
			)
		: null;
};

export const SlideHeader = ({ id, name = 'SlideHeader', onClose, className, children, ...tailwind }: iSlideHeader) => {
	const base = {
		display: 'flex-between',
		border: 'border-b',
		...borderProps,
		spacing: 'p-4',
		width: 'w-full',
	};
	const props = { ...base, ...tailwind, className, name };

	return (
		<Div {...props}>
			{children}
			<AccentBtn size='h-10 w-10' icon='xmark' color='gray-500 dark:gray-200' onClick={onClose} />
		</Div>
	);
};

export const SlideTitle = ({ id, name = 'SlideTitle', className, children, ...tailwind }: iSlideTitle) => {
	const base = { fontWeight: 'font-bold', tracking: 'tracking-wide' };
	const props = { ...base, ...tailwind, className, name };

	return <H4 {...props}>{children}</H4>;
};

export const SlideBody = ({ id, name = 'SlideBody', className, children, ...tailwind }: iSlideBody) => {
	const base = { display: 'grow', overflow: 'overflow-y-scroll', spacing: 'p-4' };
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const SlideFooter = ({ id, name = 'SlideFooter', className, children, ...tailwind }: iSlideFooter) => {
	const base = { border: 'border-t', ...borderProps, spacing: 'p-4' };
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/application-ui/overlays/slide-overs
