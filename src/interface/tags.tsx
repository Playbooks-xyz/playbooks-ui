import { Div, Img } from 'interface/html';
import * as styles from 'styles/tag-styles';
import { computeTagImgSize, computeTagSize } from 'theme';
import * as types from 'types/tag-types';

export const TagsWrapper = ({
	id,
	name = 'TagsWrapper',
	tailwind,
	className,
	children,
	...props
}: types.TagWrapperProps) => {
	const base = styles.tagsWrapper;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const Tag = ({ id, name = 'Tag', size = 'sm', tailwind, className, children, ...props }: types.TagProps) => {
	const base = {
		...styles.tag,
		size: computeTagSize(size),
	};
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const TagImg = ({
	id,
	name = 'TagImg',
	alt = 'thumbnail',
	size = 'sm',
	src,
	tailwind,
	className,
	...props
}: types.TagImgProps) => {
	const base = { ...styles.tagImg, size: computeTagImgSize(size) };
	const computed = { ...base, ...props, tailwind, className, name };

	return <Img src={src} alt={alt} {...computed} />;
};

export const TagBody = ({ id, name = 'TagBody', tailwind, className, children, ...props }: types.TagBodyProps) => {
	const base = styles.tagBody;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const TagActions = ({
	id,
	name = 'TagActions',
	tailwind,
	className,
	children,
	...props
}: types.TagActionsProps) => {
	const base = styles.tagActions;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs:
// https://tailwindui.com/interface/application-ui/elements/badges
