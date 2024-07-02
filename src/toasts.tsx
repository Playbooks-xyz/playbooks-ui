import { useEffect, useState } from 'react';

import { Fade } from 'components/animation-wrapper';
import { AccentBtn } from 'buttons';
import { H6, P } from 'fonts';
import { Div, Span } from 'html';
import { FadIcon } from 'icons';
import {
	iToast,
	iToastBody,
	iToastHeader,
	iToastIcon,
	iToastText,
	iToastTitle,
	iToastWrapper,
} from 'types/toasts.types';
import { timeout } from 'utils/helpers';

export const ToastWrapper = ({ id, name = 'ToastWrapper', className, children, ...tailwind }: iToastWrapper) => {
	const base = {
		position: 'fixed',
		placement: 'bottom-8 right-8',
		width: 'w-[400px] max-w-full',
		zIndex: 'z-40',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const Toast = ({ id, name = 'Toast', show, setShow, onRemove, className, children, ...tailwind }: iToast) => {
	const base = {
		bgColor: 'bg-white dark:bg-gray-800',
		borderRadius: 'rounded-md',
		color: 'gray-700 dark:white',
		display: 'block',
		overflow: 'overflow-hidden',
		shadow: 'shadow-lg',
		spacing: 'mb-4',
		transition: 'transition',
		tranform: 'transform',
		width: 'w-full',
	};
	const [fade, setFade] = useState({ opacity: 'opacity-0', translate: 'translate-x-12' });
	const props = { ...base, ...tailwind, ...fade, className };

	// Hooks
	useEffect(() => {
		timeout(3000)?.then(() => setShow(false));
	}, []);

	// Render
	return (
		<Fade
			show={show}
			timeout={{ enter: 0, exit: 200 }}
			onEntering={() => setFade({ opacity: 'opacity-0', translate: 'translate-x-12' })}
			onEntered={() => setFade({ opacity: 'opacity-100', translate: 'translate-x-0' })}
			onExit={() => setFade({ opacity: 'opacity-100', translate: 'translate-x-0' })}
			onExiting={() => setFade({ opacity: 'opacity-0', translate: 'translate-x-12' })}
			onExited={onRemove}>
			<Div {...props}>{children}</Div>
		</Fade>
	);
};

export const ToastHeader = ({ id, name = 'ToastHeader', onRemove, className, children, ...tailwind }: iToastHeader) => {
	const base = { bgColor: '', display: 'flex-between', spacing: 'p-2' };
	const props = { ...base, ...tailwind, className, name };

	return (
		<Div {...props}>
			<Span display='flex-start space-x-4'>{children}</Span>
			<AccentBtn icon='xmark' color='gray-600 dark:gray-100' size='xs' onClick={onRemove} />
		</Div>
	);
};

export const ToastIcon = ({ id, name = 'ToastIcon', icon = 'question-circle', className, ...tailwind }: iToastIcon) => {
	const base = { color: 'gray-700 dark:gray-300', borderRadius: 'rounded-md', spacing: 'px-2 py-1' };
	const props = { ...base, ...tailwind, className, name };

	return (
		<Div {...props}>
			<FadIcon icon={icon} />
		</Div>
	);
};

export const ToastTitle = ({ id, name = 'ToastTitle', className, children, ...tailwind }: iToastTitle) => {
	const base = {
		color: 'gray-800 dark:gray-200',
		fontWeight: 'font-semibold',
		fontSize: 'text-sm',
		tracking: 'tracking-wide',
	};
	const props = { ...base, ...tailwind, className, name };

	return <H6 {...props}>{children}</H6>;
};

export const ToastBody = ({ id, name = 'ToastBody', className, children, ...tailwind }: iToastBody) => {
	const base = { spacing: 'p-4' };
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const ToastText = ({ id, name = 'ToastText', className, children, ...tailwind }: iToastText) => {
	const base = { color: 'gray-700 dark:gray-300', fontSize: 'text-sm' };
	const props = { ...base, ...tailwind, className, name };

	return <P {...props}>{children}</P>;
};

// Docs
// https://tailwindui.com/interface/application-ui/overlays/notifications
