import { HtmlType } from 'types';

export type iLink = HtmlType & {
	to?: string;
	active?: boolean;
	disabled?: boolean;
	href?: string;
	prevIcon?: string;
	icon?: string;
	nextIcon?: string;
	target?: '_self' | '_blank';
};
