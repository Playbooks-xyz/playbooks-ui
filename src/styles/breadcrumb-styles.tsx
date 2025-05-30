import { borderProps } from 'utils';

export const breadcrumbs = {
	bgColor: 'bg-transparent',
	...borderProps,
	spacing: 'py-4',
};

export const breadcrumbItem = {
	display: 'flex-start',
	space: 'space-x-2',
};

export const breadcrumbBtn = (active?) => ({
	cursor: 'cursor-pointer',
	color: 'text-gray-600 dark:text-gray-400',
	fontFamily: 'font-accent',
	fontWeight: 'font-medium',
	textTransform: 'uppercase',
	tracking: 'tracking-widest',
	fontSize: 'text-sm',
	...(active && {
		cursor: 'cursor-default',
		...active,
	}),
});

export const breadcrumbLink = (active?) => ({
	cursor: 'cursor-pointer',
	color: 'text-gray-600 dark:text-gray-400',
	fontFamily: 'font-accent',
	fontWeight: 'font-medium',
	textTransform: 'uppercase',
	tracking: 'tracking-widest',
	fontSize: 'text-sm',
	...(active && {
		cursor: 'cursor-default',
		...active,
	}),
});
