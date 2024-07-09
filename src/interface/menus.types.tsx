import { BtnType, HtmlType, LinkType } from 'types';

export type iMenu = HtmlType & {
	open: boolean;
	onClose: () => void;
};

export type iMenuBackdrop = HtmlType & {
	open: boolean;
	onClose: () => void;
};

export type iMenuToggle = HtmlType & {
	icon?: string;
};

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
