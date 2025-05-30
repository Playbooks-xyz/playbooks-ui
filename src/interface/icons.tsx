import { FaWrapper } from 'components/fa-wrapper';
import { Div } from 'interface/html';
import * as styles from 'styles/icon-styles';
import * as types from 'types/icon-types';
import { classBuilder } from 'utils';

export const Icon = ({ id, name = 'Icon', type, icon, tailwind, className, ...props }: types.IconProps) => {
	const computed = { type, icon, tailwind, className, ...props };

	switch (type) {
		case 'fab':
			return <FabIcon {...computed} />;

		case 'fad':
			return <FadIcon {...computed} />;

		case 'fal':
			return <FalIcon {...computed} />;

		case 'far':
			return <FarIcon {...computed} />;

		case 'fas':
			return <FasIcon {...computed} />;

		case 'wrapped-fab':
			return <WrappedFabIcon {...computed} />;

		case 'wrapped-fad':
			return <WrappedFadIcon {...computed} />;

		case 'wrapped-far':
			return <WrappedFarIcon {...computed} />;

		default:
			return <FarIcon {...computed} />;
	}
};

export const FabIcon = ({ id, name = 'FabIcon', icon, tailwind, className, ...props }: types.IconProps) => {
	const base = styles.icon;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return <FaWrapper type='fab' icon={icon} className={computed} />;
};

export const FadIcon = ({ id, name = 'FadIcon', icon, tailwind, className, ...props }: types.IconProps) => {
	const base = styles.icon;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return <FaWrapper type='fad' icon={icon} className={computed} />;
};

export const FalIcon = ({ id, name = 'FalIcon', icon, tailwind, className, ...props }: types.IconProps) => {
	const base = styles.icon;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return <FaWrapper type='fal' icon={icon} className={computed} />;
};

export const FarIcon = ({ id, name = 'FarIcon', icon, tailwind, className, ...props }: types.IconProps) => {
	const base = styles.icon;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return <FaWrapper type='far' icon={icon} className={computed} />;
};

export const FasIcon = ({ id, name = 'FasIcon', icon, tailwind, className, ...props }: types.IconProps) => {
	const base = styles.icon;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return <FaWrapper type='fas' icon={icon} className={computed} />;
};

export const WrappedFabIcon = ({
	id,
	name = 'WrappedFabIcon',
	icon,
	wrapper,
	tailwind,
	className,
	...props
}: types.IconProps) => {
	const base = { ...styles.wrappedIcon, ...wrapper };
	const computed = { ...base, ...props, className };

	return (
		<Div {...computed}>
			<FabIcon icon={icon} tailwind={tailwind} />
		</Div>
	);
};

export const WrappedFadIcon = ({
	id,
	name = 'WrappedFadIcon',
	icon,
	wrapper,
	tailwind,
	className,
	...props
}: types.IconProps) => {
	const base = { ...styles.wrappedIcon, ...wrapper };
	const computed = { ...base, ...props, className };

	return (
		<Div {...computed}>
			<FadIcon icon={icon} tailwind={tailwind} />
		</Div>
	);
};

export const WrappedFarIcon = ({
	id,
	name = 'WrappedFarIcon',
	icon,
	wrapper,
	tailwind,
	className,
	...props
}: types.IconProps) => {
	const base = { ...styles.wrappedIcon, ...wrapper };
	const computed = { ...base, ...props, className };

	return (
		<Div {...computed}>
			<FarIcon icon={icon} tailwind={tailwind} />
		</Div>
	);
};

// Docs
// https://tailwindui.com/interface/application-ui/overlays/notifications
