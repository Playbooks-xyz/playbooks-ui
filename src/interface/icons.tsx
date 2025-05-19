import { FaWrapper } from 'components/fa-wrapper';
import { Div } from 'interface/html';
import { iIcon } from 'interface/icons.types';
import { tailwindClassBuilder } from 'utils';

export const Icon = ({ id, name = 'Icon', type, icon, className, ...tailwind }: iIcon) => {
	const props = { type, icon, className, ...tailwind };

	switch (type) {
		case 'fab':
			return <FabIcon {...props} />;

		case 'fad':
			return <FadIcon {...props} />;

		case 'fal':
			return <FalIcon {...props} />;

		case 'far':
			return <FarIcon {...props} />;

		case 'fas':
			return <FasIcon {...props} />;

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

export const FabIcon = ({ id, name = 'FabIcon', icon, className, ...tailwind }: iIcon) => {
	const base = { color: 'text-inherit', flex: 'shrink-0', size: '' };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return <FaWrapper type='fab' icon={icon} className={classes} />;
};

export const FadIcon = ({ id, name = 'FadIcon', icon, className, ...tailwind }: iIcon) => {
	const base = { color: 'text-inherit', flex: 'shrink-0', size: '' };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return <FaWrapper type='fad' icon={icon} className={classes} />;
};

export const FalIcon = ({ id, name = 'FalIcon', icon, className, ...tailwind }: iIcon) => {
	const base = { color: 'text-inherit', flex: 'shrink-0', size: '' };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return <FaWrapper type='fal' icon={icon} className={classes} />;
};

export const FarIcon = ({ id, name = 'FarIcon', icon, className, ...tailwind }: iIcon) => {
	const base = { color: 'text-inherit', flex: 'shrink-0', size: '' };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return <FaWrapper type='far' icon={icon} className={classes} />;
};

export const FasIcon = ({ id, name = 'FasIcon', icon, className, ...tailwind }: iIcon) => {
	const base = { color: 'text-inherit', flex: 'shrink-0', size: '' };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return <FaWrapper type='fas' icon={icon} className={classes} />;
};

export const WrappedFabIcon = ({ id, name = 'WrappedFabIcon', icon, wrapper, className, ...tailwind }: iIcon) => {
	const base = {
		bgColor: 'bg-gray-100 dark:bg-gray-800',
		borderRadius: 'rounded-md',
		color: 'text-blue-500 dark:text-cyan-500',
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
		color: 'text-blue-500 dark:text-cyan-500',
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
		color: 'text-blue-500 dark:text-cyan-500',
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
