import { HtmlType } from 'types';

export type iTable = HtmlType;

export type iTableHeader = HtmlType;

export type iTableHeaderRow = HtmlType;

export type iTableHead = HtmlType & {
	alt?: string;
	value?: string;
	params?: any;
	setParams?: (v: any) => any;
};

export type iTableBody = HtmlType;

export type iTableRow = HtmlType;

export type iTableData = HtmlType & {
	title?: boolean;
	value?: string | number;
};
