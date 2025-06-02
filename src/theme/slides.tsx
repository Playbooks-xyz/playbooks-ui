import { borderProps, computeSlideAnimation } from 'theme/utils';

export const slideWrapper = () => ({
	inset: 'inset-0',
	position: 'fixed',
	zIndex: 'z-20',
});

export const slideBackdrop = ({ open }) => ({
	animation: 'transition-all',
	bgColor: 'bg-black dark:bg-gray-700',
	bgOpacity: open ? 'opacity-[85%]' : 'opacity-0',
	duration: 'duration-200',
	ease: 'ease-in',
	height: 'h-full',
	inset: 'inset-0',
	position: 'fixed',
});

export const slide = ({ open, placement }) => ({
	animation: 'transition-all',
	bgColor: 'bg-white dark:bg-gray-900',
	display: 'flex-column',
	duration: 'duration-200',
	ease: 'ease-out',
	height: 'h-full',
	inset: placement === 'left' ? 'left-0' : 'right-0',
	opacity: open ? 'opacity-100' : 'opacity-0',
	position: 'fixed',
	transform: 'transform',
	translate: open ? 'translate-x-0' : computeSlideAnimation(placement),
	shadow: placement === 'left' ? 'shadow-r-lg' : 'shadow-l-lg',
	width: 'w-[400px] max-w-80vw min-w-40vw',
	zIndex: 'z-20',
});

export const slideHeader = () => ({
	display: 'flex-between',
	border: 'border-b',
	...borderProps,
	spacing: 'p-4',
	width: 'w-full',
});

export const slideTitle = () => ({
	fontWeight: 'font-bold',
	tracking: 'tracking-wide',
});

export const slideBody = () => ({
	display: 'grow',
	overflow: 'overflow-y-scroll',
	spacing: 'p-4',
});

export const slideFooter = () => ({
	border: 'border-t',
	...borderProps,
	display: 'flex-between',
	space: 'space-x-4',
	spacing: 'p-4',
});
