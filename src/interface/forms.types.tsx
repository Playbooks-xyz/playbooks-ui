import { HtmlType } from 'types';

export type iForm = HtmlType & {
	onSubmit?: (v) => void;
};

export type iFormGroup = HtmlType;

export type iFormLabel = HtmlType & {
	htmlFor?: string;
};

export type iFormCheckbox = HtmlType & {
	id?: string;
	type?: string;
	checked?: boolean;
	onChange: (e: any) => void;
	readOnly?: boolean;
};

export type iFormFile = HtmlType & {
	id?: string;
	type?: string;
	value?: any;
	defaultValue?: any;
	placeholder?: string;
	onChange: (e: any) => void;
	readOnly?: boolean;
};

export type iFormInput = HtmlType & {
	id?: string;
	type?: string;
	value?: any;
	variant?: string;
	defaultValue?: any;
	placeholder?: string;
	onBlur: (e: any) => void;
	onChange: (e: any) => void;
	onFocus: (e: any) => void;
	readOnly?: boolean;
};

export type iFormSelect = HtmlType & {
	id?: string;
	value?: any;
	variant?: string;
	defaultValue?: string;
	disabled?: boolean;
	placeholder?: string;
	options?: string[];
	onChange: (e: any) => void;
};

export type iFormText = HtmlType;

export type iFormTextArea = HtmlType & {
	id?: string;
	rows?: number;
	value?: any;
	variant?: string;
	defaultValue?: any;
	placeholder?: string;
	onChange: (e: any) => void;
	readOnly?: boolean;
};
