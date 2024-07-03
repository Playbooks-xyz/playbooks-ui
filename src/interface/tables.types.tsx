import { HtmlType } from 'types';

export type iTable = HtmlType & {
	type?: string;
};

export type iTableContainer = HtmlType;

export type iTableHeader = HtmlType;

export type iTableHeaderRow = HtmlType;

export type iTableHead = HtmlType & {
	value?: string;
	params?: any;
	setParams?: (v: any) => void;
};

export type iTableBody = HtmlType;

export type iTableRow = HtmlType;

export type iTableData = HtmlType & {
	title: false,
	value?: string | number;
};
