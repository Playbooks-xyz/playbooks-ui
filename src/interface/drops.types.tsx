import { iBtn } from 'interface/buttons.types';
import { iLink } from 'interface/links.types';
import { HtmlType } from 'types';

export type iDrop = HtmlType & {
	open: boolean;
	onClose: () => any;
};

export type iDropToggle = iBtn & {
	variant?: string;
	onClick: (v?: any) => any;
};

export type iDropMenu = HtmlType & {
	open: boolean;
	placement?: string;
};

export type iDropMenuWrapper = HtmlType & {
	open: boolean;
	placement?: string;
};

export type iDropHeader = HtmlType;

export type iDropTitle = HtmlType;

export type iDropSubtitle = HtmlType;

export type iDropList = HtmlType;

export type iDropItem = HtmlType;

export type iDropBtn = iBtn;

export type iDropLink = iLink;
