import { HtmlProps, InputProps } from 'types';

export type iForm = HtmlProps & {
	onSubmit?: (v) => any;
};

export type iFormGroup = HtmlProps;

export type iFormLabel = HtmlProps & {
	htmlFor?: string;
};

export type iFormCheckbox = HtmlProps & {
	id?: string;
	type?: string;
	checked?: boolean;
	onChange: (e: any) => any;
	readOnly?: boolean;
};

export type iFormRange = HtmlProps & {
	id?: string;
	value?: number;
	min?: number;
	max?: number;
	step?: number;
	onChange: (e: any) => any;
	readOnly?: boolean;
};

export type iFormFile = HtmlProps & {
	id?: string;
	type?: string;
	value?: any;
	defaultValue?: any;
	placeholder?: string;
	onChange: (e: any) => any;
	readOnly?: boolean;
};

export type iFormInput = InputProps & {
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
	googleMapsApiKey: string;
	onSelect: (e: any) => any;
};

export type iFormInputMask = iFormInput & {
	mask: string;
};

export type iFormSelect = HtmlProps & {
	id?: string;
	value?: any;
	variant?: string;
	defaultValue?: string;
	disabled?: boolean;
	placeholder?: string;
	options?: string[];
	onChange: (e: any) => any;
};

export type iFormText = HtmlProps;

export type iFormTextArea = HtmlProps & {
	id?: string;
	rows?: number;
	value?: any;
	variant?: string;
	defaultValue?: any;
	placeholder?: string;
	onChange: (e: any) => any;
	readOnly?: boolean;
};
