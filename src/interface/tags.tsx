import { useInterface } from 'contexts';
import { Div, Img } from 'interface/html';
import * as types from 'types/tag-types';

export const Tags = ({ id, name = 'Tags', tailwind, className, children, ...props }: types.TagsProps) => {
	const { theme } = useInterface();
	const base = theme.tags();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const Tag = ({ id, name = 'Tag', size = 'md', tailwind, className, children, ...props }: types.TagProps) => {
	const { theme } = useInterface();
	const base = theme.tag({ size });
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
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
	const { theme } = useInterface();
	const base = theme.tagImg({ size });
	const computed = { ...base, ...props, tailwind, className, name };

	return <Img src={src} alt={alt} {...computed} />;
};

export const TagBody = ({ id, name = 'TagBody', tailwind, className, children, ...props }: types.TagBodyProps) => {
	const { theme } = useInterface();
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
	const { theme } = useInterface();
	const base = theme.tagActions();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs:
// https://tailwindui.com/interface/application-ui/elements/badges
