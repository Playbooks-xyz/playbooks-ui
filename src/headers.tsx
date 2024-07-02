import { Font } from 'fonts';
import { iHeader, iHeaderActions, iHeaderSubtitle, iHeaderText, iHeaderTitle } from 'types/headers.types';
import { Div } from 'html';
import { borderProps, tailwindClassBuilder } from 'tailwind';

export const Header = ({ id, name = 'Header', className, children, ...tailwind }: iHeader) => {
	const base = {
		border: ' border-b',
		...borderProps,
		display: 'flex-between',
		space: 'space-x-4',
		spacing: 'py-4',
		width: 'w-full',
	};
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<header data-name={name} className={classes}>
			{children}
		</header>
	);
};

export const HeaderTitle = ({ id, name = 'HeaderTitle', size, className, children, ...tailwind }: iHeaderTitle) => {
	const base = {
		display: 'flex-start',
		flex: 'grow',
		fontWeight: 'font-bold',
		space: 'space-x-4',
		tracking: 'tracking-wide',
		textTransform: 'capitalize',
	};
	const props = { ...base, ...tailwind, className, name };

	return (
		<Font size={size || 'h4'} {...props}>
			{children}
		</Font>
	);
};

export const HeaderSubtitle = ({ id, name = 'HeaderSubtitle', className, children, ...tailwind }: iHeaderSubtitle) => {
	const base = {
		color: 'gray-600 dark:gray-300',
		fontFamily: 'font-secondary',
		fontWeight: 'font-normal',
		tracking: 'tracking-normal',
	};
	const props = { ...base, ...tailwind, className, name };

	return (
		<Font size={'h5'} {...props}>
			{children}
		</Font>
	);
};

export const HeaderText = ({ id, name = 'HeaderText', className, children, ...tailwind }: iHeaderText) => {
	const base = {
		color: 'gray-700 dark:gray-100',
		fontWeight: 'font-light',
		fontFamily: 'font-secondary',
		tracking: 'tracking-normal',
	};
	const props = { ...base, ...tailwind, className, name };

	return (
		<Font size={'h6'} {...props}>
			{children}
		</Font>
	);
};

export const HeaderActions = ({ id, name = 'HeaderActions', className, children, ...tailwind }: iHeaderActions) => {
	const base = {
		display: 'flex-end',
		space: 'space-x-4',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/marketing/sections/header
