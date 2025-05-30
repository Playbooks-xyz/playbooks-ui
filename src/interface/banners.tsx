import { H5, H6, Small } from 'interface/fonts';
import { Div } from 'interface/html';
import { Icon } from 'interface/icons';
import * as styles from 'styles';
import { iBanner, iBannerActions, iBannerBody, iBannerIcon, iBannerText, iBannerTitle } from 'types/banner-types';

export const Banner = ({ id, name = 'Banner', className, children, ...tailwind }: iBanner) => {
	const base = styles.bannerBase;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const BannerIcon = ({
	id,
	name = 'BannerIcon',
	type = 'fad',
	icon = 'house',
	className,
	...tailwind
}: iBannerIcon) => {
	const base = styles.bannerIconBase;
	const props = { ...base, ...tailwind, className, name };

	return <Icon type={type} icon={icon} {...props} />;
};

export const BannerBody = ({ id, name = 'BannerBody', className, children, ...tailwind }: iBannerBody) => {
	const base = styles.bannerBodyBase;
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
}: iBannerTitle) => {
	const base = styles.bannerTitleBase;
	const props = { ...base, ...tailwind, className, name };

	switch (size) {
		case 'h5':
			return <H5 {...props}>{children}</H5>;

		default:
			return <H6 {...props}>{children}</H6>;
	}
};

export const BannerText = ({ id, name = 'BannerText', className, children, ...tailwind }: iBannerText) => {
	const base = styles.bannerTextBase;
	const props = { ...base, ...tailwind, className, name };

	return <Small {...props}>{children}</Small>;
};

export const BannerActions = ({ id, name = 'BannerActions', className, children, ...tailwind }: iBannerActions) => {
	const base = styles.bannerActionsBase;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/marketing/elements/banners
