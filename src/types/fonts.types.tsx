import { HtmlType } from 'types';
import { TailwindFontSizeOpts } from 'types/tailwind-type';

export type iFont = HtmlType & {
	id?: string;
	size?: TailwindFontSizeOpts;
};
