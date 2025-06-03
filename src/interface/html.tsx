import * as HTML from '@ehubbell/html';
import { useInterface } from 'contexts';
import { HtmlProps } from 'types';
import * as types from 'types/html-types';
import { propsFilter } from 'utils';

export const Article = ({ name = 'Article', className, tailwind, children, ...props }: HtmlProps) => {
	const { theme } = useInterface();
	const base = theme.article();
	const formatted = { ...base, ...props, ...tailwind, className };
	const filtered = propsFilter(props);

	return (
		<HTML.Article name={name} tailwind={formatted} {...filtered}>
			{children}
		</HTML.Article>
	);
};

export const Aside = ({ ref, name = 'Aside', className, tailwind, children, ...props }: HtmlProps) => {
	const { theme } = useInterface();
	const base = theme.aside();
	const formatted = { ...base, ...props, ...tailwind, className };
	const filtered = propsFilter(props);

	return (
		<HTML.Aside name={name} tailwind={formatted} {...filtered}>
			{children}
		</HTML.Aside>
	);
};

export const Blockquote = ({ name = 'Blockquote', className, tailwind, children, ...props }: HtmlProps) => {
	const { theme } = useInterface();
	const base = theme.blockquote();
	const formatted = { ...base, ...props, ...tailwind, className };
	const filtered = propsFilter(props);

	return (
		<HTML.Blockquote name={name} tailwind={formatted} {...filtered}>
			{children}
		</HTML.Blockquote>
	);
};

export const Body = ({ name = 'Body', className, tailwind, children, ...props }: HtmlProps) => {
	const { theme } = useInterface();
	const base = theme.body();
	const formatted = { ...base, ...props, ...tailwind, className };
	const filtered = propsFilter(props);

	return (
		<HTML.Body name={name} tailwind={formatted} {...filtered}>
			{children}
		</HTML.Body>
	);
};

export const Caption = ({ name = 'Caption', className, tailwind, children, ...props }: HtmlProps) => {
	const { theme } = useInterface();
	const base = theme.caption();
	const formatted = { ...base, ...props, ...tailwind, className };
	const filtered = propsFilter(props);

	return (
		<HTML.Caption name={name} tailwind={formatted} {...filtered}>
			{children}
		</HTML.Caption>
	);
};

export const Code = ({ name = 'Code', className, tailwind, children, ...props }: HtmlProps) => {
	const { theme } = useInterface();
	const base = theme.code();
	const formatted = { ...base, ...props, ...tailwind, className };
	const filtered = propsFilter(props);

	return (
		<HTML.Code name={name} tailwind={formatted} {...filtered}>
			{children}
		</HTML.Code>
	);
};

export const Div = ({ ref, name = 'Div', className, tailwind, children, ...props }: HtmlProps) => {
	const { theme } = useInterface();
	const base = theme.div();
	const formatted = { ...base, ...props, ...tailwind, className };
	const filtered = propsFilter(props);

	return (
		<HTML.Div ref={ref} name={name} tailwind={formatted} {...filtered}>
			{children}
		</HTML.Div>
	);
};

export const Figure = ({ name = 'Figure', className, tailwind, children, ...props }: HtmlProps) => {
	const { theme } = useInterface();
	const base = theme.figure();
	const formatted = { ...base, ...props, ...tailwind, className };
	const filtered = propsFilter(props);

	return (
		<HTML.Figure name={name} tailwind={formatted} {...filtered}>
			{children}
		</HTML.Figure>
	);
};

export const Hr = ({ name = 'Hr', className, tailwind, children, ...props }: HtmlProps) => {
	const { theme } = useInterface();
	const base = theme.hr();
	const formatted = { ...base, ...props, ...tailwind, className };
	const filtered = propsFilter(props);

	return (
		<HTML.Hr name={name} tailwind={formatted} {...filtered}>
			{children}
		</HTML.Hr>
	);
};

export const Html = ({ name = 'Html', className, tailwind, children, ...props }: HtmlProps) => {
	const { theme } = useInterface();
	const base = theme.html();
	const formatted = { ...base, ...props, ...tailwind, className };
	const filtered = propsFilter(props);

	return (
		<HTML.Html name={name} tailwind={formatted} {...filtered}>
			{children}
		</HTML.Html>
	);
};

export const IFrame = ({ ref, name = 'iFrame', src, title, tailwind, className, ...props }: types.IFrameProps) => {
	const { theme } = useInterface();
	const base = theme.iFrame();
	const formatted = { ...base, ...props, ...tailwind, className };
	const filtered = propsFilter(props);

	return <HTML.Iframe ref={ref} name={name} src={src} title={title} tailwind={formatted} {...filtered} />;
};

export const Img = ({ name = 'Img', src, alt = 'photo', tailwind, className, ...props }: types.ImgProps) => {
	const { theme } = useInterface();
	const base = theme.img();
	const formatted = { ...base, ...props, ...tailwind, className };
	const filtered = propsFilter(props);

	return <HTML.Img name={name} src={src} alt={alt} tailwind={formatted} {...filtered} />;
};

export const Li = ({ name = 'Li', className, tailwind, children, ...props }: HtmlProps) => {
	const { theme } = useInterface();
	const base = theme.li();
	const formatted = { ...base, ...props, ...tailwind, className };
	const filtered = propsFilter(props);

	return (
		<HTML.Li name={name} tailwind={formatted} {...filtered}>
			{children}
		</HTML.Li>
	);
};

export const Main = ({ ref, name = 'Main', className, tailwind, children, ...props }: HtmlProps) => {
	const { theme } = useInterface();
	const base = theme.main();
	const formatted = { ...base, ...props, ...tailwind, className };
	const filtered = propsFilter(props);

	return (
		<HTML.Main ref={ref} name={name} tailwind={formatted} {...filtered}>
			{children}
		</HTML.Main>
	);
};

export const Pre = ({ name = 'Pre', className, tailwind, children, ...props }: HtmlProps) => {
	const { theme } = useInterface();
	const base = theme.pre();
	const formatted = { ...base, ...props, ...tailwind, className };
	const filtered = propsFilter(props);

	return (
		<HTML.Pre name={name} tailwind={formatted} {...filtered}>
			{children}
		</HTML.Pre>
	);
};

export const Span = ({
	ref,
	name = 'Span',
	onClick,
	onMouseEnter,
	onMouseLeave,
	className,
	tailwind,
	children,

	...props
}: HtmlProps) => {
	const { theme } = useInterface();
	const base = theme.span();
	const formatted = { ...base, ...props, ...tailwind, className };
	const filtered = propsFilter(props);

	return (
		<HTML.Span ref={ref} name={name} tailwind={formatted} {...filtered}>
			{children}
		</HTML.Span>
	);
};

export const Ul = ({ name = 'Ul', className, tailwind, children, ...props }: HtmlProps) => {
	const { theme } = useInterface();
	const base = theme.ul();
	const formatted = { ...base, ...props, ...tailwind, className };
	const filtered = propsFilter(props);

	return (
		<HTML.Ul name={name} tailwind={formatted} {...filtered}>
			{children}
		</HTML.Ul>
	);
};

// Docs
// These are core HTML elements.
