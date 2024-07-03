import { HtmlType, SelectType } from 'types';

export type iTabWrapper = HtmlType;

export type iTabSelect = HtmlType & {
	tabs?: string[];
	activeTab?: string;
	onSelect: (v: any) => void;
};

export type iTabs = HtmlType & {
	tabs?: string[];
	activeTab?: string;
	onSelect: (v: string) => void;
};

export type iTab = SelectType & {
	type?: string;
};

export type iTabPanes = HtmlType;

export type iTabPane = HtmlType & {
	active?: boolean;
	value?: string;
};
