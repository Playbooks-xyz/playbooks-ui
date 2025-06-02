import { computeBtnSize } from 'theme/utils';

export const btn = active => ({
	align: 'text-center',
	animation: 'transition ease',
	display: 'flex-middle-inline',
	flex: 'shrink-0',
	fontFamily: 'font-secondary',
	fontSize: 'text-sm',
	fontWeight: 'font-normal',
	focus: 'focus:outline-none focus-visible:outline-none',
	outline: 'outline-none',
	position: 'relative',
	space: 'space-x-4',
	tracking: 'tracking-normal',
	whiteSpace: 'whitespace-nowrap',
	...active,
});

export const primaryBtn = ({ active, size }) => ({
	bgColor: 'bg-gradient-to-r from-cyan-500 to-indigo-500',
	bgPosition: 'bg-pos-0 h:bg-pos-100',
	bgSize: 'bg-size-200',
	borderRadius: 'rounded-md',
	color: 'white',
	size: computeBtnSize(size),
	stroke: 'stroke-white dark:stroke-white',
	...btn(active),
});

export const accentBtn = ({ active, size }) => ({
	bgColor: 'bg-gray-200 dark:bg-gray-700',
	bgOpacity: 'bg-opacity-0 dark:bg-opacity-0',
	border: '',
	borderColor: 'border-gray-300 dark:border-gray-600',
	borderOpacity: 'border-opacity-50 dark:border-opacity-50',
	borderRadius: 'rounded-md',
	color: 'text-gray-600 dark:text-gray-300',
	hover: 'h:bg-opacity-50 dark:h:bg-opacity-50',
	size: computeBtnSize(size),
	stroke: 'stroke-gray-500 dark:stroke-gray-300',
	...btn(
		active && {
			bgOpacity: 'bg-opacity-50 dark:bg-opacity-50',
			borderOpacity: 'border-opacity-100 dark:border-opacity-100',
			...active,
		},
	),
});

export const borderBtn = ({ active, size }) => ({
	bgColor: 'bg-transparent',
	border: 'border',
	borderColor: 'border-gray-300 dark:border-gray-600',
	borderOpacity: 'border-opacity-50 dark:border-opacity-50',
	borderRadius: 'rounded-md',
	color: 'text-gray-600 dark:text-gray-300',
	hover: 'h:border-opacity-100 dark:h:border-opacity-100 h:opacity-100',
	size: computeBtnSize(size),
	stroke: 'stroke-gray-600 dark:stroke-gray-300',
	...btn(
		active && {
			borderColor: 'border-cyan-500 dark:border-cyan-500',
			borderOpacity: 'border-opacity-100 dark:border-opacity-100',
			color: 'text-cyan-500',
			stroke: 'stroke-cyan-500',
			...active,
		},
	),
});

export const tabBtn = ({ active, size }) => ({
	bgColor: 'bg-transparent',
	border: 'border-b-2',
	borderColor: 'border-b-transparent h:border-b-gray-300 h:border-b-blue-500 dark:h:border-b-cyan-500',
	borderRadius: '',
	color: 'text-gray-500 dark:text-gray-300',
	size: computeBtnSize(size),
	stroke: 'stroke-gray-500 dark:stroke-gray-300',
	...btn(
		active && {
			borderColor: 'border-b-blue-500 dark:border-b-cyan-500',
			color: 'text-gray-600 dark:text-gray-200',
			...active,
		},
	),
});

export const textBtn = ({ active, size }) => ({
	color: 'text-gray-500 dark:text-gray-400',
	fontSize: 'text-inherit',
	hover: 'h:underline h:gray-700 h:dark:text-gray-100',
	size: computeBtnSize(size),
	...btn(active),
});

export const btnWrapper = ({ disabled }) => ({
	cursor: disabled ? 'cursor-not-allowed' : 'cursor-pointer',
	outline: 'focus-visible:outline',
	outlineColor: 'focus-visible:outline-blue-500 dark:focus-visible:outline-cyan-500',
	outlineOffset: 'outline-offset-1',
	width: 'w-inherit',
});
