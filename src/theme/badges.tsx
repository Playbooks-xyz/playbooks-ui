import { borderProps, computeBadgeSize } from 'theme/utils';

export const badge = ({ size }) => ({
	size: computeBadgeSize(size),
	...borderProps,
	borderRadius: 'rounded-md',
	display: 'inline-block',
	flex: 'shrink-0',
	fontFamily: 'font-accent',
	fontSize: 'text-xs',
	fontWeight: 'font-medium',
	space: 'space-x-2',
	textTransform: 'capitalize',
	whitespace: 'whitespace-nowrap',
});

export const draftBadge = () => ({
	bgColor: 'bg-gray-100 dark:bg-gray-800',
	color: 'text-gray-600 dark:text-gray-300',
});

export const pendingBadge = () => ({
	bgColor: 'bg-yellow-100 dark:bg-yellow-800',
	color: 'text-yellow-600 dark:text-yellow-300',
});

export const warningBadge = () => ({
	bgColor: 'bg-orange-100 dark:bg-orange-800',
	color: 'text-orange-600 dark:text-orange-300',
});

export const successBadge = () => ({
	bgColor: 'bg-green-100 dark:bg-green-800',
	color: 'text-green-600 dark:text-green-300',
});

export const finishedBadge = () => ({
	bgColor: 'bg-blue-100 dark:bg-blue-800',
	color: 'text-blue-600 dark:text-blue-300',
});

export const errorBadge = () => ({
	bgColor: 'bg-red-100 dark:bg-red-800',
	color: 'text-red-600 dark:text-red-300',
});

export const outlineBadge = () => ({
	...borderProps,
	bgColor: 'bg-transparent',
	border: 'border',
	color: 'text-gray-600 dark:text-gray-300',
});
