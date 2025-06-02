import { borderProps } from 'theme/utils';

export const radioWrapper = () => ({
	animation: 'transition-all ease',
	border: 'border',
	borderRadius: 'rounded-md',
	...borderProps,
	cursor: 'cursor-pointer',
	display: 'inline-block',
	duration: 'duration-200',
	position: 'relative',
	spacing: 'p-4',
});

export const radio = () => ({
	display: 'flex-start-top',
	space: 'space-x-4',
});

export const radioInput = () => ({
	animation: 'transition-all ease',
	appearance: 'appearance-none',
	bgColor: 'bg-white dark:bg-gray-800',
	border: 'border-2',
	borderColor: 'border-gray-300 dark:border-gray-600',
	borderRadius: 'rounded-full',
	checked: 'checked:bg-blue-500 checked:border-blue-500 checked:dark:bg-cyan-500 checked:dark:border-cyan-500',
	cursor: 'cursor-pointer',
	focus: 'focus:ring-2 focus:ring-blue-500',
	height: 'h-4',
	width: 'w-4',
});

export const radioTitle = () => ({
	color: 'text-gray-700 dark:text-gray-200',
	lineSpacing: 'leading-tight',
	fontSize: 'text-sm',
});

export const radioText = () => ({
	fontSize: 'text-sm',
	fontWeight: 'font-light',
	tracking: 'tracking-wide',
});
