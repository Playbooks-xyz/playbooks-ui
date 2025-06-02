import { computeTooltipAnimation } from 'theme';

export const tooltip = ({ open, placement }) => ({
	animation: 'transition-all',
	cursor: 'cursor-pointer',
	duration: 'duration-100',
	ease: 'ease-in',
	opacity: open ? 'opacity-100' : 'opacity-0',
	translate: open ? 'translate-x-0' : computeTooltipAnimation(placement),
	zIndex: 'z-10',
});

export const tooltipInner = () => ({
	bgColor: 'bg-gray-800 dark:bg-gray-800',
	borderRadius: 'rounded-md',
	color: 'white',
	fontSize: 'text-sm',
	spacing: 'px-4 py-3 m-1',
	width: 'w-auto',
});

export const tooltipArrow = () => ({
	bgColor: 'bg-gray-800',
	borderRadius: 'rounded-sm',
	rotate: 'rotate-45',
	size: 'h-4 w-4',
});
