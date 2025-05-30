import { Div, Span } from 'interface/html';
import { Icon } from 'interface/icons';
import { iInputAddon, iInputGroup } from 'types/input-group-types';
import { borderProps } from 'utils';

export const InputGroup = ({ id, name = 'InputGroup', active, className, children, ...tailwind }: iInputGroup) => {
	const base = {
		bgColor: 'bg-gray-white dark:bg-gray-900',
		border: 'border',
		borderColor: 'border-gray-400 dark:border-gray-500 focus-within:border-blue-500 dark:focus-within:border-cyan-500',
		borderOpacity: 'border-opacity-50 dark:border-opacity-50',
		borderRadius: 'rounded-md',
		color: 'text-gray-600 dark:text-gray-200',
		display: 'flex no-wrap',
		ring: 'focus-within:ring-1',
		ringColor: 'focus-within:ring-transparent dark:focus-within:ring-transparent',
		ringOffset: 'focus-within:ring-offset-1',
		ringOffsetColor: 'focus-within:ring-offset-blue-500 focus-within:dark:ring-offset-cyan-500',
		transition: 'transition ease',
	};
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
}: iInputAddon) => {
	const base = {
		...borderProps,
		display: 'flex-middle',
		flex: 'shrink-0',
		spacing: 'px-4',
	};
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
}: iInputAddon) => {
	const base = {
		...borderProps,
		display: 'flex-middle',
		flex: 'shrink-0',
		spacing: 'px-4',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Span {...props}>{icon ? <Icon icon={icon?.icon || icon} {...icon} /> : children}</Span>;
};

// Docs
// // https://github.com/tailwindlabs/tailwindcss-forms
