import { HtmlProps } from 'types';
import { iBtn } from 'types/button-types';
import { iLink } from 'types/link-types';

export type iDrop = HtmlProps & {
	open: boolean;
	onClose: () => any;
};

export type iDropToggle = iBtn & {
	variant?: string;
	open: boolean;
	onClick: (v?: any) => any;
};

export type iDropMenu = HtmlProps & {
	open: boolean;
	placement?: string;
	options?: any;
};

export type iDropHeader = HtmlProps;

export type iDropTitle = HtmlProps;

export type iDropSubtitle = HtmlProps;

export type iDropList = HtmlProps;

export type iDropItem = HtmlProps;

export type iDropBtn = iBtn;

export type iDropLink = iLink;
