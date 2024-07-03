import { HtmlType } from 'types';

export type iToastWrapper = HtmlType;

export type iToast = HtmlType & {
	show?: boolean;
	setShow?: (v: boolean) => void;
	removeToast?: () => void;
};

export type iToastHeader = HtmlType & {
	removeToast?: () => void;
};

export type iToastIcon = HtmlType & {
	icon?: string;
};

export type iToastTitle = HtmlType;

export type iToastBody = HtmlType;

export type iToastText = HtmlType;
