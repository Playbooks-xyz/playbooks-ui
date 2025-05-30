import { borderProps } from 'utils';

export const accordion = {
	border: 'border',
	...borderProps,
	borderRadius: 'rounded-md',
	spacing: 'mb-4',
	width: 'w-full',
};

export const accordionToggle = {
	bgColor: 'bg-transparent',
	border: 'border-transparent',
	borderRadius: 'rounded-none',
	display: 'block',
	grid: 'grid-2',
	nextIcon: {
		bgColor: 'bg-gray-200 dark:bg-gray-600',
		borderRadius: 'rounded-md',
		color: 'text-gray-700 dark:text-gray-100',
		icon: 'chevron-down',
		size: 'w-6 h-6',
		transform: 'transform',
		transition: 'transition-all ease',
		variant: 'basic',
	},
	spacing: 'p-0',
	textAlign: 'text-left',
	width: 'w-full',
};

export const accordionTitle = {
	color: 'text-gray-700 dark:text-gray-100',
	fontWeight: 'font-semibold',
	tracking: 'tracking-wide',
};

export const accordionBodyWrapper = {
	duration: 'duration-200',
	overflow: 'overflow-hidden',
	transition: 'transition-all ease',
};

export const accordionBody = {
	border: 'border-t',
	...borderProps,
	spacing: 'p-4',
	width: 'w-full',
};

export const accordionText = {
	color: 'text-gray-600 dark:text-gray-300',
	fontFamily: 'font-secondary',
};
