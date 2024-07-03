import { BtnType, HtmlType, LinkType } from 'types';

export type iBreadcrumbs = HtmlType;

export type iBreadcrumbItem = HtmlType;

export type iBreadcrumbBtn = BtnType & {
	active?: boolean;
	onClick: () => void;
	icon?: string;
};

export type iBreadcrumbLink = LinkType & {
	active?: boolean;
	href?: string;
	icon?: string;
};
