import { HtmlType } from 'types';

export type iToast = HtmlType & {
	show?: boolean;
	setShow?: (v: boolean) => void;
	onRemove?: () => void;
};

export type iToastWrapper = HtmlType;

export type iToastHeader = HtmlType & {
	onRemove?: () => void;
};

export type iToastIcon = HtmlType & {
	icon?: string;
};

export type iToastTitle = HtmlType;

export type iToastBody = HtmlType;

export type iToastText = HtmlType;
