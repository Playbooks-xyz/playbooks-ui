import * as HTML from '@ehubbell/html';
import * as styles from 'styles/html-styles';
import { HtmlProps } from 'types';
import * as types from 'types/html-types';
import { classBuilder } from 'utils';

export const Html = ({ name = 'Html', className, tailwind, children, style, ...props }: HtmlProps) => {
	const base = styles.html;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.Html name={name} className={computed} style={style}>
			{children}
		</HTML.Html>
	);
};

export const Body = ({ name = 'Body', className, tailwind, children, style, ...props }: HtmlProps) => {
	const base = styles.body;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.Body name={name} className={computed} style={style}>
			{children}
		</HTML.Body>
	);
};

export const Main = ({ ref, name = 'Main', className, tailwind, children, style, ...props }: HtmlProps) => {
	const base = styles.main;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.Main ref={ref} name={name} className={computed} style={style}>
			{children}
		</HTML.Main>
	);
};

export const Aside = ({ ref, name = 'Aside', className, tailwind, children, style, ...props }: HtmlProps) => {
	const base = styles.aside;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.Aside name={name} className={computed} style={style}>
			{children}
		</HTML.Aside>
	);
};

export const Div = ({
	ref,
	name = 'Div',
	html,
	tabIndex,
	onClick,
	onMouseEnter,
	onMouseLeave,
	className,
	tailwind,
	children,
	style,
	...props
}: HtmlProps) => {
	const base = styles.div;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.Div
			ref={ref}
			name={name}
			dangerouslySetInnerHTML={html}
			tabIndex={tabIndex}
			onClick={onClick}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			className={computed}
			style={style}>
			{children}
		</HTML.Div>
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
	style,
	...props
}: HtmlProps) => {
	const base = styles.span;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.Span
			ref={ref}
			name={name}
			onClick={onClick}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			className={computed}
			style={style}>
			{children}
		</HTML.Span>
	);
};

export const Ul = ({ name = 'Ul', className, tailwind, children, ...props }: HtmlProps) => {
	const base = styles.ul;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.Ul name={name} className={computed}>
			{children}
		</HTML.Ul>
	);
};

export const Li = ({ name = 'Li', className, tailwind, children, ...props }: HtmlProps) => {
	const base = styles.li;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.Li name={name} className={computed}>
			{children}
		</HTML.Li>
	);
};

export const IFrame = ({
	ref,
	name = 'iFrame',
	title,
	src,
	onLoad,
	tailwind,
	className,
	style,
	...props
}: types.FrameProps) => {
	const base = styles.iFrame;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.Iframe ref={ref} name={name} title={title} src={src} onLoad={onLoad} className={computed} style={style} />
	);
};

export const Img = ({ name = 'Img', src, alt, tailwind, className, style, ...props }: types.ImgProps) => {
	const base = styles.img;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return <HTML.Img name={name} src={src} alt={alt} className={computed} style={style} />;
};

export const Hr = ({ name = 'Hr', className, tailwind, children, style, ...props }: HtmlProps) => {
	const base = styles.hr;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.Hr name={name} className={computed} style={style}>
			{children}
		</HTML.Hr>
	);
};

export const Article = ({ name = 'Article', className, tailwind, children, style, ...props }: HtmlProps) => {
	const base = styles.article;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.Article name={name} className={computed} style={style}>
			{children}
		</HTML.Article>
	);
};

export const Figure = ({ name = 'Figure', className, tailwind, children, style, ...props }: HtmlProps) => {
	const base = styles.figure;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.Figure name={name} className={computed} style={style}>
			{children}
		</HTML.Figure>
	);
};

export const Caption = ({ name = 'Caption', className, tailwind, children, style, ...props }: HtmlProps) => {
	const base = styles.caption;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.Caption name={name} className={computed} style={style}>
			{children}
		</HTML.Caption>
	);
};

export const Blockquote = ({ name = 'Blockquote', className, tailwind, children, style, ...props }: HtmlProps) => {
	const base = styles.blockquote;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.Blockquote name={name} className={computed} style={style}>
			{children}
		</HTML.Blockquote>
	);
};

export const Pre = ({ name = 'Pre', className, tailwind, children, style, ...props }: HtmlProps) => {
	const base = styles.pre;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.Pre name={name} className={computed} style={style}>
			{children}
		</HTML.Pre>
	);
};

export const Code = ({ name = 'Code', className, tailwind, children, style, ...props }: HtmlProps) => {
	const base = styles.code;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.Code name={name} className={computed} style={style}>
			{children}
		</HTML.Code>
	);
};

// Docs
// These are core HTML elements.
