import * as HTML from '@ehubbell/html';
import { BtnWrapper } from 'interface/buttons';
import { Div, Span } from 'interface/html';
import { FadIcon } from 'interface/icons';
import * as styles from 'styles/switch-styles';
import { iSwitch, iSwitchBackdrop, iSwitchGroup, iSwitchInner, iSwitchLabel, iSwitchToggle } from 'types/switch-types';
import { tailwindClassBuilder } from 'utils';

export const SwitchGroup = ({ id, name = 'SwitchGroup', className, children, ...tailwind }: iSwitchGroup) => {
	const base = styles.switchGroup;
	const props = { ...base, ...tailwind, className, name };

	return (
		<Div id={id} {...props}>
			{children}
		</Div>
	);
};

export const Switch = ({ id, name = 'Switch', icon, checked, onClick, className, ...tailwind }: iSwitch) => {
	const base = styles.switchBase;
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<BtnWrapper alt='switch' onClick={() => onClick(!checked)} className={classes}>
			<Span className='sr-only'>Use setting</Span>
			<SwitchBackdrop checked={checked} />
			<SwitchInner checked={checked} />
			<SwitchToggle checked={checked} icon={icon} />
		</BtnWrapper>
	);
};

export const SwitchBackdrop = ({ id, name = 'SwitchBackdrop', checked, className, ...tailwind }: iSwitchBackdrop) => {
	const base = styles.switchBackdrop;
	const props = { ...base, ...tailwind, className, name };

	return <Span aria-hidden='true' {...props} />;
};

export const SwitchInner = ({ id, name = 'SwitchInner', checked, className, ...tailwind }: iSwitchInner) => {
	const base = {
		...styles.switchInner,
		bgColor: checked ? 'bg-gray-100 dark:bg-gray-600' : 'bg-gray-100 dark:bg-gray-800',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Span aria-hidden='true' {...props} />;
};

export const SwitchToggle = ({ id, name = 'SwitchToggle', icon, checked, className, ...tailwind }: iSwitchToggle) => {
	const base = {
		...styles.switchToggle,
		bgColor: checked ? 'bg-blue-500 dark:bg-cyan-500' : 'bg-gray-300 dark:bg-gray-600',
		transform: checked ? 'translate-x-6' : 'translate-x-0',
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
	const base = styles.switchLabel;
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<HTML.Label id={id} htmlFor={htmlFor} className={classes}>
			{children}
		</HTML.Label>
	);
};

// Docs:
// https://tailwindui.com/interface/application-ui/forms/toggles
