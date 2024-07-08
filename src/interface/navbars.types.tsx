import { BtnType, HtmlType, ImgType, LinkType } from 'types';

export type iNavbar = HtmlType & {
  ref: any;
};

export type iNavbarBrand = ImgType & LinkType;

export type iNavbarToggle = BtnType;

export type iNavbarList = HtmlType;
