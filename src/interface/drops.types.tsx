import { BtnType, HtmlType, LinkType } from 'types';

export type iDrop = HtmlType & {
	open: boolean;
	setOpen: (v: boolean) => void;
};

export type iDropToggle = HtmlType & {
	type?: string;
	active?: boolean;
	icon?: string;
	nextIcon?: string;
};

export type iDropMenu = HtmlType & {
	open: boolean;
};

export type iDropMenuWrapper = HtmlType & {
	open: boolean;
};

export type iDropHeader = HtmlType;

export type iDropTitle = HtmlType;

export type iDropSubtitle = HtmlType;

export type iDropList = HtmlType;

export type iDropItem = HtmlType;

export type iDropBtn = BtnType;

export type iDropLink = LinkType;
