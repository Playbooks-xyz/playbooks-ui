import { Div, Img } from 'interface/html';
import * as styles from 'styles';
import { iTag, iTagActions, iTagBody, iTagImg, iTagWrapper } from 'types/tag-types';
import { computeTagImgSize, computeTagSize } from 'utils';

export const TagsWrapper = ({ id, name = 'TagsWrapper', className, children, ...tailwind }: iTagWrapper) => {
	const base = styles.tagsWrapper;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const Tag = ({ id, name = 'Tag', size = 'sm', className, children, ...tailwind }: iTag) => {
	const base = {
		...styles.tag,
		size: computeTagSize(size),
	};
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const TagImg = ({
	id,
	name = 'TagImg',
	alt = 'thumbnail',
	size = 'sm',
	src,
	className,
	...tailwind
}: iTagImg) => {
	const base = { ...styles.tagImg, size: computeTagImgSize(size) };
	const props = { ...base, ...tailwind, className, name };

	return <Img src={src} alt={alt} {...props} />;
};

export const TagBody = ({ id, name = 'TagBody', className, children, ...tailwind }: iTagBody) => {
	const base = styles.tagBody;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const TagActions = ({ id, name = 'TagActions', onClick, className, children, ...tailwind }: iTagActions) => {
	const base = styles.tagActions;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

// Docs:
// https://tailwindui.com/interface/application-ui/elements/badges
