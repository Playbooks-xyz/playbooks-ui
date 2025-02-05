import { HtmlType, LabelType } from 'types';

export type iRadioWrapper = HtmlType & {
	active?: boolean;
	onClick: ()=> any;
};

export type iRadio = HtmlType & {
	title: string;
	value: any;
	text?: string;
	onClick: ()=> any;
};

export type iRadioInput = HtmlType & {
	value: boolean;
};

export type iRadioLabel = LabelType;
