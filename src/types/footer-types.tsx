import { HtmlType } from 'types';
import { iBtn } from 'types/button-types';
import { iLink } from 'types/link-types';

export type iFooter = HtmlType;

export type iFooterHeader = HtmlType;

export type iFooterTitle = HtmlType;

export type iFooterText = HtmlType;

export type iFooterBody = HtmlType;

export type iFooterList = HtmlType;

export type iFooterItem = HtmlType;

export type iFooterBtn = iBtn & {
	variant?: string;
};

export type iFooterLink = iLink & {
	variant?: string;
};
