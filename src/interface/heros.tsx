import * as HTML from '@ehubbell/html';
import { Font, P } from 'interface/fonts';
import { Div, Img } from 'interface/html';
import { FadIcon } from 'interface/icons';
import * as styles from 'styles/hero-styles';
import * as types from 'types/hero-types';
import { computeHeroSize, computeThumbnailSize, tailwindClassBuilder } from 'utils';

export const Hero = ({
	id,
	ref,
	name = 'Hero',
	size,
	tailwind,
	className,
	children,
	style,
	...props
}: types.HeroProps) => {
	const base = {
		...styles.hero,
		size: computeHeroSize(size),
	};
	const computed = tailwindClassBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.Header ref={ref} name={name} className={computed} style={style}>
			{children}
		</HTML.Header>
	);
};

export const HeroBg = ({ id, ref, name = 'HeroBg', tailwind, className, children, ...props }: types.HeroBgProps) => {
	const base = styles.heroBg;
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div ref={ref} {...computed}>
			{children}
		</Div>
	);
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
	const base = {
		...styles.heroImg,
		size: computeThumbnailSize(size),
	};
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
	const base = {
		...styles.heroIcon,
		size: computeThumbnailSize(size),
	};
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div {...computed}>
			<FadIcon icon={icon} fontSize='text-3xl' />
		</Div>
	);
};

export const HeroBody = ({ id, name = 'HeroBody', tailwind, className, children, ...props }: types.HeroBodyProps) => {
	const base = styles.heroBody;
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
	const base = styles.heroPretitle;
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const HeroTitle = ({
	id,
	name = 'HeroTitle',
	size,
	tailwind,
	className,
	children,
	...props
}: types.HeroTitleProps) => {
	const base = styles.heroTitle;
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size || 'h1'} {...computed}>
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
	const base = styles.heroSubtitle;
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const HeroText = ({ id, name = 'HeroText', tailwind, className, children, ...props }: types.HeroTextProps) => {
	const base = styles.heroText;
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
	const base = styles.heroActions;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/marketing/sections/header
