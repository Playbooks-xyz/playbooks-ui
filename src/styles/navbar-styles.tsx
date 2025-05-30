import { borderProps } from 'utils';

export const navbarBase = {
	bgColor: 'bg-white dark:bg-gray-900',
	...borderProps,
	display: 'flex-between',
	position: 'relative',
	spacing: 'p-4',
	width: 'w-full',
};

export const navbarBrandBase = {
	display: 'inline-block',
	flex: 'shrink-0',
	width: 'w-44',
};

export const navbarListBase = {
	display: 'flex-end',
	space: 'space-x-2',
	spacing: '',
};