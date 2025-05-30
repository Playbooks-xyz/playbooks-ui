import { HtmlProps } from 'types';

export type iProgressBar = HtmlProps;

export type iProgress = HtmlProps & {
	value: number;
};

export type iFrameworkedProgress = HtmlProps & {
	value: number;
	offset: number;
};
