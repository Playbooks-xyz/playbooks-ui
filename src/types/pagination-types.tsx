import { BtnProps, HtmlProps } from 'types';

export type iPagination = HtmlProps;

export type iPaginationBtn = BtnProps & {
	page: number;
	active?: boolean;
	disabled?: boolean;
	onClick: (v: number) => any;
};
