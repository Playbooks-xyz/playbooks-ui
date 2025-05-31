import { borderProps } from 'theme';

export const hero = {
	bgColor: 'bg-white dark:bg-gray-900',
	...borderProps,
	display: 'block',
	position: 'relative',
	spacing: 'py-8',
	width: 'w-full',
};

export const heroBg = {
	inset: 'inset-0',
	position: 'absolute',
};

export const heroImg = {
	aspect: 'aspect-[1/1]',
	bgColor: 'bg-gray-100 dark:bg-gray-800',
	border: '',
	...borderProps,
	borderRadius: 'rounded-md',
	color: 'text-gray-500',
	display: 'flex-middle',
	flex: 'shrink-0',
	overflow: 'overflow-hidden',
};

export const heroIcon = {
	aspect: 'aspect-[1/1]',
	bgColor: 'bg-gray-100 dark:bg-gray-800',
	border: '',
	...borderProps,
	borderRadius: 'rounded-md',
	color: 'text-gray-500',
	display: 'flex-middle',
	flex: 'shrink-0',
	fontSize: 'text-3xl',
	overflow: 'overflow-hidden',
};

export const heroBody = {
	align: 'text-left',
	space: 'space-y-1',
};

export const heroPretitle = {
	color: 'text-blue-500 dark:text-cyan-500',
	fontFamily: 'font-accent',
	fontSize: 'text-sm',
	fontWeight: 'font-medium',
	textTransform: 'uppercase',
	tracking: 'tracking-widest',
};

export const heroTitle = {
	display: 'flex-start',
	fontWeight: 'font-extrabold',
	leading: '!leading-tight',
	space: 'space-x-4',
	tracking: 'tracking-wide',
};

export const heroSubtitle = {
	color: 'text-gray-500 dark:text-gray-400',
	fontFamily: 'font-secondary',
	fontWeight: 'font-light',
	leading: '!leading-relaxed',
	tracking: 'tracking-normal',
};

export const heroText = {
	fontFamily: 'font-secondary',
	fontWeight: 'font-light',
	tracking: 'tracking-wide',
};

export const heroActions = {
	display: 'lg:flex-end',
	space: 'space-y-4 space-x-0 lg:space-y-0 lg:space-x-4',
	width: 'w-full',
};
