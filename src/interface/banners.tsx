import { iBanner, iBannerActions, iBannerBody, iBannerIcon, iBannerText, iBannerTitle } from 'types/banners.types';
import { H5, H6, Small } from 'interface/fonts';
import { Div } from 'interface/html';
import { FadIcon } from 'interface/icons';
import { borderProps } from 'tailwind';

export const Banner = ({ id, name = 'Banner', className, children, ...tailwind }: iBanner) => {
	const base = {
		bgColor: '',
		border: 'border-b',
		...borderProps,
		color: 'white',
		display: 'flex-between',
		space: 'space-x-4',
		spacing: 'py-2 px-4',
		width: 'w-full',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const BannerIcon = ({ id, name = 'BannerIcon', icon = 'house', className, ...tailwind }: iBannerIcon) => {
	const base = { color: 'blue-500 dark:orange-500' };
	const props = { ...base, ...tailwind, className, name };

	return <FadIcon icon={icon} {...props} />;
};

export const BannerBody = ({ id, name = 'BannerBody', className, children, ...tailwind }: iBannerBody) => {
	const base = { display: 'flex-start', space: 'space-x-3', spacing: 'py-1' };
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
	const base = { color: 'gray-700 dark:white', fontWeight: 'font-semibold' };
	const props = { ...base, ...tailwind, className, name };

	switch (size) {
		case 'h5':
			return <H5 {...props}>{children}</H5>;

		default:
			return <H6 {...props}>{children}</H6>;
	}
};

export const BannerText = ({ id, name = 'BannerText', className, children, ...tailwind }: iBannerText) => {
	const base = { color: 'gray-600 dark:gray-200' };
	const props = { ...base, ...tailwind, className, name };

	return <Small {...props}>{children}</Small>;
};

export const BannerActions = ({ id, name = 'BannerActions', className, children, ...tailwind }: iBannerActions) => {
	const base = { display: 'flex-start', flex: 'shrink-0', spacing: 'space-x-2' };
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/marketing/elements/banners
