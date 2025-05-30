import { useRef, useState } from 'react';

import { Fade } from 'components/fade-wrapper';
import { AccentBtn } from 'interface/buttons';
import { H6, P } from 'interface/fonts';
import { Div, Span } from 'interface/html';
import { FadIcon } from 'interface/icons';
import * as styles from 'styles/toast-styles';

export const ToastWrapper = ({ id, name = 'ToastWrapper', className, children, ...tailwind }: types.iToastWrapper) => {
	const base = styles.toastWrapper;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const Toast = ({
	id,
	name = 'Toast',
	show,
	setShow,
	onRemove,
	className,
	children,
	...tailwind
}: types.iToast) => {
	const base = styles.toast;
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

export const ToastHeader = ({
	id,
	name = 'ToastHeader',
	onRemove,
	className,
	children,
	...tailwind
}: types.iToastHeader) => {
	const base = styles.toastHeader;
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

export const ToastIcon = ({
	id,
	name = 'ToastIcon',
	icon = 'question-circle',
	className,
	...tailwind
}: types.iToastIcon) => {
	const base = styles.toastIcon;
	const props = { ...base, ...tailwind, className, name };

	return (
		<Div {...props}>
			<FadIcon icon={icon} />
		</Div>
	);
};

export const ToastTitle = ({ id, name = 'ToastTitle', className, children, ...tailwind }: types.iToastTitle) => {
	const base = styles.toastTitle;
	const props = { ...base, ...tailwind, className, name };

	return <H6 {...props}>{children}</H6>;
};

export const ToastBody = ({ id, name = 'ToastBody', className, children, ...tailwind }: types.iToastBody) => {
	const base = styles.toastBody;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const ToastText = ({ id, name = 'ToastText', className, children, ...tailwind }: types.iToastText) => {
	const base = styles.toastText;
	const props = { ...base, ...tailwind, className, name };

	return <P {...props}>{children}</P>;
};

// Docs
// https://tailwindui.com/interface/application-ui/overlays/notifications
