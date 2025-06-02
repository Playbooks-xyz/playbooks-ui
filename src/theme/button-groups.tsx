import { borderProps } from 'theme/utils';

export const btnGroup = () => ({
	...borderProps,
	border: 'border',
	borderRadius: 'rounded-md',
	display: 'flex-start',
	divide: 'divide-x',
	divideColor: 'divide-gray-400',
	divideOpacity: 'divide-opacity-25',
	flex: 'shrink-0',
	overflow: 'overflow-hidden',
	space: 'space-x-0',
	width: 'width-inherit',
});
