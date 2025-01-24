import { HtmlType, ImgType } from 'types';

export type iAside = HtmlType;

export type iBody = HtmlType;

export type iFrame = HtmlType & {
	title: string;
	src: string;
};

export type iMain = HtmlType;

export type iDiv = HtmlType;

export type iUl = HtmlType;

export type iLi = HtmlType;

export type iSpan = HtmlType;

export type iImg = ImgType;

export type iHr = HtmlType;
