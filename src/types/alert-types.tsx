import { FontProps, HtmlProps } from 'types';

export type AlertProps = HtmlProps & {
	show?: boolean;
};

export type AlertIconProps = HtmlProps & {
	icon: string;
};

export type AlertBodyProps = HtmlProps;

export type AlertTitleProps = FontProps;

export type AlertTextProps = HtmlProps;

export type AlertActionsProps = HtmlProps;
