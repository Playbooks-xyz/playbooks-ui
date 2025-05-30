import { Font, P } from 'interface/fonts';
import { Div } from 'interface/html';
import { FarIcon } from 'interface/icons';
import * as styles from 'styles';
import { iBanner, iBannerActions, iBannerBody, iBannerIcon, iBannerText, iBannerTitle } from 'types/banner-types';

export const Banner = ({ id, name = 'Banner', className, children, ...tailwind }: iBanner) => {
	const base = styles.banner;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const BannerIcon = ({ id, name = 'BannerIcon', icon = 'exclamation-circle', className, ...tailwind }: iBannerIcon) => {
	const base = styles.bannerIcon;
	const props = { ...base, ...tailwind, className, name };

	return (
		<Div {...props}>
			<FarIcon icon={icon} />
		</Div>
	);
};

export const BannerBody = ({ id, name = 'BannerBody', className, children, ...tailwind }: iBannerBody) => {
	const base = styles.bannerBody;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const BannerTitle = ({ id, name = 'BannerTitle', size = 'h6', className, children, ...tailwind }: iBannerTitle) => {
	const base = styles.bannerTitle;
	const props = { ...base, ...tailwind, className, name };

	return (
		<Font size={size} {...props}>
			{children}
		</Font>
	);
};

export const BannerText = ({ id, name = 'BannerText', className, children, ...tailwind }: iBannerText) => {
	const base = styles.bannerText;
	const props = { ...base, ...tailwind, className, name };

	return <P {...props}>{children}</P>;
};

export const BannerActions = ({ id, name = 'BannerActions', className, children, ...tailwind }: iBannerActions) => {
	const base = styles.bannerActions;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

// Docs:
// https://tailwindui.com/interface/application-ui/feedback/banners
