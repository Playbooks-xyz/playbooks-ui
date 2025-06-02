import { borderProps, computeTagImgSize, computeTagSize } from 'theme/utils';

export const tagsWrapper = () => ({
	display: 'flex-start',
	spacing: '',
	flex: 'flex-wrap',
});

export const tag = ({ size }) => ({
	bgColor: 'bg-gray-200 dark:bg-gray-700',
	bgOpacity: 'bg-opacity-50 dark:bg-opacity-50',
	borderColor: 'border-gray-500 dark:border-gray-400',
	borderOpacity: 'border-opacity-50',
	borderRadius: 'rounded-md',
	color: 'text-gray-500 dark:text-gray-300',
	display: 'flex-between-inline',
	flex: 'shrink-0',
	size: computeTagSize(size),
	spacing: 'mb-2 mr-4',
	tracking: 'tracking-wide',
});

export const tagImg = ({ size }) => ({
	borderRadius: 'rounded-full',
	size: computeTagImgSize(size),
});

export const tagBody = () => ({
	...borderProps,
	fontSize: 'text-sm',
	space: 'space-x-2',
	spacing: 'px-2',
});

export const tagActions = () => ({
	display: 'flex-end',
	flex: 'shrink-0',
	space: 'space-x-2',
});
