import { BtnType, HtmlType, InputType, LabelType } from 'types';

export type iRadioWrapper = BtnType;

export type iRadio = HtmlType & {
	checked?: boolean;
	onClick: (v: number) => void;
};

export type iRadioInput = InputType & {
	checked?: boolean;
};

export type iRadioLabel = LabelType;
