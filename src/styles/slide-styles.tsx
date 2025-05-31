import { borderProps } from 'theme';

export const slideWrapper = {
	position: 'fixed',
	inset: 'inset-0',
	zIndex: 'z-20',
};

export const slideBackdrop = {
	bgColor: 'bg-black dark:bg-gray-700',
	duration: 'duration-200',
	ease: 'ease-in',
	height: 'h-full',
	inset: 'inset-0',
	position: 'fixed',
	transition: 'transition-all',
};

export const slide = {
	bgColor: 'bg-white dark:bg-gray-900',
	ease: 'ease-out',
	display: 'flex-column',
	duration: 'duration-200',
	height: 'h-full',
	position: 'fixed',
	transition: 'transition-all',
	transform: 'transform',
	width: 'w-[400px] max-w-80vw min-w-40vw',
	zIndex: 'z-20',
};

export const slideHeader = {
	display: 'flex-between',
	border: 'border-b',
	...borderProps,
	spacing: 'p-4',
	width: 'w-full',
};

export const slideTitle = {
	fontWeight: 'font-bold',
	tracking: 'tracking-wide',
};

export const slideBody = {
	display: 'grow',
	overflow: 'overflow-y-scroll',
	spacing: 'p-4',
};

export const slideFooter = {
	border: 'border-t',
	...borderProps,
	spacing: 'p-4',
};
