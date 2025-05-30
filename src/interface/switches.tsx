import * as HTML from '@ehubbell/html';
import { BtnWrapper } from 'interface/buttons';
import { Div, Span } from 'interface/html';
import { FadIcon } from 'interface/icons';
import * as styles from 'styles/switch-styles';
import * as types from 'types';
import { tailwindClassBuilder } from 'utils';

export const SwitchGroup = ({
	id,
	name = 'SwitchGroup',
	tailwind,
	className,
	children,
	...props
}: types.SwitchGroupProps) => {
	const base = styles.switchGroup;
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div id={id} {...computed}>
			{children}
		</Div>
	);
};

export const Switch = ({
	id,
	name = 'Switch',
	icon,
	checked,
	onClick,
	tailwind,
	className,
	...props
}: types.SwitchProps) => {
	const base = styles.switchBase;
	const computed = tailwindClassBuilder({ ...base, ...props, tailwind, className });

	return (
		<BtnWrapper alt='switch' onClick={() => onClick(!checked)} className={computed}>
			<Span className='sr-only'>Use setting</Span>
			<SwitchBackdrop checked={checked} />
			<SwitchInner checked={checked} />
			<SwitchToggle checked={checked} icon={icon} />
		</BtnWrapper>
	);
};

export const SwitchBackdrop = ({
	id,
	name = 'SwitchBackdrop',
	checked,
	tailwind,
	className,
	...props
}: types.SwitchBackdropProps) => {
	const base = styles.switchBackdrop;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Span aria-hidden='true' {...computed} />;
};

export const SwitchInner = ({
	id,
	name = 'SwitchInner',
	checked,
	tailwind,
	className,
	...props
}: types.SwitchInnerProps) => {
	const base = {
		...styles.switchInner,
		bgColor: checked ? 'bg-gray-100 dark:bg-gray-600' : 'bg-gray-100 dark:bg-gray-800',
	};
	const computed = { ...base, ...props, tailwind, className, name };

	return <Span aria-hidden='true' {...computed} />;
};

export const SwitchToggle = ({
	id,
	name = 'SwitchToggle',
	icon,
	checked,
	tailwind,
	className,
	...props
}: types.SwitchToggleProps) => {
	const base = {
		...styles.switchToggle,
		bgColor: checked ? 'bg-blue-500 dark:bg-cyan-500' : 'bg-gray-300 dark:bg-gray-600',
		transform: checked ? 'translate-x-6' : 'translate-x-0',
	};
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Span aria-hidden='true' {...computed}>
			{icon && (
				<Span className='absolute w-full inset-0 flex-middle'>
					<FadIcon icon={icon} className='' />
				</Span>
			)}
		</Span>
	);
};

export const SwitchLabel = ({
	id,
	name = 'SwitchLabel',
	htmlFor,
	tailwind,
	className,
	children,
	...props
}: types.SwitchLabelProps) => {
	const base = styles.switchLabel;
	const computed = tailwindClassBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.Label id={id} htmlFor={htmlFor} className={computed}>
			{children}
		</HTML.Label>
	);
};

// Docs:
// https://tailwindui.com/interface/application-ui/forms/toggles
