import { HtmlType, InputType } from 'types';

export type iForm = HtmlType & {
	onSubmit?: (v) => any;
};

export type iFormGroup = HtmlType;

export type iFormLabel = HtmlType & {
	htmlFor?: string;
};

export type iFormCheckbox = HtmlType & {
	id?: string;
	type?: string;
	checked?: boolean;
	onChange: (e: any) => any;
	readOnly?: boolean;
};

export type iFormRange = HtmlType & {
	id?: string;
	value?: number;
	min?: number;
	max?: number;
	step?: number;
	onChange: (e: any) => any;
	readOnly?: boolean;
};

export type iFormFile = HtmlType & {
	id?: string;
	type?: string;
	value?: any;
	defaultValue?: any;
	placeholder?: string;
	onChange: (e: any) => any;
	readOnly?: boolean;
};

export type iFormInput = InputType & {
	id?: string;
	type?: string;
	size?: string;
	variant?: string;
};

export type iFormInputCurrency = iFormInput & {
	prefix?: string;
};

export type iFormLocationInput = iFormInput & {
	options?: any;
	onSelect: (e: any) => any;
};

export type iFormInputMask = iFormInput & {
	mask: string;
};

export type iFormSelect = HtmlType & {
	id?: string;
	value?: any;
	variant?: string;
	defaultValue?: string;
	disabled?: boolean;
	placeholder?: string;
	options?: string[];
	onChange: (e: any) => any;
};

export type iFormText = HtmlType;

export type iFormTextArea = HtmlType & {
	id?: string;
	rows?: number;
	value?: any;
	variant?: string;
	defaultValue?: any;
	placeholder?: string;
	onChange: (e: any) => any;
	readOnly?: boolean;
};
