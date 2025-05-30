import { HtmlType } from 'types';

export type iAlert = HtmlType & {
	show?: boolean;
};

export type iAlertIcon = HtmlType & {
	icon: string;
};

export type iAlertBody = HtmlType;

export type iAlertTitle = HtmlType;

export type iAlertText = HtmlType;

export type iAlertActions = HtmlType;
