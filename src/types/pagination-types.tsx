import { BtnType, HtmlType } from 'types';

export type iPagination = HtmlType;

export type iPaginationBtn = BtnType & {
	page: number;
	active?: boolean;
	disabled?: boolean;
	onClick: (v: number) => any;
};
