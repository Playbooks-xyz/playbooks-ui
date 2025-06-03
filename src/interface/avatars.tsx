import { useInterface } from 'contexts';
import { Font, P } from 'interface/fonts';
import { Div, Img } from 'interface/html';
import * as types from 'types/avatar-types';

export const Avatar = ({ id, name = 'Avatar', tailwind, className, children, ...props }: types.AvatarProps) => {
	const { theme } = useInterface();
	const base = theme.avatar();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const AvatarBadge = ({
	id,
	name = 'AvatarBadge',
	size = 'sm',
	tailwind,
	className,
	children,
	...props
}: types.AvatarBadgeProps) => {
	const { theme } = useInterface();
	const base = theme.avatarBadge({ size });
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const AvatarImg = ({
	id,
	name = 'AvatarImg',
	alt = 'thumbnail',
	size = 'md',
	tailwind,
	className,
	...props
}: types.AvatarImgProps) => {
	const { theme } = useInterface();
	const base = theme.avatarImg({ size });
	const computed = { ...base, ...props, tailwind, className, name };

	return <Img alt={alt} {...computed} />;
};

export const AvatarBody = ({
	id,
	name = 'AvatarBody',
	tailwind,
	className,
	children,
	...props
}: types.AvatarBodyProps) => {
	const { theme } = useInterface();
	const base = theme.avatarBody();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const AvatarTitle = ({
	id,
	name = 'AvatarTitle',
	size = 'h6',
	tailwind,
	className,
	children,
	...props
}: types.AvatarTitleProps) => {
	const { theme } = useInterface();
	const base = theme.avatarTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const AvatarText = ({
	id,
	name = 'AvatarText',
	tailwind,
	className,
	children,
	...props
}: types.AvatarTextProps) => {
	const { theme } = useInterface();
	const base = theme.avatarText();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const AvatarActions = ({
	id,
	name = 'AvatarActions',
	tailwind,
	className,
	children,
	...props
}: types.AvatarActionsProps) => {
	const { theme } = useInterface();
	const base = theme.avatarActions();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs:
// https://tailwindui.com/interface/application-ui/elements/avatars
