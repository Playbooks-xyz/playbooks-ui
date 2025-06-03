import { useInterface } from 'contexts';
import { Btn } from 'interface/buttons';
import { Font, P } from 'interface/fonts';
import { Div, Li, Ul } from 'interface/html';
import { Link } from 'interface/links';
import * as types from 'types/footer-types';

export const Footer = ({ id, name = 'Footer', tailwind, className, children, ...props }: types.FooterProps) => {
	const { theme } = useInterface();
	const base = theme.footer();
	const computed = { ...base, ...props, tailwind, className };

	return (
		<Div id={id} name={name} {...computed}>
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
	const { theme } = useInterface();
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
	const { theme } = useInterface();
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
	const { theme } = useInterface();
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
	const { theme } = useInterface();
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
	const { theme } = useInterface();
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
	const { theme } = useInterface();
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
	const { theme } = useInterface();
	const base = theme.footerBtn();
	const computed = { ...base, ...props, tailwind, className, children, name };

	return <Btn variant='text' {...computed} />;
};

export const FooterLink = ({
	id,
	name = 'FooterLink',
	tailwind,
	className,
	children,
	...props
}: types.FooterLinkProps) => {
	const { theme } = useInterface();
	const base = theme.footerLink();
	const computed = { ...base, ...props, tailwind, className, children, name };

	return <Link variant='text' {...computed} />;
};

export const FooterFooter = ({
	id,
	name = 'FooterFooter',
	tailwind,
	className,
	children,
	...props
}: types.FooterBodyProps) => {
	const { theme } = useInterface();
	const base = theme.footerFooter();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/marketing/sections/footers
