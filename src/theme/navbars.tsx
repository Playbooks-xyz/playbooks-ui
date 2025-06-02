import { borderProps } from 'theme/utils';

export const navbar = () => ({
	bgColor: 'bg-white dark:bg-gray-900',
	...borderProps,
	border: 'border-b',
	display: 'flex-between',
	space: 'space-x-4',
	spacing: 'p-4',
	width: 'w-full',
});

export const navbarBrand = () => ({
	display: 'inline-block',
	flex: 'shrink-0',
	width: 'w-44',
});

export const navbarList = () => ({
	display: 'flex-end',
	space: 'space-x-2',
	spacing: '',
});
