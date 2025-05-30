import { BtnType, HtmlType } from 'types';

export type iTabWrapper = HtmlType;

export type iTabSelect = HtmlType & {
	tabs?: string[];
	activeTab?: string;
	onSelect: (v: any) => any;
};

export type iTabs = HtmlType & {
	tabs?: string[];
	activeTab?: string;
	onSelect: (v: string) => any;
};

export type iTab = BtnType & {
	value?: string;
	active?: boolean;
	alt: string;
	variant?: string;
	onSelect: (v: string) => any;
	children: any;
};

export type iTabPanes = HtmlType;

export type iTabPane = HtmlType & {
	active?: boolean;
	value?: string;
};
