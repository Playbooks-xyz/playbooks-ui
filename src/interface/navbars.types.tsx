import { BtnType, HtmlType, LinkType } from 'types';

export type iNavbar = HtmlType & {
	ref: any;
};

export type iNavbarBrand = LinkType & {
	src: string;
};

export type iNavbarToggle = BtnType;

export type iNavbarList = HtmlType;
