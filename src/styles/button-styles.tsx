export const primaryBtn = (active?) => ({
	bgColor: 'bg-gradient-to-r from-cyan-500 to-indigo-500',
	bgPosition: 'bg-pos-0 h:bg-pos-100',
	bgSize: 'bg-size-200',
	borderRadius: 'rounded-md',
	color: 'white',
	stroke: 'stroke-white dark:stroke-white',
	...sharedBtn(active),
});

export const accentBtn = (active?) => ({
	bgColor: 'bg-gray-200 dark:bg-gray-700',
	bgOpacity: 'bg-opacity-0 dark:bg-opacity-0',
	border: '',
	borderColor: 'border-gray-300 dark:border-gray-600',
	borderOpacity: 'border-opacity-50 dark:border-opacity-50',
	borderRadius: 'rounded-md',
	color: 'text-gray-600 dark:text-gray-300',
	stroke: 'stroke-gray-500 dark:stroke-gray-300',
	hover: 'h:bg-opacity-50 dark:h:bg-opacity-50',
	...sharedBtn(
		active && {
			bgOpacity: 'bg-opacity-50 dark:bg-opacity-50',
			borderOpacity: 'border-opacity-100 dark:border-opacity-100',
			...active,
		},
	),
});

export const borderBtn = (active?) => ({
	bgColor: 'bg-transparent',
	border: 'border',
	borderColor: 'border-gray-300 dark:border-gray-600',
	borderOpacity: 'border-opacity-50 dark:border-opacity-50',
	borderRadius: 'rounded-md',
	color: 'text-gray-600 dark:text-gray-300',
	stroke: 'stroke-gray-600 dark:stroke-gray-300',
	hover: 'h:border-opacity-100 dark:h:border-opacity-100 h:opacity-100',
	...sharedBtn(
		active && {
			borderColor: 'border-cyan-500 dark:border-cyan-500',
			borderOpacity: 'border-opacity-100 dark:border-opacity-100',
			color: 'text-cyan-500',
			stroke: 'stroke-cyan-500',
			...active,
		},
	),
});

export const tabBtn = (active?) => ({
	bgColor: 'bg-transparent',
	border: 'border-b-2',
	borderColor:
		'border-t-transparent border-b-transparent h:border-b-gray-300 h:border-b-blue-500 dark:h:border-b-cyan-500',
	borderRadius: '',
	color: 'text-gray-500 dark:text-gray-300',
	stroke: 'stroke-gray-500 dark:stroke-gray-300',
	...sharedBtn(
		active && {
			borderColor: 'border-t-transparent border-b-blue-500 dark:border-b-cyan-500',
			color: 'text-gray-600 dark:text-gray-200',
			...active,
		},
	),
});

export const textBtn = (active?) => ({
	color: 'text-gray-500 dark:text-gray-400',
	fontSize: 'text-inherit',
	hover: 'h:underline h:gray-700 h:dark:text-gray-100',
	...sharedBtn(active),
});

export const btnWrapper = {
	outline: 'focus-visible:outline',
	outlineColor: 'focus-visible:outline-blue-500 dark:focus-visible:outline-cyan-500',
	outlineOffset: 'outline-offset-1',
	width: 'w-inherit',
};

// Shared
export const sharedBtn = (active?) => ({
	align: 'text-center',
	animation: 'transition ease',
	display: 'flex-middle-inline',
	flex: 'shrink-0',
	fontFamily: 'font-secondary',
	fontSize: 'text-sm',
	fontWeight: 'font-normal',
	focus: 'focus:outline-none focus-visible:outline-none',
	position: 'relative',
	outline: 'outline-none',
	space: 'space-x-4',
	tracking: 'tracking-normal',
	whiteSpace: 'whitespace-nowrap',
	...active,
});
