import { Font, H6, P } from 'interface/fonts';
import { Div } from 'interface/html';
import { Section } from 'interface/sections';
import * as styles from 'styles/prefooter-styles';
import * as types from 'types/prefooter-types';

export const Prefooter = ({
	id,
	name = 'Prefooter',
	tailwind,
	className,
	children,
	...props
}: types.PrefooterProps) => {
	const base = styles.prefooter;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Section {...computed}>{children}</Section>;
};

export const PrefooterBody = ({
	id,
	name = 'PrefooterBody',
	tailwind,
	className,
	children,
	...props
}: types.PrefooterBodyProps) => {
	const base = styles.prefooterBody;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const PrefooterPretitle = ({
	id,
	name = 'PrefooterPretitle',
	tailwind,
	className,
	children,
	...props
}: types.PrefooterPretitleProps) => {
	const base = styles.prefooterPretitle;
	const computed = { ...base, ...props, tailwind, className, name };

	return <H6 {...computed}>{children}</H6>;
};

export const PrefooterTitle = ({
	id,
	name = 'PrefooterTitle',
	size = 'h2',
	tailwind,
	className,
	children,
	...props
}: types.PrefooterTitleProps) => {
	const base = styles.prefooterTitle;
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const PrefooterSubtitle = ({
	id,
	name = 'PrefooterSubtitle',
	size = 'h5',
	tailwind,
	className,
	children,
	...props
}: types.PrefooterSubtitleProps) => {
	const base = styles.prefooterSubtitle;
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const PrefooterText = ({
	id,
	name = 'PrefooterText',
	tailwind,
	className,
	children,
	...props
}: types.PrefooterTextProps) => {
	const base = styles.prefooterText;
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const PrefooterActions = ({
	id,
	name = 'PrefooterActions',
	tailwind,
	className,
	children,
	...props
}: types.PrefooterActionsProps) => {
	const base = styles.prefooterActions;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/marketing/sections/cta-sections
