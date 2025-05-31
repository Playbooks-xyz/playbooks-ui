import * as HTML from '@ehubbell/html';
import * as theme from '@playbooks/theme';
import { P, Small } from 'interface/fonts';
import { Div } from 'interface/html';
import * as types from 'types';
import { classBuilder } from 'utils';

export const RadioWrapper = ({
	id,
	name = 'RadioWrapper',
	active,
	onClick,
	tailwind,
	className,
	children,
	...props
}: types.RadioWrapperProps) => {
	const base = {
		...theme.radioWrapper(),
		...(active && {
			borderColor: 'border-blue-500 dark:border-cyan-500',
		}),
	};
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.Label onClick={() => onClick()} className={computed}>
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
	tailwind,
	className,
	children,
	...props
}: types.RadioProps) => {
	const base = theme.radio();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<RadioWrapper active={value} onClick={onClick} {...computed}>
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
	tailwind,
	className,
	children,
	...props
}: types.RadioInputProps) => {
	const base = theme.radioInput();
	const computed = classBuilder({ ...base, ...props, tailwind, name, className });
	return (
		<HTML.Input
			id={id}
			type='radio'
			checked={value}
			className={computed}
			aria-labelledby='privacy-setting-0-label'
			aria-describedby='privacy-setting-0-description'
			readOnly>
			{children}
		</HTML.Input>
	);
};

export const RadioTitle = ({ id, name = 'RadioLabel', tailwind, className, children, ...props }: types.FontProps) => {
	const base = theme.radioTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const RadioText = ({ id, name = 'RadioLabel', tailwind, className, children, ...props }: types.FontProps) => {
	const base = theme.radioText();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Small {...computed}>{children}</Small>;
};

// Docs:
// https://tailwindui.com/interface/application-ui/forms/radio-groups
