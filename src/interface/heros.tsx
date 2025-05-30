import * as HTML from '@ehubbell/html';
import { Font, P } from 'interface/fonts';
import { Div, Img } from 'interface/html';
import { FadIcon } from 'interface/icons';
import * as styles from 'styles';
import {
	iHero,
	iHeroActions,
	iHeroBg,
	iHeroBody,
	iHeroIcon,
	iHeroImg,
	iHeroPretitle,
	iHeroSubtitle,
	iHeroText,
	iHeroTitle,
} from 'types/hero-types';
import { computeHeroSize, computeThumbnailSize, tailwindClassBuilder } from 'utils';

export const Hero = ({ id, ref, name = 'Hero', size, className, children, style, ...tailwind }: iHero) => {
	const base = {
		...styles.heroBase,
		size: computeHeroSize(size),
	};
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<HTML.Header ref={ref} name={name} className={classes} style={style}>
			{children}
		</HTML.Header>
	);
};

export const HeroBg = ({ id, ref, name = 'HeroBg', className, children, ...tailwind }: iHeroBg) => {
	const base = styles.heroBgBase;
	const props = { ...base, ...tailwind, className, name };

	return (
		<Div ref={ref} {...props}>
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
	className,
	...tailwind
}: iHeroImg) => {
	const base = {
		...styles.heroImgBase,
		size: computeThumbnailSize(size),
	};
	const props = { ...base, ...tailwind, className, name };

	return (
		<Div {...props}>
			<Img src={src} alt={alt} width='w-full' />
		</Div>
	);
};

export const HeroIcon = ({ id, name = 'HeroIcon', size = 'lg', icon = 'code', className, ...tailwind }: iHeroIcon) => {
	const base = {
		...styles.heroIconBase,
		size: computeThumbnailSize(size),
	};
	const props = { ...base, ...tailwind, className, name };

	return (
		<Div {...props}>
			<FadIcon icon={icon} fontSize='text-3xl' />
		</Div>
	);
};

export const HeroBody = ({ id, name = 'HeroBody', className, children, ...tailwind }: iHeroBody) => {
	const base = styles.heroBodyBase;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const HeroPretitle = ({ id, name = 'HeroPretitle', className, children, ...tailwind }: iHeroPretitle) => {
	const base = styles.heroPretitleBase;
	const props = { ...base, ...tailwind, className, name };

	return <P {...props}>{children}</P>;
};

export const HeroTitle = ({ id, name = 'HeroTitle', size, className, children, ...tailwind }: iHeroTitle) => {
	const base = styles.heroTitleBase;
	const props = { ...base, ...tailwind, className, name };

	return (
		<Font size={size || 'h1'} {...props}>
			{children}
		</Font>
	);
};

export const HeroSubtitle = ({
	id,
	name = 'HeroSubtitle',
	size = 'h5',
	className,
	children,
	...tailwind
}: iHeroSubtitle) => {
	const base = styles.heroSubtitleBase;
	const props = { ...base, ...tailwind, className, name };

	return (
		<Font size={size} {...props}>
			{children}
		</Font>
	);
};

export const HeroText = ({ id, name = 'HeroText', className, children, ...tailwind }: iHeroText) => {
	const base = styles.heroTextBase;
	const props = { ...base, ...tailwind, className, name };

	return <P {...props}>{children}</P>;
};

export const HeroActions = ({ id, name = 'HeroActions', className, children, ...tailwind }: iHeroActions) => {
	const base = styles.heroActionsBase;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/marketing/sections/header
