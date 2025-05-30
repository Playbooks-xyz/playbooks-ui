import { HtmlProps } from 'types';

export type iSlide = HtmlProps & {
	open: boolean;
	onClose: () => any;
	placement: string;
};

export type iSlideWrapper = HtmlProps & {
	open: boolean;
	onClose: () => any;
};

export type iSlideBackdrop = HtmlProps & iSlideWrapper;

export type iSlideContainer = HtmlProps;

export type iSlideHeader = HtmlProps & {
	onClose: () => any;
};

export type iSlideTitle = HtmlProps;

export type iSlideBody = HtmlProps;

export type iSlideFooter = HtmlProps;
