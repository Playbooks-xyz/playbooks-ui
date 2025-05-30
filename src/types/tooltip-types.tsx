import { HtmlProps } from 'types';

export type iTooltip = HtmlProps & {
	open?: boolean;
	html?: string;
	onBlur?: () => any;
	onHover?: () => any;
	placement?: any;
	tailwind?: any;
};

export type iTooltipBody = HtmlProps & {
	setArrowElement: any;
	html?: any;
	styles: any;
	tailwind?: any;
};

export type iTooltipInner = HtmlProps & {
	tailwind?: any;
};

export type iTooltipArrow = HtmlProps & {
	setArrowElement: any;
	tailwind?: any;
};
