import { HtmlType } from 'types';
import { iBtn } from 'types/button-types';
import { iLink } from 'types/link-types';

export type iNav = HtmlType;

export type iNavHeader = HtmlType;

export type iNavTitle = HtmlType;

export type iNavBody = HtmlType;

export type iNavList = HtmlType;

export type iNavItem = HtmlType;

export type iNavBtn = iBtn & {
	variant?: string;
};

export type iNavLink = iLink & {
	variant?: string;
};
