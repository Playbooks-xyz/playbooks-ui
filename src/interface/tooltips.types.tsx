import { HtmlType } from 'types';

export type iTooltip = HtmlType & {
	open?: boolean;
	html?: string;
	onHover?: () => void;
	placement?: any;
};

export type iTooltipBody = HtmlType & {
	setArrowElement: any;
	tooltipProps: any;
	html?: any;
	styles: any;
};

export type iTooltipInner = HtmlType;

export type iTooltipArrow = HtmlType & {
	setArrowElement: any;
};
