import { HtmlType } from 'types';

export type iSlide = HtmlType & {
	open: boolean;
	onClose: () => void;
	placement: string;
};

export type iSlideWrapper = HtmlType & {
	open: boolean;
	onClose: () => void;
};

export type iSlideBackdrop = HtmlType & iSlideWrapper;

export type iSlideContainer = HtmlType;

export type iSlideHeader = HtmlType & {
	onClose: () => void;
};

export type iSlideTitle = HtmlType;

export type iSlideBody = HtmlType;

export type iSlideFooter = HtmlType;
