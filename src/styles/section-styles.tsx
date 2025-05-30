import { borderProps } from 'utils';

export const sectionBase = {
	bgColor: 'bg-white dark:bg-gray-900',
	border: 'border',
	...borderProps,
	borderRadius: 'rounded-md',
	position: 'relative',
	shadow: '',
	spacing: 'mb-4',
	width: 'w-full',
};

export const sectionHeaderBase = {
	spacing: 'p-4',
	border: 'border-b',
	...borderProps,
	display: 'flex-between',
	space: 'space-x-4',
	width: 'w-full',
};

export const sectionPretitleBase = {
	color: 'text-gray-500',
	fontFamily: 'font-accent',
	fontSize: 'text-sm',
	fontWeight: 'font-medium',
	textTransform: 'uppercase',
	tracking: 'tracking-wider',
};

export const sectionTitleBase = {
	display: 'flex-start',
	fontWeight: 'font-bold',
	leading: 'leading-normal',
	space: 'space-x-4',
	tracking: 'tracking-wide',
};

export const sectionSubtitleBase = {
	color: 'text-gray-600 dark:text-gray-300',
	fontWeight: 'font-light',
	fontFamily: 'font-secondary',
	tracking: 'tracking-normal',
};

export const sectionTextBase = {
	fontFamily: 'font-secondary',
};

export const sectionActionsBase = {
	display: 'lg:flex-end',
	space: 'space-y-4 space-x-0 lg:space-y-0 lg:space-x-4',
	width: 'w-full lg:w-1/2',
};

export const sectionBodyBase = {
	spacing: 'p-4',
	...borderProps,
	width: 'w-full',
};

export const sectionHrBase = {};

export const sectionFooterBase = {
	display: 'flex-between',
	border: 'border-t',
	...borderProps,
	space: 'space-x-4',
	spacing: 'p-4',
	width: 'w-full',
};