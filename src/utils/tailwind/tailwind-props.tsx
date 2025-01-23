// Breadcrumbs
export const breadcrumbBtnProps = (active?) => ({
	cursor: 'cursor-pointer',
	color: 'gray-600 dark:gray-400',
	fontFamily: 'font-accent',
	fontWeight: 'font-medium',
	textTransform: 'uppercase',
	tracking: 'tracking-widest',
	fontSize: 'text-sm',
	...(active && {
		cursor: 'cursor-default',
		...active,
	}),
});

// Buttons
export const btnProps = (active?) => ({
	bgColor: 'bg-gradient-to-r from-cyan-500 to-indigo-500',
	bgPosition: 'bg-pos-0 h:bg-pos-100',
	bgSize: 'bg-size-200',
	borderRadius: 'rounded-md',
	color: 'white',
	stroke: 'stroke-white dark:stroke-white',
	...btnSharedProps(active),
});

export const btnAccentProps = (active?) => ({
	bgColor: 'bg-gray-200 dark:bg-gray-700',
	bgOpacity: 'bg-opacity-0 dark:bg-opacity-0',
	border: '',
	borderColor: 'border-gray-300 dark:border-gray-600',
	borderOpacity: 'border-opacity-50 dark:border-opacity-50',
	borderRadius: 'rounded-md',
	color: 'gray-600 dark:gray-300',
	stroke: 'stroke-gray-500 dark:stroke-gray-300',
	hover: 'h:bg-opacity-50 dark:h:bg-opacity-50',
	...btnSharedProps(
		active && {
			bgOpacity: 'bg-opacity-50 dark:bg-opacity-50',
			borderOpacity: 'border-opacity-100 dark:border-opacity-100',
			...active,
		},
	),
});

export const btnBorderProps = (active?) => ({
	bgColor: 'bg-transparent',
	bgOpacity: 'bg-opacity-100',
	border: 'border',
	borderColor: 'border-gray-300 dark:border-gray-600',
	borderOpacity: 'border-opacity-50 dark:border-opacity-50',
	borderRadius: 'rounded-md',
	color: 'gray-600 dark:gray-300',
	stroke: 'stroke-gray-600 dark:stroke-gray-300',
	hover: 'h:border-opacity-100 dark:h:border-opacity-100 h:opacity-100',
	...btnSharedProps(
		active && {
			borderColor: 'border-cyan-500 dark:border-cyan-500',
			borderOpacity: 'border-opacity-100 dark:border-opacity-100',
			color: 'cyan-500',
			stroke: 'stroke-cyan-500',
			...active,
		},
	),
});

export const btnTabProps = (active?) => ({
	bgColor: 'bg-gray-0',
	bgOpacity: 'bg-opacity-100',
	border: 'border-b-2',
	borderColor:
		'border-t-transparent border-b-transparent h:border-b-gray-300 h:border-b-blue-500 dark:h:border-b-cyan-500',
	borderRadius: '',
	color: 'gray-500 dark:gray-300',
	stroke: 'stroke-gray-500 dark:stroke-gray-300',
	...btnSharedProps(
		active && {
			borderColor: 'border-t-transparent border-b-blue-500 dark:border-b-cyan-500',
			color: 'gray-600 dark:gray-200',
			...active,
		},
	),
});

export const btnTextProps = (active?) => ({
	color: 'gray-500 dark:gray-400',
	fontSize: 'text-inherit',
	hover: 'h:underline h:gray-700 h:dark:gray-100',
	...btnSharedProps(active),
});

export const btnSharedProps = (active?) => ({
	align: 'text-center',
	animation: 'transition ease',
	display: 'flex-middle-inline',
	flex: 'shrink-0',
	fontFamily: 'font-secondary',
	fontSize: 'text-sm',
	fontWeight: 'font-normal',
	position: 'relative',
	outline: 'focus:outline-none',
	space: 'space-x-4',
	tracking: 'tracking-normal',
	whiteSpace: 'whitespace-nowrap',
	...active,
});

// Checkbox
export const checkboxProps = active => ({
	animation: 'transition-all ease',
	bgColor:
		'bg-gray-100 dark:bg-gray-800 checked:bg-blue-500 checked:h:bg-blue-500 checked:f:bg-blue-500 dark:checked:bg-cyan-500 dark:checked:h:bg-cyan-500 dark:checked:f:bg-cyan-500',
	border: 'border-2',
	borderColor: 'border-gray-400 dark:border-gray-600 f:border-blue-500 dark:border-gray-500',
	borderOpacity: 'border-opacity-50 dark:border-opacity-50',
	borderRadius: 'rounded-md',
	cursor: 'cursor-pointer',
	ring: 'ring-none',
	ringColor:
		'ring-transparent checked:ring-transparent dark:checked:ring-transparent f:ring-transparent dark:f:ring-transparent',
	ringOffset: 'ring-offset-4 checked:ring-offset-4 f:ring-offset-4',
	ringOffsetColor:
		'checked:ring-offset-blue-500/50 dark:checked:ring-offset-cyan-500/50 f:ring-offset-blue-500/50 dark:f:ring-offset-cyan-500/50',
	size: 'h-6 w-6',
});

