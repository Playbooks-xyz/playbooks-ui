import { HtmlProps } from 'types';

export type iAlert = HtmlProps & {
	show?: boolean;
};

export type iAlertIcon = HtmlProps & {
	icon: string;
};

export type iAlertBody = HtmlProps;

export type iAlertTitle = HtmlProps;

export type iAlertText = HtmlProps;

export type iAlertActions = HtmlProps;
