import { Font, P } from 'interface/fonts';
import { Div } from 'interface/html';
import { FarIcon } from 'interface/icons';
import * as styles from 'styles/banner-styles';
import * as types from 'types/banner-types';

export const Banner = ({ id, name = 'Banner', tailwind, className, children, ...props }: types.BannerProps) => {
	const base = styles.banner;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const BannerIcon = ({
	id,
	name = 'BannerIcon',
	icon = 'exclamation-circle',
	tailwind,
	className,
	...props
}: types.BannerIconProps) => {
	const base = styles.bannerIcon;
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div {...computed}>
			<FarIcon icon={icon} />
		</Div>
	);
};

export const BannerBody = ({
	id,
	name = 'BannerBody',
	tailwind,
	className,
	children,
	...props
}: types.BannerBodyProps) => {
	const base = styles.bannerBody;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const BannerTitle = ({
	id,
	name = 'BannerTitle',
	size = 'h6',
	tailwind,
	className,
	children,
	...props
}: types.BannerTitleProps) => {
	const base = styles.bannerTitle;
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const BannerText = ({
	id,
	name = 'BannerText',
	tailwind,
	className,
	children,
	...props
}: types.BannerTextProps) => {
	const base = styles.bannerText;
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const BannerActions = ({
	id,
	name = 'BannerActions',
	tailwind,
	className,
	children,
	...props
}: types.BannerActionsProps) => {
	const base = styles.bannerActions;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs:
// https://tailwindui.com/interface/application-ui/feedback/banners
