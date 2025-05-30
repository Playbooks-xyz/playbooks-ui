import { HtmlType } from 'types';

export type iSlide = HtmlType & {
	open: boolean;
	onClose: () => any;
	placement: string;
};

export type iSlideWrapper = HtmlType & {
	open: boolean;
	onClose: () => any;
};

export type iSlideBackdrop = HtmlType & iSlideWrapper;

export type iSlideContainer = HtmlType;

export type iSlideHeader = HtmlType & {
	onClose: () => any;
};

export type iSlideTitle = HtmlType;

export type iSlideBody = HtmlType;

export type iSlideFooter = HtmlType;
