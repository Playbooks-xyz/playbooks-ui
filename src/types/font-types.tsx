import { HtmlProps } from 'types';
import { TailwindFontSizeOpts } from 'types/tailwind-types';

export type iFont = HtmlProps & {
	id?: string;
	size?: TailwindFontSizeOpts;
};
