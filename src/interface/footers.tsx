import * as HTML from '@ehubbell/html';
import { Btn } from 'interface/buttons';
import { Font, P } from 'interface/fonts';
import { Div, Li, Ul } from 'interface/html';
import { Link } from 'interface/links';
import * as styles from 'styles';
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
} from 'types/footer-types';
import { borderProps, tailwindClassBuilder } from 'utils';

export const Footer = ({ id, name = 'Footer', className, children, style, ...tailwind }: iFooter) => {
	const base = styles.footerBase;
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<HTML.Footer name={name} className={classes} style={style}>
			{children}
		</HTML.Footer>
	);
};

export const FooterHeader = ({ id, name = 'FooterHeader', className, children, ...tailwind }: iFooterHeader) => {
	const base = styles.footerHeaderBase;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const FooterBody = ({ id, name = 'FooterBody', className, children, ...tailwind }: iFooterBody) => {
	const base = styles.footerBodyBase;
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
	const base = styles.footerTitleBase;
	const props = { ...base, ...tailwind, className, name };

	return (
		<Font size={size} {...props}>
			{children}
		</Font>
	);
};

export const FooterText = ({ id, name = 'FooterText', size, className, children, ...tailwind }: iFooterText) => {
	const base = styles.footerTextBase;
	const props = { ...base, ...tailwind, className, name };

	return <P {...props}>{children}</P>;
};

export const FooterList = ({ id, name = 'FooterList', className, children, ...tailwind }: iFooterList) => {
	const base = styles.footerListBase;
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
	const base = styles.footerItemBase;
	const props = { ...base, ...tailwind, className, name };

	return <Li {...props}>{children}</Li>;
};

export const FooterBtn = ({
	id,
	name = 'FooterBtn',
	variant = 'text',
	className,
	children,
	...tailwind
}: iFooterBtn) => {
	const base = styles.footerBtnBase;
	const props = { ...base, ...tailwind, children, className, name };

	return <Btn variant={variant} {...props} />;
};

export const FooterLink = ({
	id,
	name = 'FooterLink',
	variant = 'text',
	className,
	children,
	...tailwind
}: iFooterLink) => {
	const base = styles.footerLinkBase;
	const props = { ...base, ...tailwind, children, className, name };

	return <Link variant={variant} {...props} />;
};

export const FooterFooter = ({ id, name = 'FooterFooter', className, children, ...tailwind }: iFooterBody) => {
	const base = styles.footerFooterBase;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/marketing/sections/footers
