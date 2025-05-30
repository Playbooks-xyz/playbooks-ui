import { borderProps } from 'utils';

export const badge = {
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

export const draftBadge = {
	bgColor: 'bg-gray-100 dark:bg-gray-700',
	color: 'text-gray-500 dark:text-gray-300',
};

export const pendingBadge = {
	bgColor: 'bg-orange-100 dark:bg-orange-900',
	color: 'text-orange-500 dark:text-orange-300',
};

export const warningBadge = {
	bgColor: 'bg-yellow-100 dark:bg-yellow-900',
	color: 'text-yellow-500 dark:text-yellow-300',
};

export const successBadge = {
	bgColor: 'bg-green-100 dark:bg-green-900',
	color: 'text-green-500 dark:text-green-300',
};

export const finishedBadge = {
	bgColor: 'bg-blue-100 dark:bg-blue-900',
	color: 'text-blue-500 dark:text-blue-300',
};

export const errorBadge = {
	bgColor: 'bg-red-100 dark:bg-red-900',
	color: 'text-red-500 dark:text-red-300',
};

export const outlineBadge = {
	bgColor: 'bg-transparent',
	border: 'border',
	borderColor: 'border-gray-300 dark:border-gray-600',
	color: 'text-gray-500 dark:text-gray-300',
};
