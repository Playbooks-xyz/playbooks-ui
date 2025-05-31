import * as HTML from '@ehubbell/html';
import { Font, P } from 'interface/fonts';
import { Div, Hr } from 'interface/html';
import * as styles from 'styles/section-styles';
import { computeBodySize } from 'theme';
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
	const base = styles.section;
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
	const base = styles.sectionHeader;
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
	const base = styles.sectionPretitle;
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const SectionTitle = ({
	id,
	name = 'SectionTitle',
	size = 'h5',
	tailwind,
	className,
	children,
	...props
}: types.SectionTitleProps) => {
	const base = { ...styles.sectionTitle, size };
	const computed = { ...base, ...props, tailwind, className, name };

	return <Font {...computed}>{children}</Font>;
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
	const base = { ...styles.sectionSubtitle, size };
	const computed = { ...base, ...props, tailwind, className, name };

	return <Font {...computed}>{children}</Font>;
};

export const SectionText = ({
	id,
	name = 'SectionText',
	tailwind,
	className,
	children,
	...props
}: types.SectionTextProps) => {
	const base = styles.sectionText;
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
	const base = styles.sectionActions;
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
	const base = {
		...styles.sectionBody,
		size: computeBodySize(size),
	};
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const SectionHr = ({ id, name = 'SectionHr', tailwind, className, ...props }: types.SectionHrProps) => {
	const base = styles.sectionHr;
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
	const base = styles.sectionFooter;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};
