import { Fragment } from 'react';
import NLink from 'next/link';

import { Span } from 'interface/html';
import { Icon } from 'interface/icons';
import { iLink } from 'interface/links.types';
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
} from 'utils';

export const Link = ({ id, name = 'Link', size = 'sm', alt, active, className, ...tailwind }: iLink) => {
	const base = { ...btnProps(active), size: computeBtnSize(size) };

	return <LinkShared id={id} name={name} className={className} {...base} {...tailwind} />;
};

export const AccentLink = ({ id, name = 'AccentLink', size = 'sm', active, className, ...tailwind }: iLink) => {
	const base = { ...btnAccentProps(active), size: computeBtnSize(size) };

	return <LinkShared id={id} name={name} className={className} {...base} {...tailwind} />;
};

export const BorderLink = ({ id, name = 'BorderLink', size = 'sm', active, className, ...tailwind }: iLink) => {
	const base = { ...btnBorderProps(active), size: computeBtnSize(size) };

	return <LinkShared id={id} name={name} className={className} {...base} {...tailwind} />;
};

export const TabLink = ({ id, name = 'TabLink', size = 'sm', active, className, ...tailwind }: iLink) => {
	const base = { ...btnTabProps(active), size: computeBtnSize(size) };

	return <LinkShared id={id} name={name} className={className} {...base} {...tailwind} />;
};

export const TextLink = ({ id, name = 'TextLink', size = 'sm', active, className, ...tailwind }: iLink) => {
	const base = { ...btnTextProps(active), size: computeBtnSize(size) };

	return <LinkShared id={id} name={name} className={className} {...base} {...tailwind} />;
};

export const LinkShared = ({
	id,
	name,
	href,
	target,
	disabled,
	prevIcon,
	icon,
	nextIcon,
	taskRunning,
	className,
	children,
	...tailwind
}: iLink) => {
	return (
		<LinkWrapper
			id={id}
			name={name}
			href={href}
			target={target}
			disabled={disabled}
			className={className}
			{...tailwind}>
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
		</LinkWrapper>
	);
};

export const LinkWrapper = ({
	id,
	name = 'LinkWrapper',
	alt,
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
				<a href={href} aria-label={alt || name} data-name={name} target={target} className={classes}>
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
