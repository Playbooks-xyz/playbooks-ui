import { BtnType, HtmlType, LabelType } from 'types';

export type iRadio = HtmlType & {
	title: string;
	value: any;
	text?: string;
	onClick: () => void;
};

export type iRadioWrapper = BtnType;

export type iRadioInput = HtmlType & {
	value: boolean;
};

export type iRadioLabel = LabelType;
