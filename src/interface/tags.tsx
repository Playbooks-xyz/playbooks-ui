import { Div, Img } from 'interface/html';
import { iTag, iTagActions, iTagBody, iTagImg, iTagWrapper } from 'interface/tags.types';
import { computeTagImgSize, computeTagSize } from 'tailwind';

export const TagsWrapper = ({ id, name = 'TagsWrapper', className, children, ...tailwind }: iTagWrapper) => {
	const base = { display: 'flex-start', spacing: '', flex: 'flex-wrap' };
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const Tag = ({ id, name = 'Tag', size = 'sm', className, children, ...tailwind }: iTag) => {
	const base = {
		bgColor: 'bg-gray-200 dark:bg-gray-700',
		bgOpacity: 'bg-opacity-50 dark:bg-opacity-50',
		borderColor: 'border-gray-500 dark:border-gray-400',
		borderOpacity: 'border-opacity-50',
		borderRadius: 'rounded-md',
		color: 'gray-500 dark:gray-300',
		display: 'flex-between-inline',
		flex: 'shrink-0',
		size: computeTagSize(size),
		spacing: 'mb-2 mr-4',
		tracking: 'tracking-wide',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const TagImg = ({ id, name = 'TagImg', size = 'sm', src, alt, className, ...tailwind }: iTagImg) => {
	const base = { size: computeTagImgSize(size), borderRadius: 'rounded-full' };
	const props = { ...base, ...tailwind, className, name };

	return <Img src={src} alt={alt} {...props} />;
};

export const TagBody = ({ id, name = 'TagBody', className, children, ...tailwind }: iTagBody) => {
	const base = {
		borderColor: 'border-gray-500 dark:border-gray-400',
		borderOpacity: 'border-opacity-25 dark:border-opacity-25',
		fontSize: 'text-sm',
		space: 'space-x-2',
		spacing: 'px-2',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const TagActions = ({ id, name = 'TagActions', onClick, className, children, ...tailwind }: iTagActions) => {
	const base = { display: 'flex-end', flex: 'shrink-0', space: 'space-x-2' };
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

// Docs:
// https://tailwindui.com/interface/application-ui/elements/badges
