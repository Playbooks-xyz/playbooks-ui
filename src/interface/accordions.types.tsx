import { iBtn } from 'interface/buttons.types';
import { HtmlType } from 'types';

export type iAccordion = HtmlType & {
	open?: boolean;
};

export type iAccordionToggle = iBtn & {
	open?: boolean;
	variant?: string;
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
