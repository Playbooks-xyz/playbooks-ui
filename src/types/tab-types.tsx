import { BtnProps, HtmlProps } from 'types';

export type TabWrapperProps = HtmlProps;

export type TabSelectProps = HtmlProps & {
	tabs?: string[];
	activeTab?: string;
	onSelect: (v: any) => any;
};

export type TabPropss = HtmlProps & {
	tabs?: string[];
	activeTab?: string;
	onSelect: (v: string) => any;
};

export type TabProps = BtnProps & {
	value?: string;
	active?: boolean;
	alt: string;
	variant?: string;
	onSelect: (v: string) => any;
	children: any;
};

export type TabPanesProps = HtmlProps;

export type TabPaneProps = HtmlProps & {
	active?: boolean;
	value?: string;
};
