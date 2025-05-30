import { HtmlType } from 'types';

export type iProgressBar = HtmlType;

export type iProgress = HtmlType & {
	value: number;
};

export type iFrameworkedProgress = HtmlType & {
	value: number;
	offset: number;
};
