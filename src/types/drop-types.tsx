import { HtmlType } from 'types';
import { iBtn } from 'types/button-types';
import { iLink } from 'types/link-types';

export type iDrop = HtmlType & {
	open: boolean;
	onClose: () => any;
};

export type iDropToggle = iBtn & {
	variant?: string;
	open: boolean;
	onClick: (v?: any) => any;
};

export type iDropMenu = HtmlType & {
	open: boolean;
	placement?: string;
	options?: any;
};

export type iDropHeader = HtmlType;

export type iDropTitle = HtmlType;

export type iDropSubtitle = HtmlType;

export type iDropList = HtmlType;

export type iDropItem = HtmlType;

export type iDropBtn = iBtn;

export type iDropLink = iLink;
