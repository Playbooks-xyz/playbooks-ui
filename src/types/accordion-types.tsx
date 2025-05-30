import { HtmlType } from 'types';
import { iBtn } from 'types/button-types';

export type iAccordion = HtmlType & {
	open?: boolean;
};

export type iAccordionToggle = iBtn & {
	open?: boolean;
	variant?: string;
	onClick: (v?: any) => any;
};

export type iAccordionTitle = HtmlType & {
	icon?: string;
	title?: string;
};

export type iAccordionBody = HtmlType & {
	open?: boolean;
	animate?: boolean;
};

export type iAccordionText = HtmlType & {
	size?: string;
};
