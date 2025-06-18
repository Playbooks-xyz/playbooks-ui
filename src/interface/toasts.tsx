import { useRef, useState } from 'react';

import { Fade } from 'components';
import { useInterface } from 'contexts';
import { AccentBtn } from 'interface/buttons';
import { H6, P } from 'interface/fonts';
import { Div, Span } from 'interface/html';
import { FadIcon } from 'interface/icons';
import * as types from 'types/toast-types';

export const ToastWrapper = ({
	name = 'ToastWrapper',
	tailwind,
	className,
	children,
	...props
}: types.ToastWrapperProps) => {
	const { theme } = useInterface();
	const base = theme.toastWrapper();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const Toast = ({
	name = 'Toast',
	open,
	setOpen,
	direction = 'bottom',
	onRemove,
	tailwind,
	className,
	children,
	...props
}: types.ToastProps) => {
	const { theme } = useInterface();
	const [show, setShow] = useState(false);
	const base = theme.toast({ open: show, direction });
	const computed = { ...base, ...props, tailwind, className };
	const ref = useRef(null);

	// Methods
	const onEnter = () => setShow(true);
	const onExit = () => setShow(false);

	// Render
	return (
		<Fade ref={ref} show={open} timeout={200} onEnter={onEnter} onExit={onExit} onExited={onRemove}>
			<Div ref={ref} {...computed}>
				{children}
			</Div>
		</Fade>
	);
};

export const ToastHeader = ({
	name = 'ToastHeader',
	onRemove,
	tailwind,
	className,
	children,
	...props
}: types.ToastHeaderProps) => {
	const { theme } = useInterface();
	const base = theme.toastHeader();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div {...computed}>
			<Span display='flex-start' space='space-x-2'>
				{children}
			</Span>
			<AccentBtn size='xs' icon='xmark' alt='close' color='text-gray-600 dark:text-gray-100' onClick={onRemove} />
		</Div>
	);
};

export const ToastIcon = ({
	name = 'ToastIcon',
	icon = 'question-circle',
	tailwind,
	className,
	...props
}: types.ToastIconProps) => {
	const { theme } = useInterface();
	const base = theme.toastIcon();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div {...computed}>
			<FadIcon icon={icon} />
		</Div>
	);
};

export const ToastTitle = ({ name = 'ToastTitle', tailwind, className, children, ...props }: types.ToastTitleProps) => {
	const { theme } = useInterface();
	const base = theme.toastTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return <H6 {...computed}>{children}</H6>;
};

export const ToastBody = ({ name = 'ToastBody', tailwind, className, children, ...props }: types.ToastBodyProps) => {
	const { theme } = useInterface();
	const base = theme.toastBody();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const ToastText = ({ name = 'ToastText', tailwind, className, children, ...props }: types.ToastTextProps) => {
	const { theme } = useInterface();
	const base = theme.toastText();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

// Docs
// https://tailwindui.com/interface/application-ui/overlays/notifications
