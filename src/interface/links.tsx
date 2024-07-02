import { Fragment } from 'react';
import NLink from 'next/link';

import { Span } from 'interface/html';
import { Icon } from 'interface/icons';
import { iLink } from 'types/links.types';
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

export const Link = ({
	id,
	name = 'Link',
	active,
	disabled,
	href = '#',
	prevIcon,
	icon,
	nextIcon,
	target,
	taskRunning,
	size = 'sm',
	className,
	children,
	...tailwind
}: iLink) => {
	const base = { ...btnProps(active), size: computeBtnSize(size) };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });
	const props = { id, href, target, disabled, prevIcon, icon, nextIcon, taskRunning, classes, children, ...tailwind };

	return <LinkSharedInternals {...props} />;
};

export const AccentLink = ({
	id,
	name = 'AccentLink',
	active,
	disabled,
	href = '#',
	prevIcon,
	icon,
	nextIcon,
	target,
	taskRunning,
	size = 'sm',
	className,
	children,
	...tailwind
}: iLink) => {
	const base = { ...btnAccentProps(active), size: computeBtnSize(size) };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });
	const props = { id, href, target, disabled, prevIcon, icon, nextIcon, taskRunning, classes, children, ...tailwind };

	return <LinkSharedInternals {...props} />;
};

export const BorderLink = ({
	id,
	name = 'BorderLink',
	active,
	disabled,
	href = '#',
	prevIcon,
	icon,
	nextIcon,
	target,
	taskRunning,
	size = 'sm',
	className,
	children,
	...tailwind
}: iLink) => {
	const base = { ...btnBorderProps(active), disabled, size: computeBtnSize(size) };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });
	const props = {
		id,
		href,
		target,
		disabled,
		prevIcon,
		icon,
		nextIcon,
		taskRunning: taskRunning ? { color: 'gray-600 dark:gray-300' } : false,
		classes,
		children,
		...tailwind,
	};

	return <LinkSharedInternals {...props} />;
};

export const TabLink = ({
	id,
	name = 'TabLink',
	active,
	disabled,
	href = '#',
	prevIcon,
	icon,
	nextIcon,
	target,
	taskRunning,
	size = 'sm',
	className,
	children,
	...tailwind
}: iLink) => {
	const base = { ...btnTabProps(active), size: computeBtnSize(size) };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });
	const props = { id, href, target, disabled, prevIcon, icon, nextIcon, taskRunning, classes, children, ...tailwind };

	return <LinkSharedInternals {...props} />;
};

export const TextLink = ({
	id,
	name = 'TextLink',
	active,
	disabled,
	href = '#',
	prevIcon,
	icon,
	nextIcon,
	target,
	taskRunning,
	size = 'sm',
	className,
	children,
	...tailwind
}: iLink) => {
	const base = { ...btnTextProps(active), size: computeBtnSize(size) };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });
	const props = { id, href, target, disabled, prevIcon, icon, nextIcon, taskRunning, classes, children, ...tailwind };

	return <LinkSharedInternals {...props} />;
};

export const LinkSharedInternals = ({
	id,
	href,
	target,
	disabled,
	prevIcon,
	icon,
	nextIcon,
	taskRunning,
	classes,
	children,
	...tailwind
}) => {
	return (
		<LinkWrapper id={id} href={href} target={target} disabled={disabled} className={classes}>
			{taskRunning ? <Fragment /> : prevIcon && <Icon type='far' icon={prevIcon?.icon || prevIcon} {...prevIcon} />}
			{taskRunning ? (
				<Oval {...taskRunning} />
			) : icon ? (
				<Icon type='far' icon={icon?.icon || icon} {...icon} />
			) : (
				<Span space='space-x-4' {...tailwind?.span}>
					{children}
				</Span>
			)}
			{taskRunning ? <Fragment /> : nextIcon && <Icon type='far' icon={nextIcon?.icon || nextIcon} {...nextIcon} />}
		</LinkWrapper>
	);
};

export const LinkWrapper = ({
	id,
	name = 'LinkWrapper',
	href,
	target,
	disabled,
	className,
	children,
	...tailwind
}: iLink) => {
	const base = {
		...interactiveProps(),
		width: 'w-inherit',
		cursor: disabled ? 'cursor-not-allowed' : 'cursor-pointer',
	};
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<Fragment>
			{target ? (
				<a href={href} aria-label={name} data-name={name} target={target} className={classes}>
					{children}
				</a>
			) : (
				<NLink aria-label={name} data-name={name} href={href} className={classes}>
					{children}
				</NLink>
			)}
		</Fragment>
	);
};

// Docs:
// https://nextjs.team/docs/api-reference/next/link
