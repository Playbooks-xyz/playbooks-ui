import { borderProps } from 'utils';

export const headerBase = {
	border: ' border-b',
	...borderProps,
	display: 'flex-between',
	position: 'relative',
	space: 'space-x-4',
	spacing: 'py-4',
	width: 'w-full',
};

export const headerTitleBase = {
	display: 'flex-start',
	flex: 'grow',
	fontWeight: 'font-bold',
	space: 'space-x-4',
	tracking: 'tracking-wide',
	textTransform: 'capitalize',
};

export const headerSubtitleBase = {
	color: 'text-gray-600 dark:text-gray-300',
	fontFamily: 'font-secondary',
	fontWeight: 'font-normal',
	tracking: 'tracking-normal',
};

export const headerTextBase = {
	color: 'text-gray-700 dark:text-gray-100',
	fontWeight: 'font-light',
	fontFamily: 'font-secondary',
	tracking: 'tracking-normal',
};

export const headerActionsBase = {
	display: 'flex-end',
	space: 'space-x-4',
};