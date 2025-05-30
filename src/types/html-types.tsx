import { HtmlProps, ImgProps } from 'types';

export type iAside = HtmlProps;

export type iBody = HtmlProps;

export type iFrame = HtmlProps & {
	title: string;
	src: string;
	onLoad?: () => void;
};

export type iMain = HtmlProps;

export type iDiv = HtmlProps;

export type iUl = HtmlProps;

export type iLi = HtmlProps;

export type iSpan = HtmlProps;

export type iImg = ImgProps;

export type iHr = HtmlProps;
