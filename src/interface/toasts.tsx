import { useRef, useState } from 'react';

import { Fade } from 'components/fade-wrapper';
import { AccentBtn } from 'interface/buttons';
import { H6, P } from 'interface/fonts';
import { Div, Span } from 'interface/html';
import { FadIcon } from 'interface/icons';
import {
	iToast,
	iToastBody,
	iToastHeader,
	iToastIcon,
	iToastText,
	iToastTitle,
	iToastWrapper,
} from 'interface/toasts.types';

export const ToastWrapper = ({ id, name = 'ToastWrapper', className, children, ...tailwind }: iToastWrapper) => {
	const base = {
		inset: 'bottom-0 right-0 left-0',
		position: 'fixed',
		spacing: 'mx-auto',
		width: 'w-[400px] max-w-[90%]',
		zIndex: 'z-40',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const Toast = ({ id, name = 'Toast', show, setShow, onRemove, className, children, ...tailwind }: iToast) => {
	const base = {
		bgColor: 'bg-white dark:bg-gray-800',
		borderRadius: 'rounded-md',
		color: 'text-gray-700 dark:text-white',
		display: 'block',
		overflow: 'overflow-hidden',
		shadow: 'shadow-lg',
		spacing: 'mb-4',
		transition: 'transition',
		tranform: 'transform',
		width: 'w-full',
	};
	const [fade, setFade] = useState({ opacity: 'opacity-0', translate: 'translate-y-12' });
	const props = { ...base, ...tailwind, ...fade, className };
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
			<Div ref={ref} {...props}>
				{children}
			</Div>
		</Fade>
	);
};

export const ToastHeader = ({ id, name = 'ToastHeader', onRemove, className, children, ...tailwind }: iToastHeader) => {
	const base = { display: 'flex-between', spacing: 'p-2' };
	const props = { ...base, ...tailwind, className, name };

	return (
		<Div {...props}>
			<Span display='flex-start' space='space-x-2'>
				{children}
			</Span>
			<AccentBtn alt='close' icon='xmark' color='text-gray-600 dark:text-gray-100' size='xs' onClick={onRemove} />
		</Div>
	);
};

export const ToastIcon = ({ id, name = 'ToastIcon', icon = 'question-circle', className, ...tailwind }: iToastIcon) => {
	const base = { color: 'text-gray-700 dark:text-gray-300', borderRadius: 'rounded-md', spacing: 'px-2 py-1' };
	const props = { ...base, ...tailwind, className, name };

	return (
		<Div {...props}>
			<FadIcon icon={icon} />
		</Div>
	);
};

export const ToastTitle = ({ id, name = 'ToastTitle', className, children, ...tailwind }: iToastTitle) => {
	const base = {
		color: 'text-gray-800 dark:text-gray-200',
		fontWeight: 'font-semibold',
		fontSize: 'text-sm',
		tracking: 'tracking-wide',
	};
	const props = { ...base, ...tailwind, className, name };

	return <H6 {...props}>{children}</H6>;
};

export const ToastBody = ({ id, name = 'ToastBody', className, children, ...tailwind }: iToastBody) => {
	const base = { spacing: 'px-4 pt-2 pb-4' };
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const ToastText = ({ id, name = 'ToastText', className, children, ...tailwind }: iToastText) => {
	const base = { color: 'text-gray-700 dark:text-gray-300', fontSize: 'text-sm' };
	const props = { ...base, ...tailwind, className, name };

	return <P {...props}>{children}</P>;
};

// Docs
// https://tailwindui.com/interface/application-ui/overlays/notifications
