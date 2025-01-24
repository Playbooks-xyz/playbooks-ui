import { iBtn } from 'interface/buttons.types';
import { iLink } from 'interface/links.types';
import { BtnType, HtmlType } from 'types';

export type iDrop = HtmlType & {
	open: boolean;
	onClose: () => void;
};

export type iDropToggle = BtnType & {
	variant?: string;
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

export type iDropBtn = iBtn;

export type iDropLink = iLink;
