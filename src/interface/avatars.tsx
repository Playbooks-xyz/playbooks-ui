import { Font } from 'interface/fonts';
import { Div, Img, Span } from 'interface/html';
import * as styles from 'styles';
import {
	iAvatar,
	iAvatarActions,
	iAvatarBadge,
	iAvatarBody,
	iAvatarImg,
	iAvatarText,
	iAvatarTitle,
} from 'types/avatar-types';
import { computeAvatarSize } from 'utils';

export const Avatar = ({ id, name = 'Avatar', className, children, ...tailwind }: iAvatar) => {
	const base = styles.avatarBase;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const AvatarBadge = ({ id, name = 'AvatarBadge', className, children, ...tailwind }: iAvatarBadge) => {
	const base = styles.avatarBadgeBase;
	const props = { ...base, ...tailwind, className, name };

	return <Span {...props}>{children}</Span>;
};

export const AvatarImg = ({
	id,
	name = 'AvatarImg',
	alt = 'avatar',
	size = 'md',
	src,
	className,
	...tailwind
}: iAvatarImg) => {
	const base = {
		...styles.avatarImgBase,
		size: computeAvatarSize(size),
	};
	const props = { ...base, ...tailwind, className, name };

	return <Img src={src} alt={alt} width='60px' {...props} />;
};

export const AvatarBody = ({ id, name = 'AvatarBody', className, children, ...tailwind }: iAvatarBody) => {
	const base = styles.avatarBodyBase;
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
}: iAvatarTitle) => {
	const base = styles.avatarTitleBase;
	const props = { ...base, ...tailwind, className, name };

	return (
		<Font size={size} {...props}>
			{children}
		</Font>
	);
};

export const AvatarText = ({ id, name = 'AvatarText', size = 'sm', className, children, ...tailwind }: iAvatarText) => {
	const base = styles.avatarTextBase;
	const props = { ...base, ...tailwind, className, name };

	return (
		<Font size={size} {...props}>
			{children}
		</Font>
	);
};

export const AvatarActions = ({ id, name = 'AvatarActions', className, children, ...tailwind }: iAvatarActions) => {
	const base = styles.avatarActionsBase;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

// Docs
//
