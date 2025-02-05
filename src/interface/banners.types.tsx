import { HtmlType } from 'types';

export type iBanner = HtmlType;

export type iBannerIcon = HtmlType & {
	type?: string;
	icon: string;
};

export type iBannerBody = HtmlType;

export type iBannerTitle = HtmlType;

export type iBannerText = HtmlType;

export type iBannerActions = HtmlType & {
	onClick: ()=> any;
	onDismiss: ()=> any;
};
