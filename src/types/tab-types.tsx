import { BtnProps, HtmlProps } from 'types';

export type iTabWrapper = HtmlProps;

export type iTabSelect = HtmlProps & {
	tabs?: string[];
	activeTab?: string;
	onSelect: (v: any) => any;
};

export type iTabs = HtmlProps & {
	tabs?: string[];
	activeTab?: string;
	onSelect: (v: string) => any;
};

export type iTab = BtnProps & {
	value?: string;
	active?: boolean;
	alt: string;
	variant?: string;
	onSelect: (v: string) => any;
	children: any;
};

export type iTabPanes = HtmlProps;

export type iTabPane = HtmlProps & {
	active?: boolean;
	value?: string;
};
