import { borderProps } from 'theme';

export const drop = {};

export const dropToggle = {
	display: 'flex-between',
	space: 'space-x-4',
};

export const dropMenu = {
	bgColor: 'bg-white dark:bg-gray-900',
	border: 'border',
	...borderProps,
	borderRadius: 'rounded-md',
	shadow: 'shadow-lg',
	shadowColor: 'dark:shadow-gray-800/25',
	textAlign: 'text-left',
	transition: 'transition-opacity transition-transform ease',
	width: 'w-auto',
	overflow: 'overflow-hidden overflow-y-scroll',
	zIndex: 'z-10',
};

export const dropHeader = {
	align: 'text-left',
	border: 'border-b',
	...borderProps,
	space: 'space-y-1',
	spacing: 'px-6 py-4',
};

export const dropTitle = {
	color: 'text-gray-800 dark:text-white',
	whitespace: 'whitespace-nowrap',
	fontWeight: 'font-semibold',
	textTransform: 'capitalize',
	tracking: 'tracking-wide',
};

export const dropSubtitle = {
	color: 'text-gray-500 dark:text-gray-300',
	whitespace: 'whitespace-nowrap',
	fontWeight: 'font-normal',
	fontSize: 'text-sm',
};

export const dropList = {
	border: '',
	...borderProps,
	space: 'space-y-1',
	spacing: 'p-2',
};

export const dropItem = {
	display: 'block',
	width: 'w-full',
};

export const dropBtn = {
	align: 'text-left',
	display: 'flex-start',
	space: 'space-x-4',
	width: 'w-full',
};

export const dropLink = {
	align: 'text-left',
	display: 'flex-start',
	space: 'space-x-4',
	width: 'w-full',
};
