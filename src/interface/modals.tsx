import { Fragment, useEffect, useRef, useState } from 'react';

import { Fade } from 'components/animation-wrapper';
import { useInterface } from 'contexts';
import { useKeyPress } from 'hooks';
import { AccentBtn } from 'interface/buttons';
import { Font } from 'interface/fonts';
import { Div, Span } from 'interface/html';
import {
	iModal,
	iModalBackdrop,
	iModalBody,
	iModalFooter,
	iModalHeader,
	iModalSubtitle,
	iModalTitle,
	iModalWrapper,
} from 'interface/modals.types';
import { borderProps, computeSectionSize } from 'utils';

export const ModalWrapper = ({
	id,
	name = 'ModalWrapper',
	open,
	onClose,
	className,
	children,
	tailwind,
}: iModalWrapper) => {
	const base = {
		position: 'fixed',
		inset: 'inset-0',
		overflow: 'overflow-y-auto',
		zIndex: 'z-20',
	};
	const props = { ...base, ...tailwind, className, name };

	return (
		<Fragment>
			<Div {...props}>
				<Div align='text-center' height='h-full' spacing='mx-auto'>
					{children}
				</Div>
				<ModalBackdrop open={open} onClose={onClose} tailwind={tailwind?.backdrop} />
			</Div>
		</Fragment>
	);
};

export const ModalBackdrop = ({ id, name = 'ModalBackdrop', open, onClose, tailwind }: iModalBackdrop) => {
	const base = {
		bgColor: 'bg-black dark:bg-gray-700',
		duration: 'duration-200',
		ease: 'ease-in',
		height: 'h-full',
		inset: 'inset-0',
		position: 'fixed',
		transition: 'transition-all',
	};
	const [fade, setFade] = useState({ display: 'hidden', bgOpacity: '' });
	const props = { ...base, ...fade, ...tailwind, name };
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
			<Div ref={ref} onClick={onClose} {...props} />
		</Fade>
	);
};

export const Modal = ({ id, name = 'Modal', open, onClose, className, children, tailwind }: iModal) => {
	const base = {
		align: 'text-left',
		bgColor: 'bg-white dark:bg-gray-900',
		border: 'border',
		...borderProps,
		borderRadius: 'rounded-lg',
		duration: 'duration-200',
		ease: 'ease-in',
		spacing: 'mx-auto my-8',
		transition: 'transition-all',
		width: 'w-sm max-w-full',
		zIndex: 'z-30',
	};
	const [fade, setFade] = useState('hidden');
	const props = { ...base, ...tailwind, fade, className, name };
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
					onEnter={() => setFade('opacity-0 scale-90')}
					onEntered={() => setFade('opacity-100 scale-100')}
					onExiting={() => setFade('opacity-0 scale-90')}
					onExited={() => setFade('hidden')}>
					<ModalWrapper open={open} onClose={onClose} tailwind={tailwind?.wrapper}>
						<Div ref={animationRef} {...props}>
							{children}
						</Div>
					</ModalWrapper>
				</Fade>,
				ref?.current,
			)
		: null;
};

export const ModalHeader = ({ id, name = 'ModalHeader', onClose, className, children, ...tailwind }: iModalHeader) => {
	const base = {
		display: 'flex-between',
		border: 'border-b',
		...borderProps,
		space: 'space-x-4',
		spacing: 'p-4',
	};
	const props = { ...base, ...tailwind, className, name };

	return (
		<Div {...props}>
			<Span>{children}</Span>
			{onClose && <AccentBtn alt='close' size='icon' icon='xmark' fontSize='text-xl' onClick={onClose} />}
		</Div>
	);
};

export const ModalTitle = ({ id, name = 'ModalTitle', size, className, children, ...tailwind }: iModalTitle) => {
	const base = {
		display: 'flex-start',
		fontWeight: 'font-bold',
		size: size || 'h4',
		space: 'space-x-4',
		tracking: 'tracking-wide',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Font {...props}>{children}</Font>;
};

export const ModalSubtitle = ({
	id,
	name = 'ModalSubtitle',
	size = 'p',
	className,
	children,
	...tailwind
}: iModalSubtitle) => {
	const base = {
		size,
		color: 'gray-600 dark:gray-400',
		fontWeight: 'font-normal',
		fontFamily: 'font-secondary',
		space: 'space-x-4',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Font {...props}>{children}</Font>;
};

export const ModalBody = ({ id, name = 'ModalBody', size, className, children, ...tailwind }: iModalBody) => {
	const base = {
		align: 'text-left',
		...borderProps,
		spacing: 'p-4',
		size: computeSectionSize(size),
	};
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const ModalFooter = ({ id, name = 'ModalFooter', className, children, ...tailwind }: iModalFooter) => {
	const base = {
		border: 'border-t',
		...borderProps,
		color: 'gray-500',
		fontSize: 'text-sm',
		display: 'flex-end',
		spacing: 'p-4',
		space: 'space-x-4',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

// Docs
// https://headlessui.dev/react/dialog
// https://tailwindui.com/interface/application-ui/overlays/modals
