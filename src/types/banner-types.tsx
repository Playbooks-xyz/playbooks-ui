import { HtmlProps } from 'types';

export type iBanner = HtmlProps;

export type iBannerIcon = HtmlProps & {
	type?: string;
	icon: string;
};

export type iBannerBody = HtmlProps;

export type iBannerTitle = HtmlProps;

export type iBannerText = HtmlProps;

export type iBannerActions = HtmlProps & {
	onClick: () => any;
	onDismiss: () => any;
};
