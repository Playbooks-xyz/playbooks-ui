import { gradientBgColor } from 'utils';

export const progressBarBase = {
	bgColor: 'bg-gray-200 dark:bg-gray-700',
	bgOpacity: 'bg-opacity',
	borderRadius: 'rounded-full',
	overflow: 'overflow-hidden',
	height: 'h-2',
	width: 'w-full',
};

export const progressBase = {
	...gradientBgColor,
	position: 'absolute',
	height: 'h-2',
};