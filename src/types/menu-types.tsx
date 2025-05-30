import { BtnProps, HtmlProps, LinkProps } from 'types';

export type iMenu = HtmlProps & {
	open: boolean;
	onClose: () => any;
};

export type iMenuBackdrop = HtmlProps & {
	open: boolean;
	onClose: () => any;
};

export type iMenuToggle = BtnProps;

export type iMenuMenu = HtmlProps & {
	open: boolean;
};

export type iMenuHeader = HtmlProps;

export type iMenuTitle = HtmlProps;

export type iMenuSubtitle = HtmlProps;

export type iMenuList = HtmlProps;

export type iMenuItem = HtmlProps;

export type iMenuBtn = BtnProps;

export type iMenuLink = LinkProps;
