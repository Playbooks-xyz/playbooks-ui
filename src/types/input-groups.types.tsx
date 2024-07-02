import { HtmlType } from 'types';

export type iInputGroup = HtmlType & {
	active?: boolean;
};

export type iInputAddon = HtmlType & {
	icon?: string;
	html?: string;
	taskRunning?: boolean;
};
