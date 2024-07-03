import { TextBtn } from 'interface/buttons';
import { Font, P } from 'interface/fonts';
import {
	iFooter,
	iFooterBody,
	iFooterBtn,
	iFooterHeader,
	iFooterItem,
	iFooterLink,
	iFooterList,
	iFooterText,
	iFooterTitle,
} from 'interface/footers.types';
import { Div, Li, Ul } from 'interface/html';
import { TextLink } from 'interface/links';
import { borderProps, tailwindClassBuilder } from 'tailwind';

export const Footer = ({ id, name = 'Footer', className, children, ...tailwind }: iFooter) => {
	const base = {
		bgColor: 'bg-white dark:bg-gray-900',
		border: 'border-t',
		...borderProps,
		spacing: 'py-6',
	};
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<footer data-name={name} className={classes}>
			{children}
		</footer>
	);
};

export const FooterHeader = ({ id, name = 'FooterHeader', className, children, ...tailwind }: iFooterHeader) => {
	const base = {
		border: 'border',
		...borderProps,
		spacing: 'py-8',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const FooterBody = ({ id, name = 'FooterBody', className, children, ...tailwind }: iFooterBody) => {
	const base = { spacing: 'py-10', width: 'w-full' };
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const FooterTitle = ({
	id,
	name = 'FooterTitle',
	size = 'h6',
	className,
	children,
	...tailwind
}: iFooterTitle) => {
	const base = { fontSize: 'text-base', fontWeight: 'font-bold', tracking: 'tracking-wider' };
	const props = { ...base, ...tailwind, className, name };

	return (
		<Font size={size} {...props}>
			{children}
		</Font>
	);
};

export const FooterText = ({ id, name = 'FooterText', size, className, children, ...tailwind }: iFooterText) => {
	const base = { fontSize: 'text-sm' };
	const props = { ...base, ...tailwind, className, name };

	return <P {...props}>{children}</P>;
};

export const FooterList = ({ id, name = 'FooterList', className, children, ...tailwind }: iFooterList) => {
	const base = { display: 'flex-column', space: 'space-y-2', spacing: '' };
	const props = { ...base, ...tailwind, className, name };

	return <Ul {...props}>{children}</Ul>;
};

export const FooterItem = ({
	id,
	name = 'FooterItem',
	spacing = '',
	className,
	children,
	...tailwind
}: iFooterItem) => {
	const base = { display: 'block', spacing: 'py-1' };
	const props = { ...base, ...tailwind, className, name };

	return <Li {...props}>{children}</Li>;
};

export const FooterBtn = ({
	id,
	name = 'FooterBtn',
	taskRunning,
	onClick,
	className,
	children,
	...tailwind
}: iFooterBtn) => {
	const base = { fontSize: 'text-sm' };
	const props = { ...base, ...tailwind, className, name, onClick, children };

	return <TextBtn size='' onClick={onClick} {...props} />;
};

export const FooterLink = ({ id, name = 'FooterLink', href = '', className, children, ...tailwind }: iFooterLink) => {
	const base = { fontSize: 'text-sm' };
	const props = { ...base, ...tailwind, className, name, href, children };

	return <TextLink href={href} {...props} />;
};

export const FooterFooter = ({ id, name = 'FooterFooter', className, children, ...tailwind }: iFooterBody) => {
	const base = { border: 'border-t', ...borderProps, spacing: 'pt-6' };
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/marketing/sections/footers
