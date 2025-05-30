import { borderProps } from 'utils';

export const accordionBase = {
	border: '',
	...borderProps,
	transition: 'transition-all',
	origin: 'origin-top',
};

export const accordionToggleBase = {
	animation: 'transition-all ease',
	border: '',
	...borderProps,
	borderRadius: 'rounded-md',
	color: 'text-gray-500',
	display: 'flex-between',
	fontFamily: 'font-accent',
	fontSize: 'text-sm',
	fontWeight: 'font-medium',
	hover: 'h:bg-gray-100 dark:h:bg-gray-800',
	nextIcon: { icon: 'chevron-down', rotate: 'rotate-0', transition: 'transition-all ease' },
	spacing: 'py-4',
	span: { display: 'flex-start', flex: 'grow', width: 'w-full' },
	width: 'w-full',
};

export const accordionTitleBase = {
	display: 'flex-start',
	fontWeight: 'font-medium',
};

export const accordionBodyWrapperBase = {
	overflow: 'overflow-hidden',
	origin: 'origin-top',
	ease: 'ease-out',
	transition: 'transition-all',
};

export const accordionBodyBase = {
	...borderProps,
};

export const accordionTextBase = {
	fontSize: 'text-sm',
	fontWeight: 'font-light',
};