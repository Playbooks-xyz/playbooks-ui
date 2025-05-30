import { useEffect, useRef, useState } from 'react';

import { Fade } from 'components/fade-wrapper';
import { useInterface } from 'contexts/interface-context';
import { useKeyPress } from 'hooks';
import { AccentBtn } from 'interface/buttons';
import { H4 } from 'interface/fonts';
import { Div } from 'interface/html';
import * as styles from 'styles/slide-styles';
import * as types from 'types/slide-types';
import { computeSlideAnimation } from 'utils';

export const SlideWrapper = ({
	id,
	name = 'SlideWrapper',
	open,
	onClose,
	tailwind,
	className,
	children,
	...props
}: types.SlideWrapperProps) => {
	const base = styles.slideWrapper;
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div {...computed}>
			{children}
			<SlideBackdrop open={open} onClose={onClose} />
		</Div>
	);
};

export const SlideBackdrop = ({ id, name = 'SlideBackdrop', open, onClose, tailwind, ...props }: types.SlideBackdropProps) => {
	const base = styles.slideBackdrop;
	const [fade, setFade] = useState({ display: 'hidden', bgOpacity: '' });
	const computed = { ...base, ...fade, ...props, tailwind, name };
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
			<Div ref={ref} onClick={onClose} {...computed} />
		</Fade>
	);
};

export const Slide = ({
	id,
	name = 'Slide',
	open,
	placement = 'left',
	onClose,
	tailwind,
	className,
	children,
	...props
}: types.SlideProps) => {
	const base = {
		...styles.slide,
		delay: open ? 'delay-200' : '',
		inset: placement === 'left' ? 'left-0' : 'right-0',
		shadow: placement === 'left' ? 'shadow-r-lg' : 'shadow-l-lg',
	};
	const [animation, setAnimation] = useState(`opacity-0 ${computeSlideAnimation(placement)}`);
	const computed = { ...base, ...props, tailwind, animation, className };
	const { ref, createPortal, toggleScroll } = useInterface();
	const fadeRef = useRef(null);

	// Hooks
	useEffect(() => {
		toggleScroll(open);
	}, [open]);

	useKeyPress(onKeyDown, [open]);

	// Function
	function onKeyDown(e) {
		if (!open) return;
		if (e.target.dataset.name === 'FormInput') return;
		if (e.keyCode === 27 && typeof onClose === 'function') onClose();
	}

	// Render
	return ref?.current
		? createPortal(
				<Fade
					ref={fadeRef}
					show={open}
					timeout={{ enter: 0, exit: 200 }}
					onEnter={() => setAnimation(`opacity-0 ${computeSlideAnimation(placement)}`)}
					onEntered={() => setAnimation('opacity-100 translate-x-0')}
					onExit={() => setAnimation('opacity-100 translate-x-0')}
					onExiting={() => setAnimation(`opacity-0 ${computeSlideAnimation(placement)}`)}>
					<SlideWrapper open={open} onClose={onClose}>
						<Div ref={fadeRef} {...computed}>
							{children}
						</Div>
					</SlideWrapper>
				</Fade>,
				ref?.current,
			)
		: null;
};

export const SlideHeader = ({
	id,
	name = 'SlideHeader',
	onClose,
	tailwind,
	className,
	children,
	...props
}: types.SlideHeaderProps) => {
	const base = styles.slideHeader;
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div {...computed}>
			{children}
			<AccentBtn alt='close' size='icon' icon='xmark' color='text-gray-500 dark:text-gray-200' onClick={onClose} />
		</Div>
	);
};

export const SlideTitle = ({ id, name = 'SlideTitle', tailwind, className, children, ...props }: types.SlideTitleProps) => {
	const base = styles.slideTitle;
	const computed = { ...base, ...props, tailwind, className, name };

	return <H4 {...computed}>{children}</H4>;
};

export const SlideBody = ({ id, name = 'SlideBody', tailwind, className, children, ...props }: types.SlideBodyProps) => {
	const base = styles.slideBody;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const SlideFooter = ({ id, name = 'SlideFooter', tailwind, className, children, ...props }: types.SlideFooterProps) => {
	const base = styles.slideFooter;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/application-ui/overlays/slide-overs
