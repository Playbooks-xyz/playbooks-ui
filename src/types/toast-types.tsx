import { HtmlProps } from 'types';

export type iToast = HtmlProps & {
	show?: boolean;
	setShow?: (v: boolean) => any;
	onRemove?: () => any;
};

export type iToastWrapper = HtmlProps;

export type iToastHeader = HtmlProps & {
	onRemove?: () => any;
};

export type iToastIcon = HtmlProps & {
	icon?: string;
};

export type iToastTitle = HtmlProps;

export type iToastBody = HtmlProps;

export type iToastText = HtmlProps;
