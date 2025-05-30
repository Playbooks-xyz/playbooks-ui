import { HtmlProps } from 'types';
import { iBtn } from 'types/button-types';
import { iLink } from 'types/link-types';

export type iNav = HtmlProps;

export type iNavHeader = HtmlProps;

export type iNavTitle = HtmlProps;

export type iNavBody = HtmlProps;

export type iNavList = HtmlProps;

export type iNavItem = HtmlProps;

export type iNavBtn = iBtn & {
	variant?: string;
};

export type iNavLink = iLink & {
	variant?: string;
};
