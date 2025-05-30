import { HtmlProps } from 'types';
import { iBtn } from 'types/button-types';

export type iAccordion = HtmlProps & {
	open?: boolean;
};

export type iAccordionToggle = iBtn & {
	open?: boolean;
	variant?: string;
	onClick: (v?: any) => any;
};

export type iAccordionTitle = HtmlProps & {
	icon?: string;
	title?: string;
};

export type iAccordionBody = HtmlProps & {
	open?: boolean;
	animate?: boolean;
};

export type iAccordionText = HtmlProps & {
	size?: string;
};
