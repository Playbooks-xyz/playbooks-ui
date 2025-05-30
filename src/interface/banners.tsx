import { Div } from 'interface/html';
import { Font, P } from 'interface/fonts';
import { FarIcon } from 'interface/icons';
import * as styles from 'styles/banner-styles';
import * as types from 'types/banner-types';

export const Banner = ({ id, name = 'Banner', className, children, ...tailwind }: types.BannerProps) => {
	const base = styles.banner;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const BannerIcon = ({
	id,
	name = 'BannerIcon',
	icon = 'exclamation-circle',
	className,
	...tailwind
}: types.BannerIconProps) => {
	const base = styles.bannerIcon;
	const props = { ...base, ...tailwind, className, name };

	return (
		<Div {...props}>
			<FarIcon icon={icon} />
		</Div>
	);
};

export const BannerBody = ({ id, name = 'BannerBody', className, children, ...tailwind }: types.BannerBodyProps) => {
	const base = styles.bannerBody;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const BannerTitle = ({
	id,
	name = 'BannerTitle',
	size = 'h6',
	className,
	children,
	...tailwind
}: types.BannerTitleProps) => {
	const base = styles.bannerTitle;
	const props = { ...base, ...tailwind, className, name };

	return (
		<Font size={size} {...props}>
			{children}
		</Font>
	);
};

export const BannerText = ({ id, name = 'BannerText', className, children, ...tailwind }: types.BannerTextProps) => {
	const base = styles.bannerText;
	const props = { ...base, ...tailwind, className, name };

	return <P {...props}>{children}</P>;
};

export const BannerActions = ({
	id,
	name = 'BannerActions',
	className,
	children,
	...tailwind
}: types.BannerActionsProps) => {
	const base = styles.bannerActions;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

// Docs:
// https://tailwindui.com/interface/application-ui/feedback/banners
