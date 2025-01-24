import { iBtn } from 'interface/buttons.types';
import { iLink } from 'interface/links.types';
import { HtmlType } from 'types';

export type iFooter = HtmlType;

export type iFooterHeader = HtmlType;

export type iFooterTitle = HtmlType;

export type iFooterText = HtmlType;

export type iFooterBody = HtmlType;

export type iFooterList = HtmlType;

export type iFooterItem = HtmlType;

export type iFooterBtn = iBtn & {
	variant: string;
};

export type iFooterLink = iLink & {
	variant: string;
};
