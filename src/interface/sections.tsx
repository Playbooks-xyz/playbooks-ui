import * as HTML from '@ehubbell/html';
import { Font, P } from 'interface/fonts';
import { Div, Hr } from 'interface/html';
import * as styles from 'styles';
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
} from 'types/section-types';
import { computeSectionSize, tailwindClassBuilder } from 'utils';

export const Section = ({ id, ref, name = 'Section', className, children, style, ...tailwind }: iSection) => {
	const base = styles.sectionBase;
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<HTML.Section id={id} ref={ref} name={name} className={classes} style={style}>
			{children}
		</HTML.Section>
	);
};

export const SectionHeader = ({ id, name = 'SectionHeader', className, children, ...tailwind }: iSectionHeader) => {
	const base = styles.sectionHeaderBase;
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
	const base = styles.sectionPretitleBase;
	const props = { ...base, ...tailwind, className, name };

	return <P {...props}>{children}</P>;
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
		...styles.sectionTitleBase,
		size,
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
		...styles.sectionSubtitleBase,
		size,
	};
	const props = { ...base, ...tailwind, className, name };

	return <Font {...props}>{children}</Font>;
};

export const SectionText = ({ id, name = 'SectionText', className, children, ...tailwind }: iSectionText) => {
	const base = styles.sectionTextBase;
	const props = { ...base, ...tailwind, className, name };

	return <P {...props}>{children}</P>;
};

export const SectionActions = ({ id, name = 'SectionActions', className, children, ...tailwind }: iSectionActions) => {
	const base = styles.sectionActionsBase;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const SectionBody = ({ id, name = 'SectionBody', size, className, children, ...tailwind }: iSectionBody) => {
	const base = {
		...styles.sectionBodyBase,
		size: computeSectionSize(size),
	};
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const SectionHr = ({ id, name = 'SectionHr', className, ...tailwind }: iSectionHr) => {
	const base = styles.sectionHrBase;
	const props = { ...base, ...tailwind, className, name };

	return <Hr {...props} />;
};

export const SectionFooter = ({ id, name = 'SectionFooter', className, children, ...tailwind }: iSectionFooter) => {
	const base = styles.sectionFooterBase;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};
