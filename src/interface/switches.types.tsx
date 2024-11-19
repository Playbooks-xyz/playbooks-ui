import { HtmlType, LabelType } from 'types';

export type iSwitchGroup = HtmlType;

export type iSwitch = HtmlType & {
	icon?: string;
	checked: boolean;
	onClick: any;
};

export type iSwitchBackdrop = HtmlType & {
	checked?: boolean;
};

export type iSwitchInner = HtmlType & {
	checked: boolean;
};

export type iSwitchToggle = HtmlType & {
	icon?: string;
	checked: boolean;
};

export type iSwitchLabel = LabelType;
