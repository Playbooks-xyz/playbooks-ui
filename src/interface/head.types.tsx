import { HtmlType } from 'types';

export type iHead = HtmlType & {
	type?: string;
	favicon?: string;
	photo?: string;
	title?: string;
	description?: string;
	author?: string;
	keywords?: string;
	siteUrl?: string;
	allowRobots?: boolean;
};
