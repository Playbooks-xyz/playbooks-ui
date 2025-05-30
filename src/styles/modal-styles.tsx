import { borderProps } from 'utils';

export const modalWrapperBase = {
	position: 'fixed',
	inset: 'inset-0',
	overflow: 'overflow-y-auto',
	zIndex: 'z-20',
};

export const modalBackdropBase = {
	bgColor: 'bg-black dark:bg-gray-700',
	duration: 'duration-200',
	ease: 'ease-in',
	height: 'h-full',
	inset: 'inset-0',
	position: 'fixed',
	transition: 'transition-all',
};

export const modalBase = {
	align: 'text-left',
	bgColor: 'bg-white dark:bg-gray-900',
	border: 'border',
	...borderProps,
	borderRadius: 'rounded-lg',
	duration: 'duration-200',
	ease: 'ease-in',
	spacing: 'mx-auto my-8',
	transition: 'transition-all',
	width: 'w-sm max-w-full',
	zIndex: 'z-30',
};

export const modalHeaderBase = {
	display: 'flex-between',
	border: 'border-b',
	...borderProps,
	space: 'space-x-4',
	spacing: 'p-4',
};

export const modalTitleBase = {
	display: 'flex-start',
	fontWeight: 'font-bold',
	space: 'space-x-4',
	tracking: 'tracking-wide',
};

export const modalSubtitleBase = {
	color: 'text-gray-600 dark:text-gray-400',
	fontWeight: 'font-normal',
	fontFamily: 'font-secondary',
	space: 'space-x-4',
};

export const modalBodyBase = {
	align: 'text-left',
	...borderProps,
	spacing: 'p-4',
};

export const modalFooterBase = {
	border: 'border-t',
	...borderProps,
	color: 'text-gray-500',
	fontSize: 'text-sm',
	display: 'flex-end',
	spacing: 'p-4',
	space: 'space-x-4',
};