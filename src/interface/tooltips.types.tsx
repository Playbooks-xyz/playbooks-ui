import { HtmlType } from 'types';

export type iTooltip = HtmlType & {
	open?: boolean;
	html?: string;
	onHover?: () => any;
	placement?: any;
	tailwind?: any;
};

export type iTooltipBody = HtmlType & {
	setArrowElement: any;
	html?: any;
	styles: any;
	tailwind?: any;
};

export type iTooltipInner = HtmlType & {
	tailwind?: any;
};

export type iTooltipArrow = HtmlType & {
	setArrowElement: any;
	tailwind?: any;
};