// Inputs
export const inputProps = (variant?) => ({
	align: 'text-left',
	animation: 'transition ease',
	display: 'block',
	cursor: 'cursor-auto',
	color: 'gray-600 dark:gray-200',
	bgColor: 'bg-white dark:bg-gray-900',
	border: 'border',
	borderColor: 'border-gray-400 dark:border-gray-600 f:border-blue-500 dark:f:border-cyan-500',
	borderOpacity: 'border-opacity-50 dark:border-opacity-50',
	borderRadius: 'rounded-md',
	fontFamily: 'font-secondary',
	fontSize: 'text-sm',
	outline: 'outline-none', // override default
	ring: 'f:ring-1', // override default
	ringColor: 'f:ring-transparent dark:f:ring-transparent', // override default
	ringOffset: 'f:ring-offset-1 dark:f:ring-offset-1',
	ringOffsetColor: 'f:ring-offset-blue-500 dark:f:ring-offset-cyan-500',
	placeholderColor: 'placeholder:gray-500 dark:placeholder:gray-400',
	tracking: 'tracking-wide',
	width: 'w-full',
	...(variant === 'group' && {
		bgColor: 'bg-transparent',
		border: 'border-none',
		ring: 'f:ring-0',
		ringColor: 'f:ring-transparent',
		ringOffset: 'f:ring-offset-none',
		ringOffsetColor: 'f:ring-offset-transparent',
	}),
});

// Interactives
export const interactiveProps = () => ({
	outline: 'focus-visible:outline',
	outlineColor: 'focus-visible:outline-blue-500 dark:focus-visible:outline-cyan-500',
	outlineOffset: 'outline-offset-1',
});

// Pagination
export const paginationProps = (active?) => ({
	spacing: 'px-4 py-2',
	border: '-border-x',
	borderColor: 'border-gray-400 dark:border-gray-700',
	borderOpacity: 'border-opacity-25',
	bgColor: 'h:bg-gray-100 dark:h:bg-gray-800',
	bgOpacity: 'bg-opacity-100',
	color: 'gray-500 dark:gray-300',
	borderRadius: '',
	fontSize: 'text-sm',
	fontWeight: 'font-medium',
	...(active && {
		bgColor: 'bg-gray-200 dark:bg-gray-700',
		color: 'gray-600 dark:gray-200',
	}),
});

// Range
export const rangeProps = () => ({
	animation: 'transition-all ease',
	appearance: 'appearance-none',
	bgColor: 'bg-transparent',
	borderColor: 'border-gray-400 dark:border-gray-700',
	borderOpacity: 'border-opacity-25',
	borderRadius: 'rounded-full',
	cursor: 'cursor-pointer',
	sliderTrack: '[&::-webkit-slider-runnable-track]:appearance-none',
	sliderTrackSize: '[&::-webkit-slider-runnable-track]:h-2',
	sliderTrackBg: '[&::-webkit-slider-runnable-track]:bg-gray-100 [&::-webkit-slider-runnable-track]:dark:bg-gray-800',
	sliderTrackBorder: '[&::-webkit-slider-runnable-track]:rounded-full',
	sliderThumb: '[&::-webkit-slider-thumb]:appearance-none',
	sliderThumbPosition: '[&::-webkit-slider-thumb]:-mt-2',
	sliderThumbSize: '[&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6',
	sliderThumbBg: '[&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:dark:bg-cyan-500',
	sliderThumbBorder: '[&::-webkit-slider-thumb]:border-2',
	sliderThumbBorderColor: '[&::-webkit-slider-thumb]:border-gray-800',
	sliderThumbBorderRadius: '[&::-webkit-slider-thumb]:rounded-full',
	size: 'h-6',
	width: 'w-full',
});

// Tables
export const tableHeadProps = {
	transition: 'transition-all ease',
	align: 'text-left',
	spacing: 'p-4',
	whiteSpace: 'whitespace-nowrap',
	fontSize: 'text-xs',
	fontWeight: 'font-semibold',
	fontFamily: 'font-primary',
	width: 'w-full',
	color: 'gray-800 dark:gray-100',
	textTransform: 'uppercase',
};
