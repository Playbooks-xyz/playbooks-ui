import { Font, H6, P } from 'interface/fonts';
import { Div } from 'interface/html';
import {
	iPrefooter,
	iPrefooterActions,
	iPrefooterBody,
	iPrefooterPretitle,
	iPrefooterSubtitle,
	iPrefooterText,
	iPrefooterTitle,
} from 'interface/prefooters.types';
import { Section } from 'interface/sections';

export const Prefooter = ({ id, name = 'Prefooter', className, children, ...tailwind }: iPrefooter) => {
	const base = { bgColor: 'bg-gray-100 dark:bg-gray-800', spacing: 'px-16 py-20' };
	const props = { ...base, ...tailwind, className, name };

	return <Section {...props}>{children}</Section>;
};

export const PrefooterBody = ({ id, name = 'PrefooterBody', className, children, ...tailwind }: iPrefooterBody) => {
	const base = { align: 'text-left', space: 'space-y-4' };
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
	const base = {};
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
	const base = { color: 'white', fontWeight: 'font-bold' };
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
	const base = {
		color: 'white',
		fontFamily: 'font-secondary',
		fontSize: 'font-base',
		fontWeight: 'font-light',
	};
	const props = { ...base, ...tailwind, className, name };

	return (
		<Font size={size} {...props}>
			{children}
		</Font>
	);
};

export const PrefooterText = ({ id, name = 'PrefooterText', className, children, ...tailwind }: iPrefooterText) => {
	const base = {};
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
	const base = { space: 'space-x-4', flex: 'shrink-0', spacing: 'py-4' };
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/marketing/sections/cta-sections
