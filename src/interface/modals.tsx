import { Fragment, useEffect, useRef, useState } from 'react';

import { Fade } from 'components/fade-wrapper';
import { useInterface } from 'contexts';
import { useKeyPress } from 'hooks';
import { AccentBtn } from 'interface/buttons';
import { Font } from 'interface/fonts';
import { Div, Span } from 'interface/html';
import * as styles from 'styles/modal-styles';
import { computeBodySize } from 'theme';
import * as types from 'types/modal-types';

export const ModalWrapper = ({
	id,
	name = 'ModalWrapper',
	open,
	onClose,
	tailwind,
	className,
	children,
	...props
}: types.ModalWrapperProps) => {
	const base = styles.modalWrapper;
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Fragment>
			<Div {...computed}>
				<Div align='text-center' height='h-full' spacing='mx-auto'>
					{children}
				</Div>
				<ModalBackdrop open={open} onClose={onClose} tailwind={tailwind?.backdrop} />
			</Div>
		</Fragment>
	);
};

export const ModalBackdrop = ({
	id,
	name = 'ModalBackdrop',
	open,
	onClose,
	tailwind,
	...props
}: types.ModalBackdropProps) => {
	const base = styles.modalBackdrop;
	const [fade, setFade] = useState({ display: 'hidden', bgOpacity: '' });
	const computed = { ...base, ...props, ...fade, tailwind, name };
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

export const Modal = ({
	id,
	name = 'Modal',
	open,
	onClose,
	tailwind,
	className,
	children,
	...props
}: types.ModalProps) => {
	const base = styles.modal;
	const [fade, setFade] = useState('hidden');
	const computed = { ...base, ...props, tailwind, fade, className, name };
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
					onEnter={() => setFade('opacity-0 scale-90')}
					onEntered={() => setFade('opacity-100 scale-100')}
					onExiting={() => setFade('opacity-0 scale-90')}
					onExited={() => setFade('hidden')}>
					<ModalWrapper open={open} onClose={onClose} tailwind={tailwind?.wrapper}>
						<Div ref={fadeRef} {...computed}>
							{children}
						</Div>
					</ModalWrapper>
				</Fade>,
				ref?.current,
			)
		: null;
};

export const ModalHeader = ({
	id,
	name = 'ModalHeader',
	onClose,
	tailwind,
	className,
	children,
	...props
}: types.ModalHeaderProps) => {
	const base = styles.modalHeader;
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div {...computed}>
			<Span>{children}</Span>
			{onClose && <AccentBtn alt='close' size='icon' icon='xmark' fontSize='text-xl' onClick={onClose} />}
		</Div>
	);
};

export const ModalTitle = ({
	id,
	name = 'ModalTitle',
	size,
	tailwind,
	className,
	children,
	...props
}: types.ModalTitleProps) => {
	const base = { ...styles.modalTitle, size: size || 'h4' };
	const computed = { ...base, ...props, tailwind, className, name };

	return <Font {...computed}>{children}</Font>;
};

export const ModalSubtitle = ({
	id,
	name = 'ModalSubtitle',
	size = 'p',
	tailwind,
	className,
	children,
	...props
}: types.ModalSubtitleProps) => {
	const base = styles.modalSubtitle;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Font {...computed}>{children}</Font>;
};

export const ModalBody = ({
	id,
	name = 'ModalBody',
	size,
	tailwind,
	className,
	children,
	...props
}: types.ModalBodyProps) => {
	const base = { ...styles.modalBody, size: computeBodySize(size) };
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const ModalFooter = ({
	id,
	name = 'ModalFooter',
	tailwind,
	className,
	children,
	...props
}: types.ModalFooterProps) => {
	const base = styles.modalFooter;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs
// https://headlessui.dev/react/dialog
// https://tailwindui.com/interface/application-ui/overlays/modals
