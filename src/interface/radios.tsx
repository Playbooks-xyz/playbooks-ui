import * as HTML from '@ehubbell/html';
import { P, Small } from 'interface/fonts';
import { Div } from 'interface/html';
import { iRadio, iRadioInput, iRadioLabel, iRadioWrapper } from 'types/radio-types';
import { checkboxProps, tailwindClassBuilder } from 'utils';

export const RadioWrapper = ({
	id,
	name = 'RadioWrapper',
	active,
	onClick,
	className,
	children,
	...tailwind
}: iRadioWrapper) => {
	const base = {
		animation: 'transition',
		border: 'border',
		borderColor: 'border-gray-400',
		borderOpacity: 'border-opacity-25',
		borderRadius: 'rounded-md',
		cursor: 'cursor-pointer',
		display: 'inline-block',
		duration: 'duration-200',
		position: 'relative',
		spacing: 'p-4',
		...(active && {
			borderColor: 'border-blue-500 dark:border-cyan-500',
		}),
	};
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<HTML.Label onClick={() => onClick()} className={classes}>
			{children}
		</HTML.Label>
	);
};

export const Radio = ({
	id,
	name = 'Radio',
	title,
	text,
	value,
	onClick,
	className,
	children,
	...tailwind
}: iRadio) => {
	const base = { display: 'flex-start-top', space: 'space-x-4' };
	const props = { ...base, ...tailwind, className, name };

	return (
		<RadioWrapper active={value} onClick={onClick} {...props}>
			<RadioInput value={value} />
			<Div space='space-y-1'>
				{title && <RadioTitle>{title}</RadioTitle>}
				{text && <RadioText>{text}</RadioText>}
			</Div>
		</RadioWrapper>
	);
};

export const RadioInput = ({ id, name = 'RadioInput', value, className, children, ...tailwind }: iRadioInput) => {
	const base = { ...checkboxProps(value), borderRadius: 'rounded-full', size: 'w-4 h-4' };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, name, className });
	return (
		<HTML.Input
			id={id}
			type='radio'
			checked={value}
			className={classes}
			aria-labelledby='privacy-setting-0-label'
			aria-describedby='privacy-setting-0-description'
			readOnly>
			{children}
		</HTML.Input>
	);
};

export const RadioTitle = ({ id, name = 'RadioLabel', className, children, ...tailwind }: iRadioLabel) => {
	const base = { color: 'text-gray-700 dark:text-gray-200', lineSpacing: 'leading-tight', fontSize: 'text-sm' };
	const props = { ...base, ...tailwind, className, name };

	return <P {...props}>{children}</P>;
};

export const RadioText = ({ id, name = 'RadioLabel', className, children, ...tailwind }: iRadioLabel) => {
	const base = { fontSize: 'text-sm', fontWeight: 'font-light', tracking: 'tracking-wide' };
	const props = { ...base, ...tailwind, className, name };

	return <Small {...props}>{children}</Small>;
};

// Docs:
// https://tailwindui.com/interface/application-ui/forms/radio-groups
