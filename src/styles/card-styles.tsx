import { borderProps } from 'utils';

export const card = {
	animation: 'transition-all ease',
	border: 'border',
	...borderProps,
	borderRadius: 'rounded-md',
	color: 'text-gray-400',
	width: 'w-full',
};

export const cardHeader = {
	bgColor: 'bg-gray-100 dark:bg-gray-800',
	...borderProps,
	borderRadius: 'rounded-md',
};

export const cardIcon = {
	color: 'text-gray-500',
	fontSize: 'text-xl',
};

export const cardImg = {
	bgColor: 'bg-gray-100 dark:bg-gray-800',
	width: 'w-full',
};

export const cardBody = {
	align: 'text-left',
	...borderProps,
	space: 'space-y-1',
	spacing: 'p-4',
};

export const cardPretitle = {
	color: 'text-blue-500 dark:text-cyan-500',
	fontFamily: 'font-accent',
	fontSize: 'text-sm',
	fontWeight: 'font-book',
	textTransform: 'capitalize',
	tracking: 'tracking-wider',
};

export const cardTitle = {
	display: 'flex-start',
	fontWeight: 'font-semibold',
	space: 'space-x-4',
};

export const cardSubtitle = {
	color: 'text-gray-600 dark:text-gray-300',
	fontWeight: 'font-light',
	fontSize: 'text-base',
	space: 'space-x-4',
	tracking: 'tracking-normal',
};

export const cardText = {
	fontSize: 'text-sm',
	fontWeight: 'font-light',
};

export const cardFooter = {
	border: 'border-t',
	...borderProps,
	color: 'text-gray-500',
	display: 'flex-between',
	fontSize: 'text-sm',
	space: 'space-x-4',
	spacing: 'p-4',
};

export const cardActions = {
	display: 'flex-start',
	flex: 'shrink-0',
	space: 'space-x-4',
};
