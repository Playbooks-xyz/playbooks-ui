import { borderProps } from 'theme';

export const radioWrapper = {
	animation: 'transition',
	border: 'border',
	...borderProps,
	borderRadius: 'rounded-md',
	cursor: 'cursor-pointer',
	display: 'inline-block',
	duration: 'duration-200',
	position: 'relative',
	spacing: 'p-4',
};

export const radio = {
	display: 'flex-start-top',
	space: 'space-x-4',
};

export const radioInput = {
	animation: 'transition-all ease',
	bgColor:
		'bg-gray-100 dark:bg-gray-800 checked:bg-blue-500 checked:h:bg-blue-500 checked:f:bg-blue-500 dark:checked:bg-cyan-500 dark:checked:h:bg-cyan-500 dark:checked:f:bg-cyan-500',
	border: 'border-2',
	borderColor: 'border-gray-400 dark:border-gray-600 f:border-blue-500 dark:border-gray-500',
	borderOpacity: 'border-opacity-50 dark:border-opacity-50',
	borderRadius: 'rounded-full',
	cursor: 'cursor-pointer',
	ring: 'ring-none',
	ringColor:
		'ring-transparent checked:ring-transparent dark:checked:ring-transparent f:ring-transparent dark:f:ring-transparent',
	ringOffset: 'ring-offset-4 checked:ring-offset-4 f:ring-offset-4',
	ringOffsetColor:
		'checked:ring-offset-blue-500/50 dark:checked:ring-offset-cyan-500/50 f:ring-offset-blue-500/50 dark:f:ring-offset-cyan-500/50',
	size: 'w-4 h-4',
};

export const radioTitle = {
	color: 'text-gray-700 dark:text-gray-200',
	lineSpacing: 'leading-tight',
	fontSize: 'text-sm',
};

export const radioText = {
	fontSize: 'text-sm',
	fontWeight: 'font-light',
	tracking: 'tracking-wide',
};
