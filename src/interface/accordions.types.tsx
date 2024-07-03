import { HtmlType } from 'types';

export type iAccordion = HtmlType & {
	open?: boolean;
};

export type iAccordionToggle = HtmlType & {
	icon?: string;
	title?: string;
	open?: boolean;
	onClick: (v: any) => void;
};

export type iAccordionIcon = HtmlType & {
	icon?: string;
	open?: boolean;
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
