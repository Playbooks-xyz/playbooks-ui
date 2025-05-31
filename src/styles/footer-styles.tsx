import { borderProps } from 'theme';

export const footer = {
	bgColor: 'bg-white dark:bg-gray-900',
	border: 'border-t',
	...borderProps,
	position: 'relative',
	spacing: 'py-6',
};

export const footerHeader = {
	border: 'border',
	...borderProps,
	spacing: 'py-8',
};

export const footerBody = {
	spacing: 'py-10',
	width: 'w-full',
};

export const footerTitle = {
	fontSize: 'text-base',
	fontWeight: 'font-bold',
	tracking: 'tracking-wider',
};

export const footerText = {
	fontSize: 'text-sm',
};

export const footerList = {
	display: 'flex-column',
	space: 'space-y-2',
	spacing: '',
};

export const footerItem = {
	display: 'block',
	spacing: 'py-1',
};

export const footerBtn = {
	fontSize: 'text-sm',
};

export const footerLink = {
	fontSize: 'text-sm',
};

export const footerFooter = {
	border: 'border-t',
	...borderProps,
	spacing: 'pt-6',
};
