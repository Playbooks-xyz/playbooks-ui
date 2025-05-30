import { Div, Span } from 'interface/html';
import { Icon } from 'interface/icons';
import * as styles from 'styles/input-group-styles';
import * as types from 'types/input-group-types';

export const InputGroup = ({
	id,
	name = 'InputGroup',
	active,
	tailwind,
	className,
	children,
	...props
}: types.InputGroupProps) => {
	const base = styles.inputGroup;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const InputAppend = ({
	id,
	name = 'InputAppend',
	icon,
	taskRunning,
	tailwind,
	className,
	children,
	...props
}: types.InputAddonProps) => {
	const base = styles.inputAppend;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Span {...computed}>{icon ? <Icon icon={icon?.icon || icon} {...icon} /> : children}</Span>;
};

export const InputPrepend = ({
	id,
	name = 'InputPrepend',
	icon,
	taskRunning,
	onClick,
	tailwind,
	className,
	children,
	...props
}: types.InputAddonProps) => {
	const base = styles.inputPrepend;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Span {...computed}>{icon ? <Icon icon={icon?.icon || icon} {...icon} /> : children}</Span>;
};

// Docs
// // https://github.com/tailwindlabs/tailwindcss-forms
