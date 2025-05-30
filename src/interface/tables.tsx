import * as HTML from '@ehubbell/html';
import { BtnWrapper } from 'interface/buttons';
import { Div } from 'interface/html';
import { FarIcon } from 'interface/icons';
import * as styles from 'styles';
import {
	iTable,
	iTableBody,
	iTableData,
	iTableHead,
	iTableHeader,
	iTableHeaderRow,
	iTableRow,
} from 'types/table-types';
import { tailwindClassBuilder } from 'utils';
import { isObject } from 'utils/helpers';

export const Table = ({ id, name = 'Table', className, children, ...tailwind }: iTable) => {
	const base = styles.table;
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<HTML.Table name={name} className={classes}>
			{children}
		</HTML.Table>
	);
};

export const TableHeader = ({ id, name = 'TableHeader', className, children, ...tailwind }: iTableHeader) => {
	const base = styles.tableHeader;
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<HTML.THead name={name} className={classes}>
			{children}
		</HTML.THead>
	);
};

export const TableHeaderRow = ({ id, name = 'TableHeaderRow', className, children, ...tailwind }: iTableHeaderRow) => {
	const base = styles.tableHeaderRow;
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
	const base = styles.tableHead;
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });
	const direction = value === params?.sortProp && params?.sortValue === 'asc' ? 'desc' : 'asc';

	return (
		<HTML.TH name={name} className={classes}>
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
		</HTML.TH>
	);
};

export const TableBody = ({ id, name = 'TableBody', className, children, ...tailwind }: iTableBody) => {
	const base = styles.tableBody;
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<HTML.TBody name={name} className={classes}>
			{children}
		</HTML.TBody>
	);
};

export const TableRow = ({ id, name = 'TableRow', className, children, ...tailwind }: iTableRow) => {
	const base = styles.tableRow;
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<HTML.TR name={name} className={classes}>
			{children}
		</HTML.TR>
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
		...styles.tableData,
		color: title ? 'text-gray-800 dark:text-gray-100' : 'text-gray-600 dark:text-gray-400',
	};
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<HTML.TD name={name} className={classes}>
			{value ? value : children}
		</HTML.TD>
	);
};

// Docs:
// https://tailwindui.com/interface/application-ui/lists/tables
