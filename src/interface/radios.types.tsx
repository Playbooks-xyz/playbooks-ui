import { HtmlType, LabelType } from 'types';

export type iRadioWrapper = HtmlType & {
	active?: boolean;
	onClick: () => void;
};

export type iRadio = HtmlType & {
	title: string;
	value: any;
	text?: string;
	onClick: () => void;
};

export type iRadioInput = HtmlType & {
	value: boolean;
};

export type iRadioLabel = LabelType;
