import { HtmlType } from 'types';

export type iCommand = HtmlType & {
	size?: string;
	keys?: string[];
	variant?: string;
};
