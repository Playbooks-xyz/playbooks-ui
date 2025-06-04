import { Fragment } from 'react';
import NLink from 'next/link';

import * as HTML from '@ehubbell/html';
import { useInterface } from 'contexts';
import { Img, Span } from 'interface/html';
import { Icon } from 'interface/icons';
import { Oval } from 'interface/spinners';
import * as types from 'types/link-types';
import { computeProps, computeTailwind } from 'utils';

export const Link = props => {
	switch (props?.variant) {
		case 'primary':
			return <PrimaryLink {...props} />;

		case 'accent':
			return <AccentLink {...props} />;

		case 'border':
			return <BorderLink {...props} />;

		case 'tab':
			return <TabLink {...props} />;

		case 'text':
			return <TextLink {...props} />;

		default:
			return <LinkWrapper {...props} />;
	}
};

export const PrimaryLink = ({ id, name = 'Link', size = 'sm', alt, active, className, ...props }: types.LinkProps) => {
	const { theme } = useInterface();
	const base = theme.primaryLink({ active, size });

	return <LinkShared id={id} name={name} className={className} {...base} {...props} />;
};

export const AccentLink = ({ id, name = 'AccentLink', size = 'sm', active, className, ...props }: types.LinkProps) => {
	const { theme } = useInterface();
	const base = theme.accentLink({ active, size });

	return <LinkShared id={id} name={name} className={className} {...base} {...props} />;
};

export const BorderLink = ({ id, name = 'BorderLink', size = 'sm', active, className, ...props }: types.LinkProps) => {
	const { theme } = useInterface();
	const base = theme.borderLink({ active, size });

	return <LinkShared id={id} name={name} className={className} {...base} {...props} />;
};

export const TabLink = ({ id, name = 'TabLink', size = 'sm', active, className, ...props }: types.LinkProps) => {
	const { theme } = useInterface();
	const base = theme.tabLink({ active, size });

	return <LinkShared id={id} name={name} className={className} {...base} {...props} />;
};

export const TextLink = ({ id, name = 'TextLink', size = 'sm', active, className, ...props }: types.LinkProps) => {
	const { theme } = useInterface();
	const base = theme.textLink({ active, size });

	return <LinkShared id={id} name={name} className={className} {...base} {...props} />;
};

export const LinkShared = ({
	alt,
	prevIcon,
	prevImg,
	icon,
	img,
	nextIcon,
	nextImg,
	taskRunning,
	tailwind,
	children,
	...props
}: types.LinkProps) => {
	return (
		<LinkWrapper alt={alt} tailwind={tailwind} {...props}>
			{taskRunning ? <Span /> : prevIcon && <Icon type='far' icon={prevIcon?.icon || prevIcon} {...prevIcon} />}
			{taskRunning ? (
				<Fragment />
			) : (
				prevImg && <Img src={prevImg?.src || prevImg} borderRadius='rounded-sm' spacing='w-5 h-5' {...prevImg} />
			)}
			<Span display='inline-flex' space='space-x-4' {...tailwind?.span}>
				{taskRunning ? (
					<Oval />
				) : icon ? (
					<Icon type='far' icon={icon?.icon || icon} {...icon} />
				) : img ? (
					<Img src={img?.src || img} borderRadius='rounded-sm' spacing='w-5 h-5' {...img} />
				) : (
					children
				)}
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
	const { theme } = useInterface();
	const base = theme.linkWrapper({ disabled });
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });
	const filtered = computeProps(props);

	return (
		<Fragment>
			{target ? (
				<HTML.A aria-label={alt} title={alt} name={name} href={href} target={target} className={classes} {...filtered}>
					{children}
				</HTML.A>
			) : (
				<NLink aria-label={alt} title={alt} data-name={name} href={href} className={classes} {...filtered}>
					{children}
				</NLink>
			)}
		</Fragment>
	);
};

// Docs:
// https://nextjs.team/docs/api-reference/next/link
