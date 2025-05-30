import { borderProps } from 'utils';

export const navBase = {
	bgColor: 'bg-white dark:bg-gray-900',
	...borderProps,
	borderRadius: 'rounded-md',
	display: 'block',
	position: 'relative',
};

export const navHeaderBase = {
	...borderProps,
	spacing: 'p-4',
};

export const navTitleBase = {
	fontWeight: 'font-bold',
};

export const navBodyBase = {
	spacing: 'p-4',
};

export const navListBase = {
	align: 'text-left',
	display: 'flex-column',
	space: 'space-y-1',
	spacing: '',
};

export const navItemBase = {
	display: 'block',
};

export const navBtnBase = {
	align: 'text-left',
	display: 'flex-start',
	space: 'space-x-4',
	width: 'w-full',
};

export const navLinkBase = {
	align: 'text-left',
	display: 'flex-start',
	space: 'space-x-4',
	width: 'w-full',
};