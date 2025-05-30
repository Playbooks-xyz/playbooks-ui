import { borderProps } from 'utils';

export const table = {
	divide: 'divide-y',
	divideColor: 'divide-gray-200',
	divideOpacity: 'divide-opacity-25',
	width: 'w-full',
};

export const tableHeader = {
	border: 'border-b',
	...borderProps,
};

export const tableHeaderRow = {};

export const tableHead = {
	animation: 'transition-all ease',
	align: 'text-left',
	spacing: 'px-4 py-4',
	whiteSpace: 'whitespace-nowrap',
	fontSize: 'text-xs',
	fontWeight: 'font-medium',
	fontFamily: 'font-primary',
	color: 'text-gray-800 dark:text-gray-100',
	tracking: 'tracking-wider',
};

export const tableBody = {};

export const tableRow = {
	bgColor: '',
	border: 'border-b',
	...borderProps,
};

export const tableData = {
	align: 'text-left',
	spacing: 'px-4 py-4',
	fontSize: 'text-sm',
	fontFamily: 'font-secondary',
	whitespace: 'whitespace-nowrap',
};
