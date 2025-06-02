import { HtmlProps } from 'types';

export type TooltipProps = HtmlProps & {
	open?: boolean;
	html?: string;
	onBlur?: () => any;
	onHover?: () => any;
	placement?: any;
	tailwind?: any;
};

export type TooltipInnerProps = HtmlProps & {
	tailwind?: any;
};

export type TooltipArrowProps = HtmlProps & {
	setArrowElement: any;
	tailwind?: any;
};
