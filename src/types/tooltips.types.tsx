import { HtmlType } from 'types';
import { TailwindPlacementOpts } from 'types/tailwind-type';

export type iTooltip = HtmlType & {
	show?: boolean;
	html?: string;
	onHover?: () => void;
	placement?: TailwindPlacementOpts;
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
