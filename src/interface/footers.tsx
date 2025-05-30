import * as HTML from '@ehubbell/html';
import { Btn } from 'interface/buttons';
import { Font, P } from 'interface/fonts';
import { Div, Li, Ul } from 'interface/html';
import { Link } from 'interface/links';
import * as styles from 'styles/footer-styles';
import * as types from 'types/footer-types';
import { tailwindClassBuilder } from 'utils';

export const Footer = ({ id, name = 'Footer', tailwind, className, children, style, ...props }: types.FooterProps) => {
	const base = styles.footer;
	const computed = tailwindClassBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.Footer name={name} className={computed} style={style}>
			{children}
		</HTML.Footer>
	);
};

export const FooterHeader = ({
	id,
	name = 'FooterHeader',
	tailwind,
	className,
	children,
	...props
}: types.FooterHeaderProps) => {
	const base = styles.footerHeader;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const FooterBody = ({
	id,
	name = 'FooterBody',
	tailwind,
	className,
	children,
	...props
}: types.FooterBodyProps) => {
	const base = styles.footerBody;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const FooterTitle = ({
	id,
	name = 'FooterTitle',
	size = 'h6',
	tailwind,
	className,
	children,
	...props
}: types.FooterTitleProps) => {
	const base = styles.footerTitle;
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const FooterText = ({
	id,
	name = 'FooterText',
	size,
	tailwind,
	className,
	children,
	...props
}: types.FooterTextProps) => {
	const base = styles.footerText;
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const FooterList = ({
	id,
	name = 'FooterList',
	tailwind,
	className,
	children,
	...props
}: types.FooterListProps) => {
	const base = styles.footerList;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Ul {...computed}>{children}</Ul>;
};

export const FooterItem = ({
	id,
	name = 'FooterItem',
	spacing = '',
	tailwind,
	className,
	children,
	...props
}: types.FooterItemProps) => {
	const base = styles.footerItem;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Li {...computed}>{children}</Li>;
};

export const FooterBtn = ({
	id,
	name = 'FooterBtn',
	variant = 'text',
	tailwind,
	className,
	children,
	...props
}: types.FooterBtnProps) => {
	const base = styles.footerBtn;
	const computed = { ...base, ...props, tailwind, children, className, name };

	return <Btn variant={variant} {...computed} />;
};

export const FooterLink = ({
	id,
	name = 'FooterLink',
	variant = 'text',
	tailwind,
	className,
	children,
	...props
}: types.FooterLinkProps) => {
	const base = styles.footerLink;
	const computed = { ...base, ...props, tailwind, children, className, name };

	return <Link variant={variant} {...computed} />;
};

export const FooterFooter = ({
	id,
	name = 'FooterFooter',
	tailwind,
	className,
	children,
	...props
}: types.FooterBodyProps) => {
	const base = styles.footerFooter;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/marketing/sections/footers
