import { borderProps, computeSectionSize } from 'theme/utils';

export const modalWrapper = () => ({
	inset: 'inset-0',
	overflow: 'overflow-y-auto',
	position: 'fixed',
	zIndex: 'z-20',
});

export const modalBackdrop = ({ open }) => ({
	animation: 'transition-all',
	bgColor: 'bg-black dark:bg-gray-700',
	bgOpacity: open ? 'opacity-[85%]' : 'opacity-0',
	duration: 'duration-200',
	ease: 'ease-in',
	height: 'h-full',
	inset: 'inset-0',
	position: 'fixed',
});

export const modal = ({ open }) => ({
	animation: 'transition-all',
	align: 'text-left',
	bgColor: 'bg-white dark:bg-gray-900',
	border: 'border',
	...borderProps,
	borderRadius: 'rounded-lg',
	duration: 'duration-200',
	ease: 'ease-in',
	opacity: open ? 'opacity-100' : 'opacity-0',
	scale: open ? 'scale-100' : 'scale-90',
	spacing: 'mx-auto my-8',
	width: 'w-sm max-w-full',
	zIndex: 'z-30',
});

export const modalHeader = () => ({
	display: 'flex-between',
	border: 'border-b',
	...borderProps,
	space: 'space-x-4',
	spacing: 'p-4',
});

export const modalTitle = () => ({
	display: 'flex-start',
	fontWeight: 'font-bold',
	space: 'space-x-4',
	tracking: 'tracking-wide',
});

export const modalSubtitle = () => ({
	color: 'text-gray-600 dark:text-gray-400',
	fontFamily: 'font-secondary',
	fontWeight: 'font-normal',
	space: 'space-x-4',
});

export const modalBody = ({ size }) => ({
	align: 'text-left',
	...borderProps,
	spacing: 'p-4',
	size: computeSectionSize(size),
});

export const modalFooter = () => ({
	border: 'border-t',
	...borderProps,
	color: 'text-gray-500',
	fontSize: 'text-sm',
	display: 'flex-end',
	spacing: 'p-4',
	space: 'space-x-4',
});
