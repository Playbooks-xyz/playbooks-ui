import { FabWrapper, FadWrapper, FarWrapper } from 'components/fa-wrapper';
import { Div, Img } from 'interface/html';
import { iIcon } from 'interface/icons.types';
import { tailwindClassBuilder } from 'tailwind';
import { isObject } from 'utils/helpers';

export const Icon = ({ id, name = 'Icon', type, icon, className, ...tailwind }: iIcon) => {
	const props = { type, icon, className, ...tailwind };

	switch (type) {
		case 'fab':
			return <FabIcon {...props} />;

		case 'fad':
			return <FadIcon {...props} />;

		case 'far':
			return <FarIcon {...props} />;

		case 'wrapped-fab':
			return <WrappedFabIcon {...props} />;

		case 'wrapped-fad':
			return <WrappedFadIcon {...props} />;

		case 'wrapped-far':
			return <WrappedFarIcon {...props} />;

		default:
			return <FarIcon {...props} />;
	}
};

export const FabIcon = ({ id, name = 'FabIcon', icon, src, className, ...tailwind }: iIcon) => {
	const base = { borderRadius: 'rounded-sm', color: 'text-inherit', flex: 'shrink-0', size: src ? 'w-5 h-5' : '' };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	if (src) return <Img src={src} className={classes} />;
	if (isObject(icon)) return null;
	return <FabWrapper icon={icon} className={classes} />;
};

export const FadIcon = ({ id, name = 'FadIcon', icon, src, className, ...tailwind }: iIcon) => {
	const base = { borderRadius: 'rounded-sm', color: 'text-inherit', flex: 'shrink-0', size: src ? 'w-5 h-5' : '' };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	if (src) return <Img src={src} className={classes} />;
	if (isObject(icon)) return null;
	return <FadWrapper icon={icon} className={classes} />;
};

export const FarIcon = ({ id, name = 'FarIcon', icon, src, className, ...tailwind }: iIcon) => {
	const base = { borderRadius: 'rounded-sm', color: 'text-inherit', flex: 'shrink-0', size: src ? 'w-5 h-5' : '' };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	if (src) return <Img src={src} className={classes} />;
	if (isObject(icon)) return null;
	return <FarWrapper icon={icon} className={classes} />;
};

export const WrappedFabIcon = ({ id, name = 'WrappedFabIcon', icon, wrapper, className, ...tailwind }: iIcon) => {
	const base = {
		bgColor: 'bg-gray-100 dark:bg-gray-800',
		borderRadius: 'rounded-md',
		color: 'blue-500 dark:cyan-500',
		display: 'flex-middle',
		flex: 'shrink-0',
		fontSize: 'text-lg',
		spacing: 'w-10 h-10',
	};
	const props = { ...base, ...wrapper, className };

	return (
		<Div {...props}>
			<FabIcon icon={icon} {...tailwind} />
		</Div>
	);
};

export const WrappedFadIcon = ({ id, name = 'WrappedFadIcon', icon, wrapper, className, ...tailwind }: iIcon) => {
	const base = {
		bgColor: 'bg-gray-100 dark:bg-gray-800',
		borderRadius: 'rounded-md',
		color: 'blue-500 dark:cyan-500',
		display: 'flex-middle',
		flex: 'shrink-0',
		fontSize: 'text-lg',
		spacing: 'w-10 h-10',
	};
	const props = { ...base, ...wrapper, className };

	return (
		<Div {...props}>
			<FadIcon icon={icon} {...tailwind} />
		</Div>
	);
};

export const WrappedFarIcon = ({ id, name = 'WrappedFarIcon', icon, wrapper, className, ...tailwind }: iIcon) => {
	const base = {
		bgColor: 'bg-gray-100 dark:bg-gray-800',
		borderRadius: 'rounded-md',
		color: 'blue-500 dark:cyan-500',
		display: 'flex-middle',
		flex: 'shrink-0',
		fontSize: 'text-lg',
		spacing: 'w-10 h-10',
	};
	const props = { ...base, ...wrapper, className };

	return (
		<Div {...props}>
			<FarIcon icon={icon} {...tailwind} />
		</Div>
	);
};

// Docs
// https://tailwindui.com/interface/application-ui/overlays/notifications
