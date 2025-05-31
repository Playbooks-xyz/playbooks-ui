import * as theme from '@playbooks/theme';
import { Div } from 'interface/html';
import { Icon } from 'interface/icons';
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
	const base = theme.inputGroup();
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
	const base = theme.inputAppend();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{icon ? <Icon icon={icon?.icon || icon} {...icon} /> : children}</Div>;
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
	const base = theme.inputPrepend();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{icon ? <Icon icon={icon?.icon || icon} {...icon} /> : children}</Div>;
};

// Docs
// https://tailwindui.com/interface/application-ui/forms/input-groups
