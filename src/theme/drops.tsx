import { borderProps } from 'theme/utils';

export const drop = () => ({});

export const dropToggle = () => ({
	display: 'flex-between',
	space: 'space-x-4',
});

export const dropMenu = ({ open }) => ({
	animation: 'transition-all',
	bgColor: 'bg-white dark:bg-gray-900',
	border: 'border',
	...borderProps,
	borderRadius: 'rounded-md',
	duration: 'duration-200',
	ease: 'ease',
	opacity: open ? 'opacity-100' : 'opacity-0',
	overflow: 'overflow-hidden overflow-y-scroll',
	scale: open ? 'scale-100' : 'scale-90',
	shadow: 'shadow-lg',
	shadowColor: 'dark:shadow-gray-800/25',
	textAlign: 'text-left',
	translate: open ? 'translate-y-0' : 'translate-y-4',
	width: 'w-auto',
	zIndex: 'z-10',
});

export const dropHeader = () => ({
	align: 'text-left',
	border: 'border-b',
	...borderProps,
	space: 'space-y-1',
	spacing: 'px-6 py-4',
});

export const dropTitle = () => ({
	color: 'text-gray-800 dark:text-white',
	whitespace: 'whitespace-nowrap',
	fontWeight: 'font-semibold',
	textTransform: 'capitalize',
	tracking: 'tracking-wide',
});

export const dropSubtitle = () => ({
	color: 'text-gray-500 dark:text-gray-300',
	whitespace: 'whitespace-nowrap',
	fontWeight: 'font-normal',
	fontSize: 'text-sm',
});

export const dropList = () => ({
	border: '',
	...borderProps,
	space: 'space-y-1',
	spacing: 'p-2',
});

export const dropItem = () => ({
	display: 'block',
	width: 'w-full',
});

export const dropBtn = () => ({
	align: 'text-left',
	display: 'flex-start',
	space: 'space-x-4',
	width: 'w-full',
});

export const dropLink = () => ({
	align: 'text-left',
	display: 'flex-start',
	space: 'space-x-4',
	width: 'w-full',
});
