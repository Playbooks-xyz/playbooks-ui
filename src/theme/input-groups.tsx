import { borderProps } from 'theme/utils';

export const inputGroup = () => ({
	bgColor: 'bg-gray-white dark:bg-gray-900',
	border: 'border',
	borderColor: 'border-gray-400 dark:border-gray-500 focus-within:border-blue-500 dark:focus-within:border-cyan-500',
	borderOpacity: 'border-opacity-50 dark:border-opacity-50',
	borderRadius: 'rounded-md',
	color: 'text-gray-600 dark:text-gray-200',
	display: 'flex no-wrap',
	ring: 'focus-within:ring-1',
	ringColor: 'focus-within:ring-transparent dark:focus-within:ring-transparent',
	ringOffset: 'focus-within:ring-offset-1',
	ringOffsetColor: 'focus-within:ring-offset-blue-500 focus-within:dark:ring-offset-cyan-500',
	transition: 'transition ease',
});

export const inputAppend = () => ({
	...borderProps,
	display: 'flex-middle',
	flex: 'shrink-0',
	spacing: 'px-4',
});

export const inputPrepend = () => ({
	...borderProps,
	display: 'flex-middle',
	flex: 'shrink-0',
	spacing: 'px-4',
});
