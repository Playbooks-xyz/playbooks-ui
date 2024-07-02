import { HtmlType } from 'types';

export type iTableContainer = HtmlType;

export type iTable = HtmlType & {
	type?: string;
};

export type iTableHeader = HtmlType;

export type iTableHeaderRow = HtmlType;

export type iTableHead = HtmlType & {
	value?: string;
	sortKey?: string;
	sortValue?: string;
	sortData?: (v: string, d: string) => void;
};

export type iTableBody = HtmlType;

export type iTableRow = HtmlType;

export type iTableData = HtmlType & {
	value?: string | number;
};
