import { HtmlProps } from 'types';
import { TailwindFontSizeOpts } from 'types/tailwind-types';

export type FontProps = HtmlProps & {
	id?: string;
	size?: TailwindFontSizeOpts;
};
