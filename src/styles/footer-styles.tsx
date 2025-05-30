import { borderProps } from 'utils';

export const footerBase = {
	bgColor: 'bg-white dark:bg-gray-900',
	border: 'border-t',
	...borderProps,
	position: 'relative',
	spacing: 'py-6',
};

export const footerHeaderBase = {
	border: 'border',
	...borderProps,
	spacing: 'py-8',
};

export const footerBodyBase = {
	spacing: 'py-10',
	width: 'w-full',
};

export const footerTitleBase = {
	fontSize: 'text-base',
	fontWeight: 'font-bold',
	tracking: 'tracking-wider',
};

export const footerTextBase = {
	fontSize: 'text-sm',
};

export const footerListBase = {
	display: 'flex-column',
	space: 'space-y-2',
	spacing: '',
};

export const footerItemBase = {
	display: 'block',
	spacing: 'py-1',
};

export const footerBtnBase = {
	fontSize: 'text-sm',
};

export const footerLinkBase = {
	fontSize: 'text-sm',
};

export const footerFooterBase = {
	border: 'border-t',
	...borderProps,
	spacing: 'pt-6',
};