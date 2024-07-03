import { BtnType, HtmlType, InputType, LabelType } from 'types';

export type iRadio = HtmlType & {
	title: string;
	text?: string;
	active?: boolean;
	value: any;
	onClick: (v: any) => void;
};

export type iRadioWrapper = BtnType;

export type iRadioInput = HtmlType & {
	name?: string;
	active?: boolean;
	value: boolean;
};

export type iRadioLabel = LabelType;
