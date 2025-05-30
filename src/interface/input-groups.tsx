import { Div, Span } from 'interface/html';
import { Icon } from 'interface/icons';
import * as styles from 'styles/input-group-styles';
import * as types from 'types/input-group-types';

export const InputGroup = ({
	id,
	name = 'InputGroup',
	active,
	className,
	children,
	...tailwind
}: types.InputGroupProps) => {
	const base = styles.inputGroup;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const InputAppend = ({
	id,
	name = 'InputAppend',
	icon,
	taskRunning,
	className,
	children,
	...tailwind
}: types.InputAddonProps) => {
	const base = styles.inputAppend;
	const props = { ...base, ...tailwind, className, name };

	return <Span {...props}>{icon ? <Icon icon={icon?.icon || icon} {...icon} /> : children}</Span>;
};

export const InputPrepend = ({
	id,
	name = 'InputPrepend',
	icon,
	taskRunning,
	onClick,
	className,
	children,
	...tailwind
}: types.InputAddonProps) => {
	const base = styles.inputPrepend;
	const props = { ...base, ...tailwind, className, name };

	return <Span {...props}>{icon ? <Icon icon={icon?.icon || icon} {...icon} /> : children}</Span>;
};

// Docs
// // https://github.com/tailwindlabs/tailwindcss-forms
