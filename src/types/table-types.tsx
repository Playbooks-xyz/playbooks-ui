import { HtmlProps } from 'types';

export type TabPropsle = HtmlProps;

export type TabPropsleHeader = HtmlProps;

export type TabPropsleHeaderRow = HtmlProps;

export type TabPropsleHead = HtmlProps & {
	alt?: string;
	value?: string;
	params?: any;
	setParams?: (v: any) => any;
};

export type TabPropsleBody = HtmlProps;

export type TabPropsleRow = HtmlProps;

export type TabPropsleData = HtmlProps & {
	title?: boolean;
	value?: string | number;
};
