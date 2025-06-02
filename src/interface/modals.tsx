import { useEffect, useRef, useState } from 'react';

import { Fade } from 'components/fade-wrapper';
import { useInterface } from 'contexts';
import { useKeyPress } from 'hooks';
import { AccentBtn } from 'interface/buttons';
import { Font } from 'interface/fonts';
import { Div, Span } from 'interface/html';
import * as theme from 'theme';
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
	const base = theme.modalWrapper();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div {...computed}>
			{children}
			<ModalBackdrop open={open} onClose={onClose} tailwind={tailwind?.backdrop} />
		</Div>
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
	const base = theme.modalBackdrop({ open });
	const computed = { ...base, ...props, tailwind, name };

	return <Div onClick={onClose} {...computed} />;
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
	const [show, setShow] = useState(false);
	const base = theme.modal({ open: show });
	const computed = { ...base, ...props, tailwind, className, name };
	const { ref, createPortal, toggleScroll } = useInterface();
	const nodeRef = useRef(null);

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

	// Methods
	const onEnter = () => setShow(true);
	const onExit = () => setShow(false);

	// Render
	return ref?.current
		? createPortal(
				<Fade ref={nodeRef} show={open} timeout={200} onEnter={onEnter} onExit={onExit}>
					<ModalWrapper open={show} onClose={onClose} tailwind={tailwind?.wrapper}>
						<Div ref={nodeRef} {...computed}>
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
	const base = theme.modalHeader();
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
	size = 'h4',
	tailwind,
	className,
	children,
	...props
}: types.ModalTitleProps) => {
	const base = theme.modalTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
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
	const base = theme.modalSubtitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
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
	const base = theme.modalBody({ size });
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
	const base = theme.modalFooter();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs
// https://headlessui.dev/react/dialog
// https://tailwindui.com/interface/application-ui/overlays/modals
