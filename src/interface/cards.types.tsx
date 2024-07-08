import { HtmlType } from 'types';

export type iCard = HtmlType;

export type iCardHeader = HtmlType;

export type iCardIcon = HtmlType & {
	type: string;
	icon: string;
	wrapper: any;
};

export type iCardImg = HtmlType & {
	alt: string;
	src: string;
};

export type iCardBody = HtmlType;

export type iCardPretitle = HtmlType;

export type iCardTitle = HtmlType;

export type iCardSubtitle = HtmlType;

export type iCardText = HtmlType;

export type iCardFooter = HtmlType;

export type iCardActions = HtmlType;
