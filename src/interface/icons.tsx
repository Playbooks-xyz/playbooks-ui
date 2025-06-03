import { FaWrapper } from 'components/fa-wrapper';
import { useInterface } from 'contexts';
import { Div } from 'interface/html';
import * as types from 'types/icon-types';
import { computeTailwind } from 'utils';

export const Icon = props => {
	switch (props?.type) {
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

export const FabIcon = ({ id, name = 'FabIcon', icon, tailwind, className, ...props }: types.IconProps) => {
	const { theme } = useInterface();
	const base = theme.icon();
	const computed = computeTailwind({ ...base, ...props, tailwind, className });

	return <FaWrapper type='fab' icon={icon} className={computed} />;
};

export const FadIcon = ({ id, name = 'FadIcon', icon, tailwind, className, ...props }: types.IconProps) => {
	const { theme } = useInterface();
	const base = theme.icon();
	const computed = computeTailwind({ ...base, ...props, tailwind, className });

	return <FaWrapper type='fad' icon={icon} className={computed} />;
};

export const FalIcon = ({ id, name = 'FalIcon', icon, tailwind, className, ...props }: types.IconProps) => {
	const { theme } = useInterface();
	const base = theme.icon();
	const computed = computeTailwind({ ...base, ...props, tailwind, className });

	return <FaWrapper type='fal' icon={icon} className={computed} />;
};

export const FarIcon = ({ id, name = 'FarIcon', icon, tailwind, className, ...props }: types.IconProps) => {
	const { theme } = useInterface();
	const base = theme.icon();
	const computed = computeTailwind({ ...base, ...props, tailwind, className });

	return <FaWrapper type='far' icon={icon} className={computed} />;
};

export const FasIcon = ({ id, name = 'FasIcon', icon, tailwind, className, ...props }: types.IconProps) => {
	const { theme } = useInterface();
	const base = theme.icon();
	const computed = computeTailwind({ ...base, ...props, tailwind, className });

	return <FaWrapper type='fas' icon={icon} className={computed} />;
};

export const WrappedFabIcon = ({
	id,
	name = 'WrappedFabIcon',
	icon,
	tailwind,
	className,
	...props
}: types.IconProps) => {
	const { theme } = useInterface();
	const base = theme.wrappedIcon();
	const computed = { ...base, ...props, tailwind, className };

	return (
		<Div {...computed}>
			<FabIcon icon={icon} tailwind={tailwind?.icon} />
		</Div>
	);
};

export const WrappedFadIcon = ({
	id,
	name = 'WrappedFadIcon',
	icon,
	tailwind,
	className,
	...props
}: types.IconProps) => {
	const { theme } = useInterface();
	const base = theme.wrappedIcon();
	const computed = { ...base, ...props, tailwind, className };

	return (
		<Div {...computed}>
			<FadIcon icon={icon} tailwind={tailwind?.icon} />
		</Div>
	);
};

export const WrappedFarIcon = ({
	id,
	name = 'WrappedFarIcon',
	icon,
	tailwind,
	className,
	...props
}: types.IconProps) => {
	const { theme } = useInterface();
	const base = theme.wrappedIcon();
	const computed = { ...base, ...props, tailwind, className };

	return (
		<Div {...computed}>
			<FarIcon icon={icon} tailwind={tailwind?.icon} />
		</Div>
	);
};

// Docs
// https://tailwindui.com/interface/application-ui/overlays/notifications
