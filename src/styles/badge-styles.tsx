import { borderProps } from 'utils';

export const badgeBase = {
	...borderProps,
	borderRadius: 'rounded-md',
	flex: 'shrink-0',
	fontFamily: 'font-accent',
	fontSize: 'text-xs',
	fontWeight: 'font-medium',
	space: 'space-x-2',
	textTransform: 'capitalize',
	whitespace: 'whitespace-nowrap',
};

export const draftBadgeBase = {
	bgColor: 'bg-gray-200 dark:bg-gray-500',
	color: 'text-gray-500 dark:text-gray-100',
};

export const pendingBadgeBase = {
	bgColor: 'bg-blue-500 dark:bg-cyan-500',
	color: 'white',
};

export const warningBadgeBase = {
	bgColor: 'bg-orange-500',
	color: 'white',
};

export const successBadgeBase = {
	bgColor: 'bg-green-400 dark:bg-green-400',
	color: 'white',
};

export const finishedBadgeBase = {
	bgColor: 'bg-gray-700 dark:bg-gray-700',
	color: 'white',
};

export const errorBadgeBase = {
	bgColor: 'bg-red-500',
	color: 'white',
};

export const outlineBadgeBase = {
	border: 'border',
	color: 'text-gray-600 dark:text-gray-300',
	display: 'flex-inline',
	space: 'space-x-2',
	textTransform: 'capitalize',
};