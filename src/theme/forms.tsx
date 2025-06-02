import { computeInputSize } from 'theme/utils';

export const form = () => ({});

export const formCheckbox = () => ({
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

export const formGroup = () => ({
	space: 'space-y-2',
	spacing: 'mb-4',
	width: 'w-full',
});

export const formLabel = () => ({
	color: 'text-gray-600 dark:text-gray-400',
	cursor: 'cursor-pointer',
	display: 'inline-block',
	fontFamily: 'font-secondary',
	fontSize: 'text-sm',
	fontWeight: 'font-medium',
	spacing: 'p-1',
	tracking: 'tracking-wide',
});

export const formInput = ({ size, variant }) => ({
	align: 'text-left',
	animation: 'transition ease',
	bgColor: 'bg-white dark:bg-gray-900',
	border: 'border',
	borderColor: 'border-gray-400 dark:border-gray-600 f:border-blue-500 dark:f:border-cyan-500',
	borderOpacity: 'border-opacity-50 dark:border-opacity-50',
	borderRadius: 'rounded-md',
	color: 'text-gray-600 dark:text-gray-200',
	cursor: 'cursor-auto',
	display: 'block',
	fontFamily: 'font-secondary',
	fontSize: 'text-sm',
	outline: 'outline-none',
	placeholderColor: 'placeholder:gray-500 dark:placeholder:gray-400',
	ring: 'f:ring-1',
	ringColor: 'f:ring-transparent dark:f:ring-transparent',
	ringOffset: 'f:ring-offset-1 dark:f:ring-offset-1',
	ringOffsetColor: 'f:ring-offset-blue-500 dark:f:ring-offset-cyan-500',
	tracking: 'tracking-wide',
	width: 'w-full',
	...computeInputSize(size),
	...(variant === 'group' && {
		bgColor: 'bg-transparent',
		border: 'border-none',
		ring: 'f:ring-0',
		ringColor: 'f:ring-transparent',
		ringOffset: 'f:ring-offset-none',
		ringOffsetColor: 'f:ring-offset-transparent',
	}),
});

export const formDivInput = ({ size, variant }) => ({
	...formInput({ size, variant }),
	color: 'text-gray-600 dark:text-gray-200',
	display: 'flex-center',
	overflow: 'overflow-x-scroll',
});

export const formFileInput = () => ({});

export const formRange = () => ({
	animation: 'transition-all ease',
	appearance: 'appearance-none',
	bgColor: 'bg-transparent',
	borderColor: 'border-gray-400 dark:border-gray-700',
	borderOpacity: 'border-opacity-25',
	borderRadius: 'rounded-full',
	cursor: 'cursor-pointer',
	size: 'h-6',
	sliderThumb: '[&::-webkit-slider-thumb]:appearance-none',
	sliderThumbBg: '[&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:dark:bg-cyan-500',
	sliderThumbBorder: '[&::-webkit-slider-thumb]:border-2',
	sliderThumbBorderColor: '[&::-webkit-slider-thumb]:border-gray-800',
	sliderThumbBorderRadius: '[&::-webkit-slider-thumb]:rounded-full',
	sliderThumbPosition: '[&::-webkit-slider-thumb]:-mt-2',
	sliderThumbSize: '[&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6',
	sliderTrack: '[&::-webkit-slider-runnable-track]:appearance-none',
	sliderTrackBg: '[&::-webkit-slider-runnable-track]:bg-gray-100 [&::-webkit-slider-runnable-track]:dark:bg-gray-800',
	sliderTrackBorder: '[&::-webkit-slider-runnable-track]:rounded-full',
	sliderTrackSize: '[&::-webkit-slider-runnable-track]:h-2',
	width: 'w-full',
});

export const formSelect = ({ size, variant }) => ({
	...formInput({ size, variant }),
	cursor: 'cursor-pointer',
});

export const formText = () => ({
	color: 'text-gray-500 dark:text-gray-400',
	fontSize: 'text-xs',
	spacing: 'mx-1',
	tracking: 'tracking-wider',
});
