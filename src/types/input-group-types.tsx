import { HtmlProps } from 'types';

export type iInputGroup = HtmlProps & {
	active?: boolean;
};

export type iInputAddon = HtmlProps & {
	icon?: any;
	html?: string;
	taskRunning?: boolean;
};
