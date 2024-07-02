import { BtnWrapper } from 'buttons';
import { Div, Span } from 'html';
import { FadIcon } from 'icons';
import {
	iSwitch,
	iSwitchBackdrop,
	iSwitchGroup,
	iSwitchInner,
	iSwitchLabel,
	iSwitchToggle,
} from 'types/switches.types';
import { tailwindClassBuilder } from 'tailwind';

export const SwitchGroup = ({ id, name = 'SwitchGroup', className, children, ...tailwind }: iSwitchGroup) => {
	const base = { display: 'flex-between', space: 'space-x-4' };
	const props = { ...base, ...tailwind, className, name };

	return (
		<Div id={id} {...props}>
			{children}
		</Div>
	);
};

export const Switch = ({ id, name = 'Switch', icon, checked, onClick, className, ...tailwind }: iSwitch) => {
	const base = {
		display: 'inline-flex items-center justify-center shrink-0',
		position: 'relative',
		overflow: 'o-hidden',
		size: 'w-12 h-10',
		cursor: 'cursor-pointer',
		ring: 'ring-sky',
	};
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<BtnWrapper onClick={() => onClick(!checked)} className={classes}>
			<Span className='sr-only'>Use setting</Span>
			<SwitchBackdrop checked={checked} />
			<SwitchInner checked={checked} />
			<SwitchToggle checked={checked} icon={icon} />
		</BtnWrapper>
	);
};

export const SwitchBackdrop = ({ id, name = 'SwitchBackdrop', checked, className, ...tailwind }: iSwitchBackdrop) => {
	const base = {
		bgColor: 'bg-gray-200',
		transition: 'transition',
		pointer: ' pointer-events-none',
		size: 'w-10 h-2',
		borderRadius: 'rounded-full',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Span aria-hidden='true' {...props} />;
};

export const SwitchInner = ({ id, name = 'SwitchInner', checked, className, ...tailwind }: iSwitchInner) => {
	const base = {
		position: 'absolute',
		bgColor: checked ? 'bg-gray-100 dark:bg-gray-600' : 'bg-gray-100 dark:bg-gray-800',
		transition: 'transition',
		duration: 'duration-200',
		pointer: ' pointer-events-none',
		size: 'w-10 h-3',
		spacing: 'mx-auto',
		borderRadius: 'rounded-full',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Span aria-hidden='true' {...props} />;
};

export const SwitchToggle = ({ id, name = 'SwitchToggle', icon, checked, className, ...tailwind }: iSwitchToggle) => {
	const base = {
		animation: checked ? 'translate-x-6' : 'translate-x-0',
		placement: 'left-0',
		position: 'absolute',
		display: 'inline-block',
		bgColor: checked ? 'bg-blue-500 dark:bg-orange-500' : 'bg-gray-300 dark:bg-gray-600',
		border: '',
		transition: 'transition',
		transform: 'transform',
		duration: 'duration-200',
		pointer: ' pointer-events-none',
		// shadow: 'shadow-md',
		size: 'w-6 h-6',
		borderRadius: 'rounded-full',
	};
	const props = { ...base, ...tailwind, className, name };

	return (
		<Span aria-hidden='true' {...props}>
			{icon && (
				<Span className='absolute w-full inset-0 flex-middle'>
					<FadIcon icon={icon} className='' />
				</Span>
			)}
		</Span>
	);
};

export const SwitchLabel = ({ id, name = 'SwitchLabel', htmlFor, className, children, ...tailwind }: iSwitchLabel) => {
	const base = {
		display: 'inline-block',
		fontSize: 'font-base',
		fontWeight: 'font-medium',
		color: 'gray-700 dark:gray-200',
	};
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<label id={id} htmlFor={htmlFor} className={classes}>
			{children}
		</label>
	);
};

// Docs:
// https://tailwindui.com/interface/application-ui/forms/toggles
