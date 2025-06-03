import { HtmlProps } from 'types';

export type TooltipProps = HtmlProps & {
	open?: boolean;
	html?: string;
	onBlur?: () => any;
	onHover?: () => any;
	placement?: any;
};

export type TooltipInnerProps = HtmlProps;

export type TooltipArrowProps = HtmlProps & {
	setArrowElement: any;
};
