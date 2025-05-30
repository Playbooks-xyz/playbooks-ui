import * as HTML from '@ehubbell/html';
import { Font } from 'interface/fonts';
import { Div } from 'interface/html';
import * as styles from 'styles/header-styles';
import * as types from 'types/header-types';
import { tailwindClassBuilder } from 'utils';

export const Header = ({ id, name = 'Header', tailwind, className, children, style, ...props }: types.HeaderProps) => {
	const base = styles.header;
	const computed = tailwindClassBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.Header name={name} className={computed} style={style}>
			{children}
		</HTML.Header>
	);
};

export const HeaderTitle = ({
	id,
	name = 'HeaderTitle',
	size,
	tailwind,
	className,
	children,
	...props
}: types.HeaderTitleProps) => {
	const base = styles.headerTitle;
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size || 'h4'} {...computed}>
			{children}
		</Font>
	);
};

export const HeaderSubtitle = ({
	id,
	name = 'HeaderSubtitle',
	tailwind,
	className,
	children,
	...props
}: types.HeaderSubtitleProps) => {
	const base = styles.headerSubtitle;
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={'h5'} {...computed}>
			{children}
		</Font>
	);
};

export const HeaderText = ({
	id,
	name = 'HeaderText',
	tailwind,
	className,
	children,
	...props
}: types.HeaderTextProps) => {
	const base = styles.headerText;
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={'h6'} {...computed}>
			{children}
		</Font>
	);
};

export const HeaderActions = ({
	id,
	name = 'HeaderActions',
	tailwind,
	className,
	children,
	...props
}: types.HeaderActionsProps) => {
	const base = styles.headerActions;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/marketing/sections/header
