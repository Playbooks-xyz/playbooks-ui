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
	alt: string;
	variant?: string;
	children: any;
};

export type iTabPanes = HtmlType;

export type iTabPane = HtmlType & {
	active?: boolean;
	value?: string;
};
