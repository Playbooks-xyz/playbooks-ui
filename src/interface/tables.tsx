import * as HTML from '@ehubbell/html';
import { BtnWrapper } from 'interface/buttons';
import { Div } from 'interface/html';
import { FarIcon } from 'interface/icons';
import * as theme from 'theme';
import * as types from 'types/table-types';
import { classBuilder } from 'utils';
import { isObject } from 'utils/helpers';

export const Table = ({ id, name = 'Table', tailwind, className, children, ...props }: types.TableProps) => {
	const base = theme.table();
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.Table name={name} className={computed}>
			{children}
		</HTML.Table>
	);
};

export const TableHeader = ({
	id,
	name = 'TableHeader',
	tailwind,
	className,
	children,
	...props
}: types.TableHeaderProps) => {
	const base = theme.tableHeader();
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.THead name={name} className={computed}>
			{children}
		</HTML.THead>
	);
};

export const TableHeaderRow = ({
	id,
	name = 'TableHeaderRow',
	tailwind,
	className,
	children,
	...props
}: types.TableHeaderRowProps) => {
	const base = theme.tableHeaderRow();
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return <HTML.TR className={computed}>{children}</HTML.TR>;
};

export const TableHead = ({
	id,
	name = 'TableHead',
	alt = 'sort table',
	value,
	params,
	setParams,
	tailwind,
	className,
	children,
	...props
}: types.TableHeadProps) => {
	const base = theme.tableHead();
	const computed = classBuilder({ ...base, ...props, tailwind, className });
	const direction = value === params?.sortProp && params?.sortValue === 'asc' ? 'desc' : 'asc';

	return (
		<HTML.TH name={name} className={computed}>
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

export const TableBody = ({
	id,
	name = 'TableBody',
	tailwind,
	className,
	children,
	...props
}: types.TableBodyProps) => {
	const base = theme.tableBody();
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.TBody name={name} className={computed}>
			{children}
		</HTML.TBody>
	);
};

export const TableRow = ({ id, name = 'TableRow', tailwind, className, children, ...props }: types.TableRowProps) => {
	const base = theme.tableRow();
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.TR name={name} className={computed}>
			{children}
		</HTML.TR>
	);
};

export const TableData = ({
	id,
	name = 'TableData',
	title = false,
	value,
	tailwind,
	className,
	children,
	...props
}: types.TableDataProps) => {
	const base = theme.tableData({ title });
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.TD name={name} className={computed}>
			{value ? value : children}
		</HTML.TD>
	);
};

// Docs:
// https://tailwindui.com/interface/application-ui/lists/tables
