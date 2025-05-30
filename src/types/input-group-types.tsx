import { HtmlType } from 'types';

export type iInputGroup = HtmlType & {
	active?: boolean;
};

export type iInputAddon = HtmlType & {
	icon?: any;
	html?: string;
	taskRunning?: boolean;
};
