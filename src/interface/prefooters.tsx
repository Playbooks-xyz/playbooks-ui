import { Font, H6, P } from 'interface/fonts';
import { Div } from 'interface/html';
import { Section } from 'interface/sections';
import * as styles from 'styles/prefooter-styles';
import {
	iPrefooter,
	iPrefooterActions,
	iPrefooterBody,
	iPrefooterPretitle,
	iPrefooterSubtitle,
	iPrefooterText,
	iPrefooterTitle,
} from 'types/prefooter-types';

export const Prefooter = ({ id, name = 'Prefooter', className, children, ...tailwind }: iPrefooter) => {
	const base = styles.prefooter;
	const props = { ...base, ...tailwind, className, name };

	return <Section {...props}>{children}</Section>;
};

export const PrefooterBody = ({ id, name = 'PrefooterBody', className, children, ...tailwind }: iPrefooterBody) => {
	const base = styles.prefooterBody;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const PrefooterPretitle = ({
	id,
	name = 'PrefooterPretitle',
	className,
	children,
	...tailwind
}: iPrefooterPretitle) => {
	const base = styles.prefooterPretitle;
	const props = { ...base, ...tailwind, className, name };

	return <H6 {...props}>{children}</H6>;
};

export const PrefooterTitle = ({
	id,
	name = 'PrefooterTitle',
	size = 'h2',
	className,
	children,
	...tailwind
}: iPrefooterTitle) => {
	const base = styles.prefooterTitle;
	const props = { ...base, ...tailwind, className, name };

	return (
		<Font size={size} {...props}>
			{children}
		</Font>
	);
};

export const PrefooterSubtitle = ({
	id,
	name = 'PrefooterSubtitle',
	size = 'h5',
	className,
	children,
	...tailwind
}: iPrefooterSubtitle) => {
	const base = styles.prefooterSubtitle;
	const props = { ...base, ...tailwind, className, name };

	return (
		<Font size={size} {...props}>
			{children}
		</Font>
	);
};

export const PrefooterText = ({ id, name = 'PrefooterText', className, children, ...tailwind }: iPrefooterText) => {
	const base = styles.prefooterText;
	const props = { ...base, ...tailwind, className, name };

	return <P {...props}>{children}</P>;
};

export const PrefooterActions = ({
	id,
	name = 'PrefooterActions',
	className,
	children,
	...tailwind
}: iPrefooterActions) => {
	const base = styles.prefooterActions;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/marketing/sections/cta-sections
