import { HtmlType } from 'types';

export type iHead = HtmlType & {
	type?: string;
	favicon?: string;
	logo?: string;
	photo?: string;
	title?: string;
	description?: string;
	url?: string;
	card?: string;
	author?: string;
	keywords?: string;
	locale?: string;
	site?: string;
	siteName?: string;
	robots?: boolean;
};
