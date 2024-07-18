import { forwardRef } from 'react';

import { Font, P, Small } from 'interface/fonts';
import { Div, Hr } from 'interface/html';
import {
	iSection,
	iSectionActions,
	iSectionBody,
	iSectionFooter,
	iSectionHeader,
	iSectionHr,
	iSectionPretitle,
	iSectionSubtitle,
	iSectionText,
	iSectionTitle,
} from 'interface/sections.types';
import { borderProps, computeSectionSize, tailwindClassBuilder } from 'tailwind';

export const Section = forwardRef<any, iSection>(
	({ id, name = 'Section', className, children, ...tailwind }: iSection, ref) => {
		const base = {
			bgColor: 'bg-white dark:bg-gray-900',
			border: 'border',
			...borderProps,
			borderRadius: 'rounded-md',
			position: 'relative',
			shadow: '',
			spacing: 'mb-4',
			width: 'w-full',
		};
		const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

		return (
			<section id={id} ref={ref} data-name={name} className={classes}>
				{children}
			</section>
		);
	},
);

export const SectionHeader = ({ id, name = 'SectionHeader', className, children, ...tailwind }: iSectionHeader) => {
	const base = {
		spacing: 'p-4',
		border: 'border-b',
		...borderProps,
		display: 'lg:flex-between',
		space: 'space-y-4 space-x-0 lg:space-y-0 lg:space-x-4',
		width: 'w-full',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const SectionPretitle = ({
	id,
	name = 'SectionPretitle',
	className,
	children,
	...tailwind
}: iSectionPretitle) => {
	const base = {
		color: 'gray-500',
		fontFamily: 'font-accent',
		fontSize: 'text-sm',
		fontWeight: 'font-medium',
		textTransform: 'uppercase',
		tracking: 'tracking-wider',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Small {...props}>{children}</Small>;
};

export const SectionTitle = ({
	id,
	name = 'SectionTitle',
	size = 'h5',
	className,
	children,
	...tailwind
}: iSectionTitle) => {
	const base = {
		size,
		display: 'flex-start',
		fontWeight: 'font-bold',
		leading: 'leading-normal',
		space: 'space-x-4',
		tracking: 'tracking-wide',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Font {...props}>{children}</Font>;
};

export const SectionSubtitle = ({
	id,
	name = 'SectionSubtitle',
	size = 'h6',
	className,
	children,
	...tailwind
}: iSectionSubtitle) => {
	const base = {
		size,
		color: 'gray-600 dark:gray-300',
		fontWeight: 'font-light',
		fontFamily: 'font-secondary',
		tracking: 'tracking-normal',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Font {...props}>{children}</Font>;
};

export const SectionText = ({ id, name = 'SectionText', className, children, ...tailwind }: iSectionText) => {
	const base = {
		color: 'gray-600 dark:gray-200',
		fontFamily: 'font-secondary',
	};
	const props = { ...base, ...tailwind, className, name };

	return <P {...props}>{children}</P>;
};

export const SectionActions = ({ id, name = 'SectionActions', className, children, ...tailwind }: iSectionActions) => {
	const base = {
		display: 'lg:flex-end',
		space: 'space-y-4 space-x-0 lg:space-y-0 lg:space-x-4',
		width: 'w-full lg:w-1/2',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const SectionBody = ({ id, name = 'SectionBody', size, className, children, ...tailwind }: iSectionBody) => {
	const base = {
		spacing: 'p-4',
		...borderProps,
		size: computeSectionSize(size),
		width: 'w-full',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const SectionHr = ({ id, name = 'SectionHr', className, ...tailwind }: iSectionHr) => {
	const base = {};
	const props = { ...base, ...tailwind, className, name };

	return <Hr {...props} />;
};

export const SectionFooter = ({ id, name = 'SectionFooter', className, children, ...tailwind }: iSectionFooter) => {
	const base = {
		display: 'flex-between',
		border: 'border-t',
		...borderProps,
		space: 'space-x-4',
		spacing: 'p-4',
		width: 'w-full',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};
