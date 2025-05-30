import { HtmlType } from 'types';

export type iToast = HtmlType & {
	show?: boolean;
	setShow?: (v: boolean) => any;
	onRemove?: () => any;
};

export type iToastWrapper = HtmlType;

export type iToastHeader = HtmlType & {
	onRemove?: () => any;
};

export type iToastIcon = HtmlType & {
	icon?: string;
};

export type iToastTitle = HtmlType;

export type iToastBody = HtmlType;

export type iToastText = HtmlType;
