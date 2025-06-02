import { borderProps } from 'theme/utils';

export const breadcrumb = () => ({
	...borderProps,
	display: 'flex-start',
	fontFamily: 'font-secondary',
	fontSize: 'text-sm',
	space: 'space-x-2',
	spacing: 'mb-4 pb-4',
	width: 'w-full',
});

export const breadcrumbItem = () => ({
	color: 'text-gray-500 dark:text-gray-400',
	hover: 'h:text-gray-700 h:dark:text-gray-200',
});

export const breadcrumbSeparator = () => ({
	color: 'text-gray-400 dark:text-gray-500',
});

export const breadcrumbActive = () => ({
	color: 'text-gray-700 dark:text-gray-200',
	fontWeight: 'font-medium',
});

export const breadcrumbBtn = ({ active }) => ({
	color: 'text-gray-600 dark:text-gray-400',
	cursor: 'cursor-pointer',
	fontFamily: 'font-accent',
	fontSize: 'text-sm',
	fontWeight: 'font-medium',
	textTransform: 'uppercase',
	tracking: 'tracking-widest',
	...(active && {
		cursor: 'cursor-default',
		...active,
	}),
});

export const breadcrumbLink = ({ active }) => ({
	color: 'text-gray-600 dark:text-gray-400',
	cursor: 'cursor-pointer',
	fontFamily: 'font-accent',
	fontSize: 'text-sm',
	fontWeight: 'font-medium',
	textTransform: 'uppercase',
	tracking: 'tracking-widest',
	...(active && {
		cursor: 'cursor-default',
		...active,
	}),
});
