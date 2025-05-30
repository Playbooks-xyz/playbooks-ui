import { TailwindType } from 'types/tailwind-types';

export type Modify<T, R> = Omit<T, keyof R> & R;

export type HtmlType = TailwindType & {
	id?: string;
	ref?: any;
	name?: string;
	html?: any;
	tabIndex?: any;
	onClick?: (v?: any) => any;
	onMouseEnter?: (v?: any) => any;
	onMouseLeave?: (v?: any) => any;
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
	value?: string;
	defaultValue?: string;
	placeholder?: string;
	onBlur?: (e: any) => any;
	onChange?: (e: any) => any;
	onFocus?: (e: any) => any;
	readOnly?: boolean;
};

export type LabelType = HtmlType & {
	active?: boolean;
	htmlFor?: string;
};

export type LinkType = HtmlType & {
	alt?: string;
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
