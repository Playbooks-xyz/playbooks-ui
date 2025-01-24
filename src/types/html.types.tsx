import { TailwindType } from 'types/tailwind.types';

export type HtmlType = TailwindType & {
	id?: string;
	ref?: any;
	name?: string;
	html?: any;
	tabIndex?: any;
	onClick?: () => void;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
	tailwind?: TailwindType;
	className?: string;
	style?: any;
	children?: any;
};

export type BtnType = HtmlType & {
	type?: 'button' | 'submit' | 'reset';
	alt?: string;
	active?: boolean;
	prevIcon?: any;
	prevImg?: any;
	icon?: any;
	img?: any;
	nextIcon?: any;
	nextImg?: any;
	disabled?: boolean;
	taskRunning?: boolean;
};

export type ImgType = HtmlType & {
	alt: string;
	src: string;
	fetchPriority?: 'high' | 'low' | 'auto';
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
	alt: string;
	active?: boolean;
	prevIcon?: any;
	prevImg?: any;
	icon?: any;
	img?: any;
	nextIcon?: any;
	nextImg?: any;
	href?: string;
	disabled?: boolean;
	target?: '_self' | '_blank';
	taskRunning?: boolean;
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
