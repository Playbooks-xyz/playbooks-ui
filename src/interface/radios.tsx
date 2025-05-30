import * as HTML from '@ehubbell/html';
import { P, Small } from 'interface/fonts';
import { Div } from 'interface/html';
import * as styles from 'styles/radio-styles';
import * as types from 'types';
import { checkboxProps, tailwindClassBuilder } from 'utils';

export const RadioWrapper = ({
	id,
	name = 'RadioWrapper',
	active,
	onClick,
	className,
	children,
	...tailwind
}: types.RadioWrapperProps) => {
	const base = {
		...styles.radioWrapper,
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
}: types.RadioProps) => {
	const base = styles.radio;
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

export const RadioInput = ({
	id,
	name = 'RadioInput',
	value,
	className,
	children,
	...tailwind
}: types.RadioInputProps) => {
	const base = { ...checkboxProps(value), ...styles.radioInput };
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

export const RadioTitle = ({ id, name = 'RadioLabel', className, children, ...tailwind }: types.FontProps) => {
	const base = styles.radioTitle;
	const props = { ...base, ...tailwind, className, name };

	return <P {...props}>{children}</P>;
};

export const RadioText = ({ id, name = 'RadioLabel', className, children, ...tailwind }: types.FontProps) => {
	const base = styles.radioText;
	const props = { ...base, ...tailwind, className, name };

	return <Small {...props}>{children}</Small>;
};

// Docs:
// https://tailwindui.com/interface/application-ui/forms/radio-groups
