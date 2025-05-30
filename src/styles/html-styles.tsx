import { borderProps } from 'utils';

export const htmlBase = {};

export const bodyBase = {};

export const mainBase = {
	position: 'relative',
};

export const asideBase = {
	...borderProps,
};

export const divBase = {
	position: 'relative',
	...borderProps,
};

export const spanBase = {
	display: 'inline',
};

export const ulBase = {
	...borderProps,
	spacing: 'pl-4',
};

export const liBase = {
	...borderProps,
	fontFamily: 'font-secondary',
	color: 'text-inherit',
};

export const iFrameBase = {};

export const imgBase = {
	display: 'inline-block',
};

export const hrBase = {
	border: 'border-t',
	borderRadius: 'rounded-md',
	...borderProps,
};

export const articleBase = {};

export const figureBase = {};

export const captionBase = {};

export const blockquoteBase = {};

export const preBase = {};

export const codeBase = {
	bgColor: 'bg-gray-100 dark:bg-gray-800',
	borderRadius: 'rounded-md',
	display: 'inline-block',
	spacing: 'px-2 py-0.5',
};