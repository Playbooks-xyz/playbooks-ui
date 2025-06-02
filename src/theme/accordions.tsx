import { borderProps } from 'theme/utils';

export const accordion = () => ({
	...borderProps,
	border: 'border',
	width: 'w-full',
});

export const accordionToggle = ({ open }) => ({
	bgColor: 'bg-transparent',
	border: 'border-transparent',
	borderRadius: 'rounded-none',
	display: 'flex-between',
	nextIcon: {
		animation: 'transition-all ease',
		icon: 'chevron-down',
		rotate: open ? 'rotate-180' : 'rotate-0',
	},
	spacing: 'p-0',
	textAlign: 'text-left',
	width: 'w-full',
});

export const accordionTitle = () => ({
	color: 'text-gray-700 dark:text-gray-100',
	fontWeight: 'font-semibold',
	tracking: 'tracking-wide',
});

export const accordionBodyWrapper = () => ({
	animation: 'transition-all ease',
	duration: 'duration-200',
	overflow: 'overflow-hidden',
});

export const accordionBody = () => ({
	...borderProps,
	border: 'border-t',
	spacing: 'p-4',
	width: 'w-full',
});

export const accordionText = () => ({
	color: 'text-gray-600 dark:text-gray-300',
	fontFamily: 'font-secondary',
});
