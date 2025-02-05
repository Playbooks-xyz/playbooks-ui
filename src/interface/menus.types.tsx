import { BtnType, HtmlType, LinkType } from 'types';

export type iMenu = HtmlType & {
	open: boolean;
	onClose: ()=> any;
};

export type iMenuBackdrop = HtmlType & {
	open: boolean;
	onClose: ()=> any;
};

export type iMenuToggle = BtnType;

export type iMenuMenu = HtmlType & {
	open: boolean;
};

export type iMenuHeader = HtmlType;

export type iMenuTitle = HtmlType;

export type iMenuSubtitle = HtmlType;

export type iMenuList = HtmlType;

export type iMenuItem = HtmlType;

export type iMenuBtn = BtnType;

export type iMenuLink = LinkType;
