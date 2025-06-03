import { FaWrapper } from 'components/fa-wrapper';
import { useInterface } from 'contexts';
import * as types from 'types/icon-types';

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

		default:
			return <FarIcon {...props} />;
	}
};

export const FabIcon = ({ id, name = 'FabIcon', icon, tailwind, className, ...props }: types.IconProps) => {
	const { theme } = useInterface();
	const base = theme.icon();
	const computed = { ...base, ...props, tailwind, className, name };

	return <FaWrapper type='fab' icon={icon} {...computed} />;
};

export const FadIcon = ({ id, name = 'FadIcon', icon, tailwind, className, ...props }: types.IconProps) => {
	const { theme } = useInterface();
	const base = theme.icon();
	const computed = { ...base, ...props, tailwind, className, name };

	return <FaWrapper type='fad' icon={icon} {...computed} />;
};

export const FalIcon = ({ id, name = 'FalIcon', icon, tailwind, className, ...props }: types.IconProps) => {
	const { theme } = useInterface();
	const base = theme.icon();
	const computed = { ...base, ...props, tailwind, className, name };

	return <FaWrapper type='fal' icon={icon} {...computed} />;
};

export const FarIcon = ({ id, name = 'FarIcon', icon, tailwind, className, ...props }: types.IconProps) => {
	const { theme } = useInterface();
	const base = theme.icon();
	const computed = { ...base, ...props, tailwind, className, name };

	return <FaWrapper type='far' icon={icon} {...computed} />;
};

export const FasIcon = ({ id, name = 'FasIcon', icon, tailwind, className, ...props }: types.IconProps) => {
	const { theme } = useInterface();
	const base = theme.icon();
	const computed = { ...base, ...props, tailwind, className, name };

	return <FaWrapper type='fas' icon={icon} {...computed} />;
};

// Docs
// https://tailwindui.com/interface/application-ui/overlays/notifications
