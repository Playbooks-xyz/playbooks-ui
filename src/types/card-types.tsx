import { HtmlProps } from 'types';

export type iCard = HtmlProps;

export type iCardHeader = HtmlProps;

export type iCardIcon = HtmlProps & {
	type?: string;
	icon: string;
	wrapper?: any;
};

export type iCardImg = HtmlProps & {
	alt: string;
	src: string;
};

export type iCardBody = HtmlProps;

export type iCardPretitle = HtmlProps;

export type iCardTitle = HtmlProps;

export type iCardSubtitle = HtmlProps;

export type iCardText = HtmlProps;

export type iCardFooter = HtmlProps;

export type iCardActions = HtmlProps;
