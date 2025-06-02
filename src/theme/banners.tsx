import { borderProps } from 'theme/utils';

export const banner = () => ({
	border: 'border-b',
	...borderProps,
	color: 'white',
	display: 'flex-between',
	space: 'space-x-4',
	spacing: 'py-2 px-4',
	width: 'w-full',
});

export const bannerIcon = () => ({
	color: 'text-blue-500 dark:text-cyan-500',
});

export const bannerBody = () => ({
	display: 'flex-start',
	space: 'space-x-3',
	spacing: 'py-1',
});

export const bannerTitle = () => ({
	color: 'text-gray-700 dark:text-white',
	fontWeight: 'font-semibold',
});

export const bannerText = () => ({
	color: 'text-gray-600 dark:text-gray-200',
});

export const bannerActions = () => ({
	display: 'flex-end',
	flex: 'shrink-0',
	space: 'space-x-2',
});
