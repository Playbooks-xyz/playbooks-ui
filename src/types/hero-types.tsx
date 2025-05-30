import { HtmlType } from 'types';

export type iHero = HtmlType & {
	ref?: any;
};

export type iHeroBg = HtmlType;

export type iHeroImg = HtmlType & {
	src: string;
	alt: string;
};

export type iHeroIcon = HtmlType & {
	icon: string;
};

export type iHeroBody = HtmlType;

export type iHeroPretitle = HtmlType;

export type iHeroTitle = HtmlType;

export type iHeroSubtitle = HtmlType;

export type iHeroText = HtmlType;

export type iHeroActions = HtmlType;
