import { borderProps } from 'utils';

export const bannerBase = {
	border: 'border-b',
	...borderProps,
	color: 'white',
	display: 'flex-between',
	space: 'space-x-4',
	spacing: 'py-2 px-4',
	width: 'w-full',
};

export const bannerIconBase = {
	color: 'text-blue-500 dark:text-cyan-500',
};

export const bannerBodyBase = {
	display: 'flex-start',
	space: 'space-x-3',
	spacing: 'py-1',
};

export const bannerTitleBase = {
	color: 'text-gray-700 dark:text-white',
	fontWeight: 'font-semibold',
};

export const bannerTextBase = {
	color: 'text-gray-600 dark:text-gray-200',
};

export const bannerActionsBase = {
	display: 'flex-start',
	flex: 'shrink-0',
	spacing: 'space-x-2',
};