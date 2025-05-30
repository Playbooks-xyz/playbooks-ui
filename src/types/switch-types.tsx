import { HtmlProps, LabelProps } from 'types';

export type iSwitchGroup = HtmlProps;

export type iSwitch = HtmlProps & {
	icon?: string;
	checked: boolean;
	onClick: (v?: any) => any;
};

export type iSwitchBackdrop = HtmlProps & {
	checked?: boolean;
};

export type iSwitchInner = HtmlProps & {
	checked: boolean;
};

export type iSwitchToggle = HtmlProps & {
	icon?: string;
	checked: boolean;
};

export type iSwitchLabel = LabelProps;
