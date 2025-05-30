import { HtmlType } from 'types';
import { TailwindFontSizeOpts } from 'types/tailwind-types';

export type iFont = HtmlType & {
	id?: string;
	size?: TailwindFontSizeOpts;
};
