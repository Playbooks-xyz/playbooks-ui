import { Fragment } from 'react';

import { iBtn } from 'interface/buttons.types';
import { Span } from 'interface/html';
import { Icon } from 'interface/icons';
import { Oval } from 'interface/spinners';
import {
	btnAccentProps,
	btnBorderProps,
	btnProps,
	btnTabProps,
	btnTextProps,
	computeBtnSize,
	interactiveProps,
	tailwindClassBuilder,
} from 'tailwind';

export const Btn = ({
	id,
	name = 'Btn',
	type,
	active,
	disabled,
	taskRunning,
	onClick,
	icon,
	prevIcon,
	nextIcon,
	size = 'sm',
	className,
	children,
	...tailwind
}: iBtn) => {
	const base = { ...btnProps(active), size: computeBtnSize(size) };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });
	const props = { id, type, disabled, prevIcon, icon, nextIcon, taskRunning, onClick, classes, children, ...tailwind };

	return <BtnSharedInternals {...props} />;
};

export const AccentBtn = ({
	id,
	name = 'AccentBtn',
	type,
	active,
	disabled,
	taskRunning,
	onClick,
	icon,
	prevIcon,
	nextIcon,
	size = 'sm',
	className,
	children,
	...tailwind
}: iBtn) => {
	const base = { ...btnAccentProps(active), size: computeBtnSize(size) };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });
	const props = { id, type, disabled, prevIcon, icon, nextIcon, taskRunning, onClick, classes, children, ...tailwind };

	return <BtnSharedInternals {...props} />;
};

export const BorderBtn = ({
	id,
	name = 'BorderBtn',
	type,
	active,
	disabled,
	taskRunning,
	onClick,
	icon,
	prevIcon,
	nextIcon,
	size = 'sm',
	className,
	children,
	...tailwind
}: iBtn) => {
	const base = { ...btnBorderProps(active), size: computeBtnSize(size) };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });
	const props = {
		id,
		type,
		disabled,
		prevIcon,
		icon,
		nextIcon,
		taskRunning: taskRunning ? { color: 'gray-600 dark:gray-300' } : false,
		onClick,
		classes,
		children,
		...tailwind,
	};

	return <BtnSharedInternals {...props} />;
};

export const TabBtn = ({
	id,
	name = 'TabBtn',
	type,
	active,
	disabled,
	taskRunning,
	onClick,
	icon,
	prevIcon,
	nextIcon,
	size = 'sm',
	className,
	children,
	...tailwind
}: iBtn) => {
	const base = { ...btnTabProps(active), size: computeBtnSize(size) };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });
	const props = { id, type, disabled, prevIcon, icon, nextIcon, taskRunning, onClick, classes, children, ...tailwind };

	return <BtnSharedInternals {...props} />;
};

export const TextBtn = ({
	id,
	name = 'TextBtn',
	type,
	active,
	disabled,
	taskRunning,
	onClick,
	icon,
	prevIcon,
	nextIcon,
	size = 'sm',
	className,
	children,
	...tailwind
}: iBtn) => {
	const base = { ...btnTextProps(active), size: computeBtnSize(size) };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });
	const props = { id, type, disabled, prevIcon, icon, nextIcon, taskRunning, onClick, classes, children, ...tailwind };

	return <BtnSharedInternals {...props} />;
};

export const BtnSharedInternals = ({
	id,
	type,
	disabled,
	prevIcon,
	icon,
	nextIcon,
	taskRunning,
	onClick,
	classes,
	children,
	...tailwind
}) => {
	return (
		<BtnWrapper id={id} type={type} disabled={disabled} taskRunning={taskRunning} onClick={onClick} className={classes}>
			{taskRunning ? <Fragment /> : prevIcon && <Icon type='far' icon={prevIcon?.icon || prevIcon} {...prevIcon} />}
			{taskRunning ? (
				<Oval />
			) : icon ? (
				<Icon type='far' icon={icon?.icon || icon} {...icon} />
			) : (
				<Span space='space-x-4' {...tailwind?.span}>
					{children}
				</Span>
			)}
			{taskRunning ? <Fragment /> : nextIcon && <Icon type='far' icon={nextIcon?.icon || nextIcon} {...nextIcon} />}
		</BtnWrapper>
	);
};

export const BtnWrapper = ({
	id = '',
	name = 'BtnWrapper',
	type = 'button',
	onClick,
	disabled = false,
	taskRunning = false,
	children,
	className,
	...tailwind
}: iBtn) => {
	const base = {
		...interactiveProps(),
		width: 'w-inherit',
		cursor: disabled ? 'cursor-not-allowed' : 'cursor-pointer',
	};
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<button
			type={type}
			aria-label={name}
			data-name={name}
			disabled={disabled || taskRunning}
			onClick={onClick}
			className={classes}>
			{children}
		</button>
	);
};

// Docs
// https://tailwindui.com/interface/application-ui/elements/buttons
