import * as theme from '@playbooks/theme';
import { Btn } from 'interface/buttons';
import { Font, P } from 'interface/fonts';
import { Div, Li, Ul } from 'interface/html';
import { Link } from 'interface/links';
import * as types from 'types/footer-types';
import { classBuilder } from 'utils';

export const Footer = ({ id, name = 'Footer', tailwind, className, children, style, ...props }: types.FooterProps) => {
	const base = theme.footer();
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<Div id={id} name={name} className={computed} style={style}>
			{children}
		</Div>
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
	const base = theme.footerHeader();
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
	const base = theme.footerBody();
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
	const base = theme.footerTitle();
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
	tailwind,
	className,
	children,
	...props
}: types.FooterTextProps) => {
	const base = theme.footerText();
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
	const base = theme.footerList();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Ul {...computed}>{children}</Ul>;
};

export const FooterItem = ({
	id,
	name = 'FooterItem',
	tailwind,
	className,
	children,
	...props
}: types.FooterItemProps) => {
	const base = theme.footerItem();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Li {...computed}>{children}</Li>;
};

export const FooterBtn = ({
	id,
	name = 'FooterBtn',
	tailwind,
	className,
	children,
	...props
}: types.FooterBtnProps) => {
	const base = theme.footerBtn();
	const computed = { ...base, ...props, tailwind, children, className, name };

	return <Btn {...computed} />;
};

export const FooterLink = ({
	id,
	name = 'FooterLink',
	tailwind,
	className,
	children,
	...props
}: types.FooterLinkProps) => {
	const base = theme.footerLink();
	const computed = { ...base, ...props, tailwind, children, className, name };

	return <Link {...computed} />;
};

export const FooterFooter = ({
	id,
	name = 'FooterFooter',
	tailwind,
	className,
	children,
	...props
}: types.FooterBodyProps) => {
	const base = theme.footerFooter();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/marketing/sections/footers
