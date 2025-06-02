import { computeAvatarSize, computeBadgeSize } from 'theme/utils';

export const avatar = () => ({
	display: 'flex-start',
	space: 'space-x-4',
	width: 'w-full',
});

export const avatarBadge = ({ size }) => ({
	bgColor: 'bg-blue-500 dark:bg-cyan-500',
	border: 'border-2',
	borderColor: 'border-white dark:border-gray-900',
	borderOpacity: 'border-opacity-100',
	borderRadius: 'rounded-full',
	color: 'white',
	fontSize: 'text-sm',
	spacing: 'w-6 h-6',
	flex: 'flex-middle',
	size: computeBadgeSize(size),
});

export const avatarImg = ({ size }) => ({
	aspect: 'aspect-[1/1]',
	borderColor: 'border-gray-100 dark:border-gray-900',
	borderRadius: 'rounded-full',
	flex: 'shrink-0',
	size: computeAvatarSize(size),
});

export const avatarBody = () => ({});

export const avatarTitle = () => ({
	color: 'text-gray-700 dark:text-gray-200',
	fontWeight: 'font-bold',
	textDecoration: 'capitalize',
});

export const avatarText = () => ({
	fontWeight: 'font-normal',
	fontSize: 'text-sm',
});

export const avatarActions = () => ({
	display: 'flex-end',
	flex: 'shrink-0',
	space: 'space-x-2',
});
