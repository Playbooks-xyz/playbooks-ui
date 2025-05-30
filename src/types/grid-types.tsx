import { HtmlProps } from 'types';
import { TailwindColProps, TailwindContainerProps } from 'types/tailwind-types';

export type iContainer = HtmlProps & TailwindContainerProps;

export type iGrid = HtmlProps & {
	cols?: string;
};

export type iCol = HtmlProps & TailwindColProps;
