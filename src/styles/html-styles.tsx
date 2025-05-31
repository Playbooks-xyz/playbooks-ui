import { borderProps } from 'theme';

export const html = {};

export const body = {};

export const main = {
	position: 'relative',
};

export const aside = {
	...borderProps,
};

export const div = {
	position: 'relative',
	...borderProps,
};

export const span = {
	display: 'inline',
};

export const ul = {
	...borderProps,
	spacing: 'pl-4',
};

export const li = {
	...borderProps,
	fontFamily: 'font-secondary',
	color: 'text-inherit',
};

export const iFrame = {};

export const img = {
	display: 'inline-block',
};

export const hr = {
	border: 'border-t',
	borderRadius: 'rounded-md',
	...borderProps,
};

export const article = {};

export const figure = {};

export const caption = {};

export const blockquote = {};

export const pre = {};

export const code = {
	bgColor: 'bg-gray-100 dark:bg-gray-800',
	borderRadius: 'rounded-md',
	display: 'inline-block',
	spacing: 'px-2 py-0.5',
};
