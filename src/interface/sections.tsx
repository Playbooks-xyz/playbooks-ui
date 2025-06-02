import * as HTML from '@ehubbell/html';
import { Font, P, Small } from 'interface/fonts';
import { Div, Hr } from 'interface/html';
import * as theme from 'theme';
import * as types from 'types/section-types';
import { classBuilder } from 'utils';

export const Section = ({
	id,
	ref,
	name = 'Section',
	tailwind,
	className,
	children,
	style,
	...props
}: types.SectionProps) => {
	const base = theme.section();
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.Section id={id} ref={ref} name={name} className={computed} style={style}>
			{children}
		</HTML.Section>
	);
};

export const SectionHeader = ({
	id,
	name = 'SectionHeader',
	tailwind,
	className,
	children,
	...props
}: types.SectionHeaderProps) => {
	const base = theme.sectionHeader();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const SectionPretitle = ({
	id,
	name = 'SectionPretitle',
	tailwind,
	className,
	children,
	...props
}: types.SectionPretitleProps) => {
	const base = theme.sectionPretitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Small {...computed}>{children}</Small>;
};

export const SectionTitle = ({
	id,
	name = 'SectionTitle',
	size = 'h4',
	tailwind,
	className,
	children,
	...props
}: types.SectionTitleProps) => {
	const base = theme.sectionTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const SectionSubtitle = ({
	id,
	name = 'SectionSubtitle',
	size = 'h6',
	tailwind,
	className,
	children,
	...props
}: types.SectionSubtitleProps) => {
	const base = theme.sectionSubtitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const SectionText = ({
	id,
	name = 'SectionText',
	tailwind,
	className,
	children,
	...props
}: types.SectionTextProps) => {
	const base = theme.sectionText();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const SectionActions = ({
	id,
	name = 'SectionActions',
	tailwind,
	className,
	children,
	...props
}: types.SectionActionsProps) => {
	const base = theme.sectionActions();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const SectionBody = ({
	id,
	name = 'SectionBody',
	size,
	tailwind,
	className,
	children,
	...props
}: types.SectionBodyProps) => {
	const base = theme.sectionBody({ size });
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const SectionHr = ({ id, name = 'SectionHr', tailwind, className, ...props }: types.SectionHrProps) => {
	const base = theme.sectionHr();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Hr {...computed} />;
};

export const SectionFooter = ({
	id,
	name = 'SectionFooter',
	tailwind,
	className,
	children,
	...props
}: types.SectionFooterProps) => {
	const base = theme.sectionFooter();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};
