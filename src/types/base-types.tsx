import { TailwindProps } from 'types/tailwind-types';

export type HtmlProps = TailwindProps & {
	id?: string;
	ref?: any;
	name?: string;
	html?: any;
	tabIndex?: any;
	onClick?: (v?: any) => any;
	onMouseEnter?: (v?: any) => any;
	onMouseLeave?: (v?: any) => any;
	tailwind?: TailwindProps;
	className?: string;
	style?: any;
	children?: any;
};

export type BtnProps = HtmlProps & {
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

export type ImgProps = HtmlProps & {
	alt: string;
	src: string;
	fetchPriority?: 'high' | 'low' | 'auto';
};

export type InputProps = HtmlProps & {
	value?: string;
	defaultValue?: string;
	placeholder?: string;
	onBlur?: (e: any) => any;
	onChange?: (e: any) => any;
	onFocus?: (e: any) => any;
	readOnly?: boolean;
};

export type LabelProps = HtmlProps & {
	active?: boolean;
	htmlFor?: string;
};

export type LinkProps = HtmlProps & {
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
