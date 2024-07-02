import { HtmlType } from 'types';

export type iPagination = HtmlType;

export type iPaginationItem = HtmlType & {
	page: number;
	active?: boolean;
	disabled?: boolean;
	onClick: (v: number) => void;
};
