import { HtmlType } from 'types';

export type iCommand = HtmlType & {
	keys?: string[];
	variant?: string;
};
