import { Fragment } from 'react';
import NLink from 'next/link';

import * as HTML from '@ehubbell/html';
import { Img, Span } from 'interface/html';
import { Icon } from 'interface/icons';
import { Oval } from 'interface/spinners';
import * as styles from 'styles/link-styles';
import * as types from 'types/link-types';
import { classBuilder, computeBtnSize } from 'utils';

export const Link = ({ variant = 'primary', tailwind, ...props }) => {
	switch (variant) {
		case 'primary':
			return <PrimaryLink tailwind={tailwind} {...props} />;

		case 'accent':
			return <AccentLink tailwind={tailwind} {...props} />;

		case 'border':
			return <BorderLink tailwind={tailwind} {...props} />;

		case 'tab':
			return <TabLink tailwind={tailwind} {...props} />;

		case 'text':
			return <TextLink tailwind={tailwind} {...props} />;

		default:
			return <Link tailwind={tailwind} {...props} />;
	}
};

export const PrimaryLink = ({
	id,
	name = 'Link',
	size = 'sm',
	alt,
	active,
	tailwind,
	className,
	...props
}: types.LinkProps) => {
	const base = { ...styles.primaryLink(active), size: computeBtnSize(size) };

	return <LinkShared id={id} name={name} tailwind={tailwind} className={className} {...base} {...props} />;
};

export const AccentLink = ({
	id,
	name = 'AccentLink',
	size = 'sm',
	active,
	tailwind,
	className,
	...props
}: types.LinkProps) => {
	const base = { ...styles.accentLink(active), size: computeBtnSize(size) };

	return <LinkShared id={id} name={name} tailwind={tailwind} className={className} {...base} {...props} />;
};

export const BorderLink = ({
	id,
	name = 'BorderLink',
	size = 'sm',
	active,
	tailwind,
	className,
	...props
}: types.LinkProps) => {
	const base = { ...styles.borderLink(active), size: computeBtnSize(size) };

	return <LinkShared id={id} name={name} tailwind={tailwind} className={className} {...base} {...props} />;
};

export const TabLink = ({
	id,
	name = 'TabLink',
	size = 'sm',
	active,
	tailwind,
	className,
	...props
}: types.LinkProps) => {
	const base = { ...styles.tabLink(active), size: computeBtnSize(size) };

	return <LinkShared id={id} name={name} tailwind={tailwind} className={className} {...base} {...props} />;
};

export const TextLink = ({
	id,
	name = 'TextLink',
	size = 'sm',
	active,
	tailwind,
	className,
	...props
}: types.LinkProps) => {
	const base = { ...styles.textLink(active), size: computeBtnSize(size) };

	return <LinkShared id={id} name={name} tailwind={tailwind} className={className} {...base} {...props} />;
};

export const LinkShared = ({
	id,
	name,
	alt,
	href,
	target,
	disabled,
	prevIcon,
	prevImg,
	icon,
	img,
	nextIcon,
	nextImg,
	taskRunning,
	tailwind,
	className,
	children,
	...props
}: types.LinkProps) => {
	return (
		<LinkWrapper
			id={id}
			name={name}
			alt={alt}
			href={href}
			target={target}
			disabled={disabled}
			tailwind={tailwind}
			className={className}
			{...props}>
			{taskRunning ? <Span /> : prevIcon && <Icon type='far' icon={prevIcon?.icon || prevIcon} {...prevIcon} />}
			{taskRunning ? (
				<Fragment />
			) : (
				prevImg && <Img src={prevImg?.src || prevImg} borderRadius='rounded-sm' spacing='w-5 h-5' {...prevImg} />
			)}
			<Span space='space-x-4' {...props?.span}>
				{taskRunning ? (
					<Oval />
				) : icon ? (
					<Icon type='far' icon={icon?.icon || icon} {...icon} />
				) : img ? (
					<Img src={img?.src || img} borderRadius='rounded-sm' spacing='w-5 h-5' {...img} />
				) : (
					children
				)}
				<Span className='sr-only'>{alt}</Span>
			</Span>
			{taskRunning ? (
				<Fragment />
			) : (
				nextImg && <Img src={prevImg?.src || prevImg} borderRadius='rounded-sm' spacing='w-5 h-5' {...prevImg} />
			)}
			{taskRunning ? <Span /> : nextIcon && <Icon type='far' icon={nextIcon?.icon || nextIcon} {...nextIcon} />}
		</LinkWrapper>
	);
};

export const LinkWrapper = ({
	id,
	name = 'LinkWrapper',
	alt = '',
	href,
	target,
	disabled,
	tailwind,
	className,
	children,
	...props
}: types.LinkProps) => {
	const base = {
		...styles.linkWrapper,
		cursor: disabled ? 'cursor-not-allowed' : 'cursor-pointer',
	};
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<Fragment>
			{target ? (
				<HTML.A href={href} aria-label={alt} title={alt} name={name} target={target} className={computed}>
					{children}
				</HTML.A>
			) : (
				<NLink aria-label={alt} title={alt} data-name={name} href={href} className={computed}>
					{children}
				</NLink>
			)}
		</Fragment>
	);
};

// Docs:
// https://nextjs.team/docs/api-reference/next/link
