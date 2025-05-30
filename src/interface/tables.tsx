import { BtnWrapper } from 'interface/buttons';
import { Div } from 'interface/html';
import { FarIcon } from 'interface/icons';
import {
	iTable,
	iTableBody,
	iTableData,
	iTableHead,
	iTableHeader,
	iTableHeaderRow,
	iTableRow,
} from 'interface/tables.types';
import { borderProps, tailwindClassBuilder } from 'utils';
import { isObject } from 'utils/helpers';

export const Table = ({ id, name = 'Table', className, children, ...tailwind }: iTable) => {
	const base = {
		divide: 'divide-y',
		divideColor: 'divide-gray-200',
		divideOpacity: 'divide-opacity-25',
		width: 'w-full',
	};
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<table name={name} className={classes}>
			{children}
		</table>
	);
};

export const TableHeader = ({ id, name = 'TableHeader', className, children, ...tailwind }: iTableHeader) => {
	const base = { border: 'border-b', ...borderProps };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<thead name={name} className={classes}>
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
	alt = 'sort table',
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
		color: 'text-gray-800 dark:text-gray-100',
		tracking: 'tracking-wider',
	};
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });
	const direction = value === params?.sortProp && params?.sortValue === 'asc' ? 'desc' : 'asc';

	return (
		<th name={name} className={classes}>
			{isObject(params) ? (
				<BtnWrapper
					alt={alt}
					onClick={() => setParams({ ...params, sortProp: value, sortValue: direction })}
					className='inherit'>
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
		<tbody name={name} className={classes}>
			{children}
		</tbody>
	);
};

export const TableRow = ({ id, name = 'TableRow', className, children, ...tailwind }: iTableRow) => {
	const base = { bgColor: '', border: 'border-b', ...borderProps };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<tr name={name} className={classes}>
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
		color: title ? 'text-gray-800 dark:text-gray-100' : 'text-gray-600 dark:text-gray-400',
		spacing: 'px-4 py-4',
		fontSize: 'text-sm',
		fontFamily: 'font-secondary',
		whitespace: 'whitespace-nowrap',
	};
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<td name={name} className={classes}>
			{value ? value : children}
		</td>
	);
};

// Docs:
// https://tailwindui.com/interface/application-ui/lists/tables
