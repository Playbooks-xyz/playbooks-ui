import { BtnWrapper } from 'interface/buttons';
import { Div } from 'interface/html';
import { FarIcon } from 'interface/icons';
import {
	iTable,
	iTableBody,
	iTableContainer,
	iTableData,
	iTableHead,
	iTableHeader,
	iTableHeaderRow,
	iTableRow,
} from 'interface/tables.types';
import { borderProps, tailwindClassBuilder } from 'tailwind';
import { isObject } from 'utils/helpers';

export const TableContainer = ({ id, name = 'TableContainer', className, children, ...tailwind }: iTableContainer) => {
	const base = {};
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const Table = ({ id, name = 'Table', className, children, ...tailwind }: iTable) => {
	const base = {
		divide: 'divide-y',
		divideColor: 'divide-gray-200',
		divideOpacity: 'divide-opacity-25',
		width: 'w-full',
	};
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<table data-name={name} className={classes}>
			{children}
		</table>
	);
};

export const TableHeader = ({ id, name = 'TableHeader', className, children, ...tailwind }: iTableHeader) => {
	const base = { border: 'border-b', ...borderProps };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<thead data-name={name} className={classes}>
			{children}
		</thead>
	);
};

export const TableHeaderRow = ({ id, name = 'TableHeaderRow', className, children, ...tailwind }: iTableHeaderRow) => {
	const base = {};
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return <tr className={classes}>{children}</tr>;
};

export const TableHead = ({
	id,
	name = 'TableHead',
	value,
	params,
	setParams,
	className,
	children,
	...tailwind
}: iTableHead) => {
	const base = {
		animation: 'transition-all ease',
		align: 'text-left',
		spacing: 'px-4 py-4',
		whiteSpace: 'whitespace-nowrap',
		fontSize: 'text-xs',
		fontWeight: 'font-medium',
		fontFamily: 'font-primary',
		color: 'gray-800 dark:gray-100',
		tracking: 'tracking-wider',
	};
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });
	const direction = value === params?.sortProp && params?.sortValue === 'asc' ? 'desc' : 'asc';

	return (
		<th data-name={name} className={classes}>
			{isObject(params) ? (
				<BtnWrapper onClick={() => setParams({ ...params, sortProp: value, sortValue: direction })} className='inherit'>
					{children}
					{value === params?.sortProp && params?.sortValue === 'asc' && (
						<FarIcon icon='sort-up' className='text-xs ml-2' />
					)}
					{value === params?.sortProp && params?.sortValue === 'desc' && (
						<FarIcon icon='sort-down' className='text-xs ml-2' />
					)}
					{value !== params?.sortProp && <FarIcon icon='sort' className='text-xs ml-2' />}
				</BtnWrapper>
			) : (
				<Div>{children}</Div>
			)}
		</th>
	);
};

export const TableBody = ({ id, name = 'TableBody', className, children, ...tailwind }: iTableBody) => {
	const base = {};
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<tbody data-name={name} className={classes}>
			{children}
		</tbody>
	);
};

export const TableRow = ({ id, name = 'TableRow', className, children, ...tailwind }: iTableRow) => {
	const base = { bgColor: '', border: 'border-b', ...borderProps };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<tr data-name={name} className={classes}>
			{children}
		</tr>
	);
};

export const TableData = ({
	id,
	name = 'TableData',
	title = false,
	value,
	className,
	children,
	...tailwind
}: iTableData) => {
	const base = {
		align: 'text-left',
		color: title ? 'gray-800 dark:gray-100' : 'gray-600 dark:gray-400',
		spacing: 'px-4 py-4',
		fontSize: 'text-sm',
		fontFamily: 'font-secondary',
		whitespace: 'whitespae-nowrap',
	};
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<td data-name={name} className={classes}>
			{value ? value : children}
		</td>
	);
};

// Docs:
// https://tailwindui.com/interface/application-ui/lists/tables
