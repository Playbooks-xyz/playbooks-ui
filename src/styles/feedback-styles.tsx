import { borderProps } from 'utils';

export const feedbackBase = {
	align: 'text-left',
	bgColor: 'bg-gray-50 dark:bg-gray-800',
	border: '',
	...borderProps,
	borderRadius: 'rounded-md',
	spacing: 'p-8',
};

export const feedbackHeaderBase = {
	spacing: 'p-4',
};

export const feedbackIconBase = {
	color: 'text-gray-500',
};

export const feedbackBodyBase = {
	space: 'space-y-2',
	spacing: 'p-4',
};

export const feedbackPretitleBase = {
	color: 'text-gray-500',
	fontFamily: 'font-accent',
	fontSize: 'text-sm',
	fontWeight: 'font-medium',
	textTransform: 'uppercase',
	tracking: 'tracking-wider',
};

export const feedbackTitleBase = {
	color: 'text-gray-800 dark:text-white',
	fontWeight: 'font-semibold',
	textTransform: 'capitalize',
	tracking: 'tracking-wide',
};

export const feedbackTextBase = {
	fontFamily: 'font-secondary',
};

export const feedbackActionsBase = {
	display: 'flex-start',
	flex: 'shrink-0',
	space: 'space-x-4',
	spacing: 'p-4',
};