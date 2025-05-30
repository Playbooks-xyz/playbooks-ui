import { BtnProps, HtmlProps, LinkProps } from 'types';

export type iNavbar = HtmlProps & {
	ref?: any;
};

export type iNavbarBrand = LinkProps & {
	src: string;
};

export type iNavbarToggle = BtnProps;

export type iNavbarList = HtmlProps;
