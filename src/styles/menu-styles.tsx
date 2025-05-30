import { borderProps } from 'utils';

export const menu = {
	zIndex: 'z-20',
};

export const menuBackdrop = {
	bgColor: 'bg-black dark:bg-gray-700',
	duration: 'duration-200',
	ease: 'ease-in',
	height: 'h-full',
	inset: 'left-0 right-0 bottom-0',
	position: 'fixed',
	transition: 'transition-all',
	zIndex: 'z-1',
};

export const menuToggle = {
	display: 'flex-between',
	space: 'space-x-4',
};

export const menuMenu = {
	bgColor: 'bg-white dark:bg-gray-900',
	border: 'border-b',
	...borderProps,
	ease: 'ease-in',
	height: 'max-h-[100vh]',
	inset: 'right-0 left-0',
	position: 'absolute',
	shadow: 'shadow-lg',
	shadowColor: 'dark:shadow-gray-800/25',
	textAlign: 'text-left',
	width: 'min-w-full w-auto',
	overflow: 'overflow-hidden overflow-y-scroll',
};

export const menuMenuWrapper = {
	position: 'absolute',
	width: 'w-full',
	transition: 'transition-all',
	zIndex: 'z-20',
};

export const menuBlock = {
	spacing: 'p-4',
};

export const menuTitle = {
	fontWeight: 'font-bold',
	spacing: 'px-3 mb-4',
	textTransform: 'capitalize',
	tracking: 'tracking-wide',
};

export const menuSubtitle = {
	color: 'text-gray-500 dark:text-gray-300',
	whitespace: 'whitespace-nowrap',
	fontWeight: 'font-normal',
	fontSize: 'text-sm',
};

export const menuList = {
	display: 'flex-column',
	space: 'space-y-2',
	spacing: 'py-4',
};

export const menuItem = {
	display: 'flex',
	spacing: '',
	width: 'w-inherit',
};

export const menuBtn = {
	align: 'text-left',
	display: 'flex-start',
};

export const menuLink = {
	align: 'text-left',
	display: 'flex-start',
	width: 'w-full',
};
