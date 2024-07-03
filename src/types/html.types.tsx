import { TailwindType } from 'types/tailwind.types';

export type HtmlType = TailwindType & {
	id?: string;
	name?: string;
	ref?: any;
	html?: any;
	tabIndex?: any;
	onClick?: () => void;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
	className?: string;
	style?: any;
	children?: any;
};

export type BtnType = HtmlType & {
	active?: boolean;
	disabled?: boolean;
	taskRunning?: boolean;
};

export type ImgType = HtmlType & {
	fetchPriority?: 'high' | 'low' | 'auto';
	src?: string;
	alt?: string;
};

export type InputType = HtmlType & {
	checked?: string;
	defaultChecked?: string;
	value?: string;
	defaultValue?: string;
	onBlur?: () => void;
	onChange?: () => void;
	onFocus?: () => void;
	placeholder?: string;
	readOnly?: string;
};

export type LabelType = HtmlType & {
	active?: boolean;
	htmlFor?: string;
};

export type LinkType = HtmlType & {
	active?: boolean;
	href?: string;
};

export type SelectType = HtmlType & {
	active?: boolean;
	value?: string;
	onSelect: (v: string) => void;
};

export type ToggleType = HtmlType & {
	active?: boolean;
	onToggle: () => void;
};
