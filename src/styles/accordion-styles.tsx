import { borderProps } from 'theme';

export const accordion = {
	...borderProps,
	width: 'w-full',
};

export const accordionToggle = {
	bgColor: 'bg-transparent',
	border: 'border-transparent',
	borderRadius: 'rounded-none',
	display: 'flex-between',
	nextIcon: {
		animation: 'transition-all ease',
		icon: 'chevron-down',
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
	animation: 'transition-all ease',
	duration: 'duration-200',
	overflow: 'overflow-hidden',
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
