import { BtnProps, HtmlProps, LinkProps } from 'types';

export type iBreadcrumbs = HtmlProps;

export type iBreadcrumbItem = HtmlProps & {
	icon?: string;
	arrow?: boolean;
};

export type iBreadcrumbBtn = BtnProps & {
	active?: boolean;
	onClick: () => any;
	icon?: string;
};

export type iBreadcrumbLink = LinkProps & {
	active?: boolean;
	href?: string;
	icon?: string;
};
