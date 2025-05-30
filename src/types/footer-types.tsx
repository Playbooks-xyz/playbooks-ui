import { HtmlProps } from 'types';
import { iBtn } from 'types/button-types';
import { iLink } from 'types/link-types';

export type iFooter = HtmlProps;

export type iFooterHeader = HtmlProps;

export type iFooterTitle = HtmlProps;

export type iFooterText = HtmlProps;

export type iFooterBody = HtmlProps;

export type iFooterList = HtmlProps;

export type iFooterItem = HtmlProps;

export type iFooterBtn = iBtn & {
	variant?: string;
};

export type iFooterLink = iLink & {
	variant?: string;
};
