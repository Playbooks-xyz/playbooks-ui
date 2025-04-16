import { Font, P } from 'interface/fonts';
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
} from 'interface/heros.types';
import { Div, Img } from 'interface/html';
import { FadIcon } from 'interface/icons';
import { borderProps, computeHeroSize, computeThumbnailSize, tailwindClassBuilder } from 'utils';

export const Hero = ({ id, ref, name = 'Hero', size, className, children, ...tailwind }: iHero) => {
	const base = {
		bgColor: 'bg-white dark:bg-gray-900',
		...borderProps,
		display: 'block',
		position: 'relative',
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
};

export const HeroBg = ({ id, ref, name = 'HeroBg', className, children, ...tailwind }: iHeroBg) => {
	const base = {
		inset: 'inset-0',
		position: 'absolute',
		bgColor: 'bg-gray-50 dark:bg-gray-800',
	};
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
		aspect: 'aspect-[1/1]',
		bgColor: 'bg-gray-100 dark:bg-gray-800',
		border: '',
		...borderProps,
		borderRadius: 'rounded-md',
		color: 'text-gray-500',
		display: 'flex-middle',
		flex: 'shrink-0',
		overflow: 'overflow-hidden',
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
		aspect: 'aspect-[1/1]',
		bgColor: 'bg-gray-100 dark:bg-gray-800',
		border: '',
		...borderProps,
		borderRadius: 'rounded-md',
		color: 'text-gray-500',
		display: 'flex-middle',
		flex: 'shrink-0',
		fontSize: 'text-3xl',
		overflow: 'overflow-hidden',
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
	const base = {
		align: 'text-left',
		space: 'space-y-1',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const HeroPretitle = ({ id, name = 'HeroPretitle', className, children, ...tailwind }: iHeroPretitle) => {
	const base = {
		color: 'text-blue-500 dark:text-cyan-500',
		fontFamily: 'font-accent',
		fontSize: 'text-sm',
		fontWeight: 'font-medium',
		textTransform: 'uppercase',
		tracking: 'tracking-widest',
	};
	const props = { ...base, ...tailwind, className, name };

	return <P {...props}>{children}</P>;
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
		color: 'text-gray-500 dark:text-gray-400',
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
		color: 'text-gray-600 dark:text-gray-200',
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
