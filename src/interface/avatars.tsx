import { Font, P } from 'interface/fonts';
import { Div, Img } from 'interface/html';
import * as styles from 'styles/avatar-styles';
import { computeAvatarSize } from 'theme';
import * as types from 'types/avatar-types';

export const Avatar = ({ id, name = 'Avatar', tailwind, className, children, ...props }: types.AvatarProps) => {
	const base = styles.avatar;
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
	const base = { ...styles.avatarBadge, size: computeAvatarSize(size) };
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const AvatarImg = ({
	id,
	name = 'AvatarImg',
	alt = 'avatar',
	size = 'md',
	src,
	tailwind,
	className,
	...props
}: types.AvatarImgProps) => {
	const base = { ...styles.avatarImg, size: computeAvatarSize(size) };
	const computed = { ...base, ...props, tailwind, className, name };

	return <Img src={src} alt={alt} {...computed} />;
};

export const AvatarBody = ({
	id,
	name = 'AvatarBody',
	tailwind,
	className,
	children,
	...props
}: types.AvatarBodyProps) => {
	const base = styles.avatarBody;
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
	const base = styles.avatarTitle;
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
	const base = styles.avatarText;
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
	const base = styles.avatarActions;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs:
// https://tailwindui.com/interface/application-ui/elements/avatars
