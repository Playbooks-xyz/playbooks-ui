import { borderProps } from 'utils';

export const feedback = {
	align: 'text-left',
	bgColor: 'bg-gray-50 dark:bg-gray-800',
	border: '',
	...borderProps,
	borderRadius: 'rounded-md',
	spacing: 'p-8',
};

export const feedbackHeader = {
	spacing: 'p-4',
};

export const feedbackIcon = {
	color: 'text-gray-500',
	fontSize: 'text-2xl',
};

export const feedbackBody = {
	space: 'space-y-2',
	spacing: 'p-4',
};

export const feedbackPretitle = {
	color: 'text-gray-500',
	fontFamily: 'font-accent',
	fontSize: 'text-sm',
	fontWeight: 'font-medium',
	textTransform: 'uppercase',
	tracking: 'tracking-wider',
};

export const feedbackTitle = {
	color: 'text-gray-800 dark:text-white',
	fontWeight: 'font-semibold',
	textTransform: 'capitalize',
	tracking: 'tracking-wide',
};

export const feedbackText = {
	fontFamily: 'font-secondary',
};

export const feedbackActions = {
	display: 'flex-start',
	flex: 'shrink-0',
	space: 'space-x-4',
	spacing: 'p-4',
};
