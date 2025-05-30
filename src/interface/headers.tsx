import * as HTML from '@ehubbell/html';
import { Div } from 'interface/html';
import { Font } from 'interface/fonts';
import * as styles from 'styles/header-styles';
import * as types from 'types/header-types';
import { tailwindClassBuilder } from 'utils';

export const Header = ({ id, name = 'Header', className, children, style, ...tailwind }: types.HeaderProps) => {
	const base = styles.header;
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<HTML.Header name={name} className={classes} style={style}>
			{children}
		</HTML.Header>
	);
};

export const HeaderTitle = ({
	id,
	name = 'HeaderTitle',
	size,
	className,
	children,
	...tailwind
}: types.HeaderTitleProps) => {
	const base = styles.headerTitle;
	const props = { ...base, ...tailwind, className, name };

	return (
		<Font size={size || 'h4'} {...props}>
			{children}
		</Font>
	);
};

export const HeaderSubtitle = ({
	id,
	name = 'HeaderSubtitle',
	className,
	children,
	...tailwind
}: types.HeaderSubtitleProps) => {
	const base = styles.headerSubtitle;
	const props = { ...base, ...tailwind, className, name };

	return (
		<Font size={'h5'} {...props}>
			{children}
		</Font>
	);
};

export const HeaderText = ({ id, name = 'HeaderText', className, children, ...tailwind }: types.HeaderTextProps) => {
	const base = styles.headerText;
	const props = { ...base, ...tailwind, className, name };

	return (
		<Font size={'h6'} {...props}>
			{children}
		</Font>
	);
};

export const HeaderActions = ({
	id,
	name = 'HeaderActions',
	className,
	children,
	...tailwind
}: types.HeaderActionsProps) => {
	const base = styles.headerActions;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/marketing/sections/header
