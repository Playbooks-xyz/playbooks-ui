import * as HTML from '@ehubbell/html';
import * as theme from '@playbooks/theme';
import { Font, P, Small } from 'interface/fonts';
import { Div, Img } from 'interface/html';
import { FadIcon } from 'interface/icons';
import * as types from 'types/hero-types';
import { classBuilder } from 'utils';

export const Hero = ({ name = 'Hero', size = '', tailwind, className, children, ...props }) => {
	const base = theme.hero({ size });
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.Header name={name} className={computed}>
			{children}
		</HTML.Header>
	);
};

export const HeroBg = ({ id, name = 'HeroBg', ref, tailwind, className, children, ...props }: types.HeroBgProps) => {
	const base = theme.heroBg();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const HeroImg = ({
	id,
	name = 'HeroImg',
	alt = 'thumbnail',
	size = 'lg',
	src,
	tailwind,
	className,
	...props
}: types.HeroImgProps) => {
	const base = theme.heroImg({ size });
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div {...computed}>
			<Img src={src} alt={alt} width='w-full' />
		</Div>
	);
};

export const HeroIcon = ({
	id,
	name = 'HeroIcon',
	size = 'lg',
	icon = 'code',
	tailwind,
	className,
	...props
}: types.HeroIconProps) => {
	const base = theme.heroIcon({ size });
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div {...computed}>
			<FadIcon icon={icon} fontSize='text-3xl' />
		</Div>
	);
};

export const HeroBody = ({ id, name = 'HeroBody', tailwind, className, children, ...props }: types.HeroBodyProps) => {
	const base = theme.heroBody();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const HeroPretitle = ({
	id,
	name = 'HeroPretitle',
	tailwind,
	className,
	children,
	...props
}: types.HeroPretitleProps) => {
	const base = theme.heroPretitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Small {...computed}>{children}</Small>;
};

export const HeroTitle = ({
	id,
	name = 'HeroTitle',
	size = 'h1',
	tailwind,
	className,
	children,
	...props
}: types.HeroTitleProps) => {
	const base = theme.heroTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const HeroSubtitle = ({
	id,
	name = 'HeroSubtitle',
	size = 'h5',
	tailwind,
	className,
	children,
	...props
}: types.HeroSubtitleProps) => {
	const base = theme.heroSubtitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const HeroText = ({ id, name = 'HeroText', tailwind, className, children, ...props }: types.HeroTextProps) => {
	const base = theme.heroText();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const HeroActions = ({
	id,
	name = 'HeroActions',
	tailwind,
	className,
	children,
	...props
}: types.HeroActionsProps) => {
	const base = theme.heroActions();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const HeroContainer = ({ tailwind, children, ...props }) => {
	const base = {
		display: 'flex flex-col',
		position: 'relative',
		width: 'w-full',
		maxWidth: 'max-w-screen-xl',
		margin: 'mx-auto',
		padding: 'px-4 py-24',
		space: 'space-y-12',
		md: {
			padding: 'md:px-6 md:py-32',
		},
		lg: {
			display: 'lg:flex-row',
			space: 'lg:space-y-0 lg:space-x-12',
			padding: 'lg:py-40',
		},
	};
	const computed = { ...base, ...props, tailwind };

	return <Div {...computed}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/marketing/sections/heroes
