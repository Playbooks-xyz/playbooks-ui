import { borderProps } from 'theme/utils';

export const pagination = () => ({
	position: 'inline-flex',
	border: 'border',
	...borderProps,
	borderRadius: 'rounded-md',
	overflow: 'overflow-hidden',
});

export const paginationBtn = (props?: { active: boolean }) => ({
	bgColor: 'h:bg-gray-100 dark:h:bg-gray-800',
	bgOpacity: 'bg-opacity-100',
	border: '-border-x',
	borderColor: 'border-gray-400 dark:border-gray-700',
	borderOpacity: 'border-opacity-25',
	borderRadius: '',
	color: 'text-gray-500 dark:text-gray-300',
	fontSize: 'text-sm',
	fontWeight: 'font-medium',
	spacing: 'px-4 py-2',
	...(props?.active && {
		bgColor: 'bg-gray-200 dark:bg-gray-700',
		color: 'text-gray-600 dark:text-gray-200',
	}),
});
