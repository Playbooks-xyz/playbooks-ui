import { HtmlProps } from 'types';

export type iTable = HtmlProps;

export type iTableHeader = HtmlProps;

export type iTableHeaderRow = HtmlProps;

export type iTableHead = HtmlProps & {
	alt?: string;
	value?: string;
	params?: any;
	setParams?: (v: any) => any;
};

export type iTableBody = HtmlProps;

export type iTableRow = HtmlProps;

export type iTableData = HtmlProps & {
	title?: boolean;
	value?: string | number;
};
