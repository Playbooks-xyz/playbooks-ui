import { HtmlProps, ImgProps } from 'types';

export type TagWrapperProps = HtmlProps;

export type TagProps = HtmlProps & {
	tailwind?: any;
};

export type TagImgProps = ImgProps;

export type TagBodyProps = HtmlProps;

export type TagActionsProps = HtmlProps;
