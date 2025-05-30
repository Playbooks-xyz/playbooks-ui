import { HtmlProps, InputProps } from 'types';

export type FormProps = HtmlProps & {
	onSubmit?: (v) => any;
};

export type FormGroupProps = HtmlProps;

export type FormLabelProps = HtmlProps & {
	htmlFor?: string;
};

export type FormCheckboxProps = HtmlProps & {
	id?: string;
	type?: string;
	checked?: boolean;
	onChange: (e: any) => any;
	readOnly?: boolean;
};

export type FormRangeProps = HtmlProps & {
	id?: string;
	value?: number;
	min?: number;
	max?: number;
	step?: number;
	onChange: (e: any) => any;
	readOnly?: boolean;
};

export type FormFileProps = HtmlProps & {
	id?: string;
	type?: string;
	value?: any;
	defaultValue?: any;
	placeholder?: string;
	onChange: (e: any) => any;
	readOnly?: boolean;
};

export type FormInputProps = InputProps & {
	id?: string;
	type?: string;
	size?: string;
	variant?: string;
};

export type FormInputPropsCurrency = FormInputProps & {
	prefix?: string;
};

export type FormLocationPropsInput = FormInputProps & {
	options?: any;
	googleMapsApiKey: string;
	onSelect: (e: any) => any;
};

export type FormInputPropsMask = FormInputProps & {
	mask: string;
};

export type FormSelectProps = HtmlProps & {
	id?: string;
	value?: any;
	variant?: string;
	defaultValue?: string;
	disabled?: boolean;
	placeholder?: string;
	options?: string[];
	onChange: (e: any) => any;
};

export type FormTextProps = HtmlProps;

export type FormTextPropsArea = HtmlProps & {
	id?: string;
	rows?: number;
	value?: any;
	variant?: string;
	defaultValue?: any;
	placeholder?: string;
	onChange: (e: any) => any;
	readOnly?: boolean;
};
