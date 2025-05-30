import * as HTML from '@ehubbell/html';
import { BtnWrapper } from 'interface/buttons';
import { Div } from 'interface/html';
import { FarIcon } from 'interface/icons';
import * as styles from 'styles/table-styles';
import * as types from 'types/table-types';
import { tailwindClassBuilder } from 'utils';
import { isObject } from 'utils/helpers';

export const Table = ({ id, name = 'Table', tailwind, className, children, ...props }: types.TabPropsle) => {
	const base = styles.table;
	const computed = tailwindClassBuilder({ ...base, ...props, tailwind, className });

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
}: types.TabPropsleHeader) => {
	const base = styles.tableHeader;
	const computed = tailwindClassBuilder({ ...base, ...props, tailwind, className });

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
}: types.TabPropsleHeaderRow) => {
	const base = styles.tableHeaderRow;
	const computed = tailwindClassBuilder({ ...base, ...props, tailwind, className });

	return <tr className={computed}>{children}</tr>;
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
}: types.TabPropsleHead) => {
	const base = styles.tableHead;
	const computed = tailwindClassBuilder({ ...base, ...props, tailwind, className });
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
}: types.TabPropsleBody) => {
	const base = styles.tableBody;
	const computed = tailwindClassBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.TBody name={name} className={computed}>
			{children}
		</HTML.TBody>
	);
};

export const TableRow = ({ id, name = 'TableRow', tailwind, className, children, ...props }: types.TabPropsleRow) => {
	const base = styles.tableRow;
	const computed = tailwindClassBuilder({ ...base, ...props, tailwind, className });

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
}: types.TabPropsleData) => {
	const base = {
		...styles.tableData,
		color: title ? 'text-gray-800 dark:text-gray-100' : 'text-gray-600 dark:text-gray-400',
	};
	const computed = tailwindClassBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.TD name={name} className={computed}>
			{value ? value : children}
		</HTML.TD>
	);
};

// Docs:
// https://tailwindui.com/interface/application-ui/lists/tables
