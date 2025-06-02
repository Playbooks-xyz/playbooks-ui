import { Div, Img } from 'interface/html';
import * as theme from 'theme';
import * as types from 'types/tag-types';

export const TagsWrapper = ({
	id,
	name = 'TagsWrapper',
	tailwind,
	className,
	children,
	...props
}: types.TagWrapperProps) => {
	const base = theme.tagsWrapper();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const Tag = ({ id, name = 'Tag', size = 'md', tailwind, className, children, ...props }: types.TagProps) => {
	const base = theme.tag({ size });
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div {...computed}>
			<TagBody tailwind={tailwind?.body}>{children}</TagBody>
			<TagActions tailwind={tailwind?.actions} />
		</Div>
	);
};

export const TagImg = ({
	id,
	name = 'TagImg',
	size = 'md',
	src,
	alt = 'tag image',
	tailwind,
	className,
	...props
}: types.TagImgProps) => {
	const base = theme.tagImg({ size });
	const computed = { ...base, ...props, tailwind, className, name };

	return <Img src={src} alt={alt} {...computed} />;
};

export const TagBody = ({ id, name = 'TagBody', tailwind, className, children, ...props }: types.TagBodyProps) => {
	const base = theme.tagBody();
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
	const base = theme.tagActions();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs:
// https://tailwindui.com/interface/application-ui/elements/badges
