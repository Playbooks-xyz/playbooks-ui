import { HtmlProps, LabelProps } from 'types';

export type iRadioWrapper = HtmlProps & {
	active?: boolean;
	onClick: () => any;
};

export type iRadio = HtmlProps & {
	title: string;
	value: any;
	text?: string;
	onClick: () => any;
};

export type iRadioInput = HtmlProps & {
	value: boolean;
};

export type iRadioLabel = LabelProps;
