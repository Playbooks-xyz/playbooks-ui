import { forwardRef } from 'react';

import { Font, H6, P } from 'fonts';
import {
	iHero,
	iHeroActions,
	iHeroBg,
	iHeroBody,
	iHeroPretitle,
	iHeroSubtitle,
	iHeroText,
	iHeroThumbnail,
	iHeroTitle,
} from 'types/heros.types';
import { Div, Img } from 'html';
import { FadIcon } from 'icons';
import { borderProps, computeHeroSize, computeThumbnailSize, tailwindClassBuilder } from 'tailwind';

export const Hero = forwardRef(({ id, name = 'Hero', size, className, children, ...tailwind }: iHero, ref) => {
	const base = {
		position: 'relative',
		bgColor: 'bg-gray-50 dark:bg-gray-900',
		...borderProps,
		display: 'block',
		size: computeHeroSize(size),
		spacing: 'py-8',
		width: 'w-full',
	};
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<header ref={ref} data-name={name} className={classes}>
			{children}
		</header>
	);
});

export const HeroBg = ({ id, name = 'HeroBg', className, children, ...tailwind }: iHeroBg) => {
	const base = {
		inset: 'inset-0',
		position: 'absolute',
		bgColor: 'bg-gray-50 dark:bg-gray-800',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const HeroIcon = ({ id, name = 'HeroIcon', size, icon, className, ...tailwind }: iHeroThumbnail) => {
	const base = {
		bgColor: 'bg-gray-100 dark:bg-gray-800',
		border: '',
		...borderProps,
		borderRadius: 'rounded-lg',
		color: 'gray-500',
		display: 'flex-middle',
		flex: 'shrink-0',
		overflow: 'o-hidden',
		size: computeThumbnailSize(size || 'lg'),
		spacing: 'p-4',
	};
	const props = { ...base, ...tailwind, className, name };

	return (
		<Div {...props}>
			<FadIcon icon={icon || 'code'} fontSize='text-3xl' />
		</Div>
	);
};

export const HeroImg = ({ id, name = 'HeroImg', size = 'lg', icon, src, className, ...tailwind }: iHeroThumbnail) => {
	const base = {
		aspect: 'aspect-[1/1]',
		bgColor: 'bg-gray-100 dark:bg-gray-800',
		border: '',
		...borderProps,
		borderRadius: 'rounded-xl',
		color: 'gray-500',
		display: 'flex-middle',
		flex: 'shrink-0',
		overflow: 'o-hidden',
		size: computeThumbnailSize(size),
	};
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{src ? <Img src={src} width='w-full' /> : <HeroIcon icon={icon} {...props} />}</Div>;
};

export const HeroBody = ({ id, name = 'HeroBody', className, children, ...tailwind }: iHeroBody) => {
	const base = {
		align: 'text-left',
		space: 'space-y-1',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const HeroPretitle = ({ id, name = 'HeroPretitle', className, children, ...tailwind }: iHeroPretitle) => {
	const base = {
		color: 'blue-500 dark:orange-500',
		fontFamily: 'font-accent',
		fontSize: 'text-sm',
		fontWeight: 'font-medium',
		textTransform: 'uppercase',
		tracking: 'tracking-widest',
	};
	const props = { ...base, ...tailwind, className, name };

	return <H6 {...props}>{children}</H6>;
};

export const HeroTitle = ({ id, name = 'HeroTitle', size, className, children, ...tailwind }: iHeroTitle) => {
	const base = {
		display: 'flex-start',
		fontWeight: 'font-extrabold',
		leading: '!leading-tight',
		space: 'space-x-4',
		tracking: 'tracking-wide',
	};
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
	const base = {
		color: 'gray-500 dark:gray-400',
		fontFamily: 'font-secondary',
		fontWeight: 'font-light',
		leading: '!leading-relaxed',
		tracking: 'tracking-normal',
	};
	const props = { ...base, ...tailwind, className, name };

	return (
		<Font size={size} {...props}>
			{children}
		</Font>
	);
};

export const HeroText = ({ id, name = 'HeroText', className, children, ...tailwind }: iHeroText) => {
	const base = {
		color: 'gray-600 dark:gray-200',
		fontFamily: 'font-secondary',
		fontWeight: 'font-light',
		tracking: 'tracking-wide',
	};
	const props = { ...base, ...tailwind, className, name };

	return <P {...props}>{children}</P>;
};

export const HeroActions = ({ id, name = 'HeroActions', className, children, ...tailwind }: iHeroActions) => {
	const base = {
		display: 'lg:flex-end',
		space: 'space-y-4 space-x-0 lg:space-y-0 lg:space-x-4',
		width: 'w-full',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/marketing/sections/header
