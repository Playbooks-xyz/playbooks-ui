import { HtmlProps } from 'types';

export type AlertProps = HtmlProps & {
	show?: boolean;
};

export type AlertIconProps = HtmlProps & {
	icon: string;
};

export type AlertBodyProps = HtmlProps;

export type AlertTitleProps = HtmlProps;

export type AlertTextProps = HtmlProps;

export type AlertActionsProps = HtmlProps;
