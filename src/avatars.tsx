import {
	iAvatar,
	iAvatarActions,
	iAvatarBadge,
	iAvatarBody,
	iAvatarImg,
	iAvatarText,
	iAvatarTitle,
} from 'types/avatars.types';
import { Font } from 'fonts';
import { Div, Img, Span } from 'html';
import { computeAvatarSize } from 'tailwind';

export const Avatar = ({ id, name = 'Avatar', className, children, ...tailwind }: iAvatar) => {
	const base = { display: 'flex-start', space: 'space-x-4', width: 'w-full' };
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const AvatarBadge = ({ id, name = 'AvatarBadge', className, children, ...tailwind }: iAvatarBadge) => {
	const base = {
		bgColor: 'bg-blue-500 dark:bg-orange-500',
		border: 'border-2',
		borderColor: 'border-white dark:border-gray-900',
		borderOpacity: 'border-opacity-100',
		borderRadius: 'rounded-full',
		color: 'white',
		fontSize: 'text-sm',
		spacing: 'w-6 h-6',
		flex: 'flex-middle',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Span {...props}>{children}</Span>;
};

export const AvatarImg = ({
	id,
	name = 'AvatarImg',
	size = 'md',
	src,
	icon,
	alt,
	className,
	...tailwind
}: iAvatarImg) => {
	const base = {
		aspect: 'aspect-[1/1]',
		borderColor: 'border-gray-100 dark:border-gray-900',
		borderRadius: 'rounded-full',
		flex: 'shrink-0',
		size: computeAvatarSize(size),
	};
	const props = { ...base, ...tailwind, className, name };

	return <Img src={src} alt={alt} width='60px' {...props} />;
};

export const AvatarBody = ({ id, name = 'AvatarBody', className, children, ...tailwind }: iAvatarBody) => {
	const base = { space: '' };
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
	const base = {
		color: 'gray-700 dark:gray-200',
		fontWeight: 'font-bold',
		textDecoration: 'capitalize',
	};
	const props = { ...base, ...tailwind, className, name };

	return (
		<Font size={size} {...props}>
			{children}
		</Font>
	);
};

export const AvatarText = ({ id, name = 'AvatarText', size = 'sm', className, children, ...tailwind }: iAvatarText) => {
	const base = { fontWeight: 'font-normal' };
	const props = { ...base, ...tailwind, className, name };

	return (
		<Font size={size} {...props}>
			{children}
		</Font>
	);
};

export const AvatarActions = ({ id, name = 'AvatarActions', className, children, ...tailwind }: iAvatarActions) => {
	const base = { display: 'flex-start', flex: 'shrink-0', space: 'space-x-2' };
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

// Docs
//
