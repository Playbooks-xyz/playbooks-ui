import { Font, P } from 'interface/fonts';
import { Div, Img } from 'interface/html';
import * as styles from 'styles/avatar-styles';
import { computeAvatarSize } from 'utils';

export const Avatar = ({ id, name = 'Avatar', className, children, ...tailwind }: types.iAvatar) => {
	const base = styles.avatar;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const AvatarBadge = ({
	id,
	name = 'AvatarBadge',
	size = 'sm',
	className,
	children,
	...tailwind
}: types.iAvatarBadge) => {
	const base = { ...styles.avatarBadge, size: computeAvatarSize(size) };
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const AvatarImg = ({
	id,
	name = 'AvatarImg',
	alt = 'avatar',
	size = 'md',
	src,
	className,
	...tailwind
}: types.iAvatarImg) => {
	const base = { ...styles.avatarImg, size: computeAvatarSize(size) };
	const props = { ...base, ...tailwind, className, name };

	return <Img src={src} alt={alt} {...props} />;
};

export const AvatarBody = ({ id, name = 'AvatarBody', className, children, ...tailwind }: types.iAvatarBody) => {
	const base = styles.avatarBody;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const AvatarTitle = ({
	id,
	name = 'AvatarTitle',
	size = 'h6',
	className,
	children,
	...tailwind
}: types.iAvatarTitle) => {
	const base = styles.avatarTitle;
	const props = { ...base, ...tailwind, className, name };

	return (
		<Font size={size} {...props}>
			{children}
		</Font>
	);
};

export const AvatarText = ({ id, name = 'AvatarText', className, children, ...tailwind }: types.iAvatarText) => {
	const base = styles.avatarText;
	const props = { ...base, ...tailwind, className, name };

	return <P {...props}>{children}</P>;
};

export const AvatarActions = ({
	id,
	name = 'AvatarActions',
	className,
	children,
	...tailwind
}: types.iAvatarActions) => {
	const base = styles.avatarActions;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

// Docs:
// https://tailwindui.com/interface/application-ui/elements/avatars
