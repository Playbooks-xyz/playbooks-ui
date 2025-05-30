import { BtnProps, HtmlProps, LinkProps } from 'types';

export type MenuProps = HtmlProps & {
	open: boolean;
	onClose: () => any;
};

export type MenuBackdropProps = HtmlProps & {
	open: boolean;
	onClose: () => any;
};

export type MenuToggleProps = BtnProps;

export type MenuMenuProps = HtmlProps & {
	open: boolean;
};

export type MenuHeaderProps = HtmlProps;

export type MenuTitleProps = HtmlProps;

export type MenuSubtitleProps = HtmlProps;

export type MenuListProps = HtmlProps;

export type MenuItemProps = HtmlProps;

export type MenuBtnProps = BtnProps;

export type MenuLinkProps = LinkProps;
