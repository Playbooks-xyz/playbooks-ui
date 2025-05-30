import { BtnProps, HtmlProps } from 'types';

export type AccordionProps = HtmlProps & {
	open?: boolean;
};

export type AccordionToggleProps = BtnProps & {
	open?: boolean;
	variant?: string;
	onClick: (v?: any) => any;
};

export type AccordionTitleProps = HtmlProps & {
	icon?: string;
	title?: string;
};

export type AccordionBodyProps = HtmlProps & {
	open?: boolean;
	animate?: boolean;
};

export type AccordionTextProps = HtmlProps & {
	size?: string;
};
