import { HtmlProps } from 'types';

export type iHero = HtmlProps & {
	ref?: any;
};

export type iHeroBg = HtmlProps;

export type iHeroImg = HtmlProps & {
	src: string;
	alt: string;
};

export type iHeroIcon = HtmlProps & {
	icon: string;
};

export type iHeroBody = HtmlProps;

export type iHeroPretitle = HtmlProps;

export type iHeroTitle = HtmlProps;

export type iHeroSubtitle = HtmlProps;

export type iHeroText = HtmlProps;

export type iHeroActions = HtmlProps;
