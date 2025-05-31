import { useRef, useState } from 'react';

import * as theme from '@playbooks/theme';
import { Fade } from 'components/fade-wrapper';
import { AccentBtn } from 'interface/buttons';
import { H6, P } from 'interface/fonts';
import { Div, Span } from 'interface/html';
import { FadIcon } from 'interface/icons';
import * as types from 'types/toast-types';

export const ToastWrapper = ({
	id,
	name = 'ToastWrapper',
	tailwind,
	className,
	children,
	...props
}: types.ToastWrapperProps) => {
	const base = theme.toastWrapper();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const Toast = ({
	id,
	name = 'Toast',
	show,
	setShow,
	onRemove,
	tailwind,
	className,
	children,
	...props
}: types.ToastProps) => {
	const base = theme.toast();
	const [fade, setFade] = useState({ opacity: 'opacity-0', translate: 'translate-y-12' });
	const computed = { ...base, ...props, tailwind, ...fade, className };
	const ref = useRef(null);

	// Render
	return (
		<Fade
			ref={ref}
			show={show}
			timeout={{ enter: 0, exit: 200 }}
			onEntering={() => setFade({ opacity: 'opacity-0', translate: 'translate-y-12' })}
			onEntered={() => setFade({ opacity: 'opacity-100', translate: 'translate-y-0' })}
			onExit={() => setFade({ opacity: 'opacity-100', translate: 'translate-y-0' })}
			onExiting={() => setFade({ opacity: 'opacity-0', translate: 'translate-y-12' })}
			onExited={onRemove}>
			<Div ref={ref} {...computed}>
				{children}
			</Div>
		</Fade>
	);
};

export const ToastHeader = ({
	id,
	name = 'ToastHeader',
	onRemove,
	tailwind,
	className,
	children,
	...props
}: types.ToastHeaderProps) => {
	const base = theme.toastHeader();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div {...computed}>
			<Span display='flex-start' space='space-x-2'>
				{children}
			</Span>
			<AccentBtn alt='close' icon='xmark' color='text-gray-600 dark:text-gray-100' size='xs' onClick={onRemove} />
		</Div>
	);
};

export const ToastIcon = ({
	id,
	name = 'ToastIcon',
	icon = 'question-circle',
	tailwind,
	className,
	...props
}: types.ToastIconProps) => {
	const base = theme.toastIcon();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div {...computed}>
			<FadIcon icon={icon} />
		</Div>
	);
};

export const ToastTitle = ({
	id,
	name = 'ToastTitle',
	tailwind,
	className,
	children,
	...props
}: types.ToastTitleProps) => {
	const base = theme.toastTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return <H6 {...computed}>{children}</H6>;
};

export const ToastBody = ({
	id,
	name = 'ToastBody',
	tailwind,
	className,
	children,
	...props
}: types.ToastBodyProps) => {
	const base = theme.toastBody();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const ToastText = ({
	id,
	name = 'ToastText',
	tailwind,
	className,
	children,
	...props
}: types.ToastTextProps) => {
	const base = theme.toastText();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

// Docs
// https://tailwindui.com/interface/application-ui/overlays/notifications
