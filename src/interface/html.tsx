import * as HTML from '@ehubbell/html';
import * as styles from 'styles';
import { HtmlType } from 'types';
import { iFrame, iImg } from 'types/html-types';
import { tailwindClassBuilder } from 'utils';

export const Html = ({ name = 'Html', className, tailwind, children, style, ...props }: HtmlType) => {
	const base = styles.htmlBase;
	const classes = tailwindClassBuilder({ ...base, ...tailwind, ...props, className });

	return (
		<HTML.Html name={name} className={classes} style={style}>
			{children}
		</HTML.Html>
	);
};

export const Body = ({ name = 'Body', className, tailwind, children, style, ...props }: HtmlType) => {
	const base = styles.bodyBase;
	const classes = tailwindClassBuilder({ ...base, ...tailwind, ...props, className });

	return (
		<HTML.Body name={name} className={classes} style={style}>
			{children}
		</HTML.Body>
	);
};

export const Main = ({ ref, name = 'Main', className, tailwind, children, style, ...props }: HtmlType) => {
	const base = styles.mainBase;
	const classes = tailwindClassBuilder({ ...base, ...tailwind, ...props, className });

	return (
		<HTML.Main ref={ref} name={name} className={classes} style={style}>
			{children}
		</HTML.Main>
	);
};

export const Aside = ({ ref, name = 'Aside', className, tailwind, children, style, ...props }: HtmlType) => {
	const base = styles.asideBase;
	const classes = tailwindClassBuilder({ ...base, ...tailwind, ...props, className });

	return (
		<HTML.Aside name={name} className={classes} style={style}>
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
}: HtmlType) => {
	const base = styles.divBase;
	const classes = tailwindClassBuilder({ ...base, ...tailwind, ...props, className });

	return (
		<HTML.Div
			ref={ref}
			name={name}
			dangerouslySetInnerHTML={html}
			tabIndex={tabIndex}
			onClick={onClick}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			className={classes}
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
}: HtmlType) => {
	const base = styles.spanBase;
	const classes = tailwindClassBuilder({ ...base, ...tailwind, ...props, className });

	return (
		<HTML.Span
			ref={ref}
			name={name}
			onClick={onClick}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			className={classes}
			style={style}>
			{children}
		</HTML.Span>
	);
};

export const Ul = ({ name = 'Ul', className, tailwind, children, ...props }: HtmlType) => {
	const base = styles.ulBase;
	const classes = tailwindClassBuilder({ ...base, ...tailwind, ...props, className });

	return (
		<HTML.Ul name={name} className={classes}>
			{children}
		</HTML.Ul>
	);
};

export const Li = ({ name = 'Li', className, tailwind, children, ...props }: HtmlType) => {
	const base = styles.liBase;
	const classes = tailwindClassBuilder({ ...base, ...tailwind, ...props, className });

	return (
		<HTML.Li name={name} className={classes}>
			{children}
		</HTML.Li>
	);
};

export const IFrame = ({ ref, name = 'iFrame', title, src, onLoad, tailwind, className, style, ...props }: iFrame) => {
	const base = styles.iFrameBase;
	const classes = tailwindClassBuilder({ ...base, ...tailwind, ...props, className });

	return (
		<HTML.Iframe ref={ref} name={name} title={title} src={src} onLoad={onLoad} className={classes} style={style} />
	);
};

export const Img = ({ name = 'Img', src, alt, tailwind, className, style, ...props }: iImg) => {
	const base = styles.imgBase;
	const classes = tailwindClassBuilder({ ...base, ...tailwind, ...props, className });

	return <HTML.Img name={name} src={src} alt={alt} className={classes} style={style} />;
};

export const Hr = ({ name = 'Hr', className, tailwind, children, style, ...props }: HtmlType) => {
	const base = styles.hrBase;
	const classes = tailwindClassBuilder({ ...base, ...tailwind, ...props, className });

	return (
		<HTML.Hr name={name} className={classes} style={style}>
			{children}
		</HTML.Hr>
	);
};

export const Article = ({ name = 'Article', className, tailwind, children, style, ...props }: HtmlType) => {
	const base = styles.articleBase;
	const classes = tailwindClassBuilder({ ...base, ...props, className });

	return (
		<HTML.Article name={name} className={classes} style={style}>
			{children}
		</HTML.Article>
	);
};

export const Figure = ({ name = 'Figure', className, tailwind, children, style, ...props }: HtmlType) => {
	const base = styles.figureBase;
	const classes = tailwindClassBuilder({ ...base, ...props, className });

	return (
		<HTML.Figure name={name} className={classes} style={style}>
			{children}
		</HTML.Figure>
	);
};

export const Caption = ({ name = 'Caption', className, tailwind, children, style, ...props }: HtmlType) => {
	const base = styles.captionBase;
	const classes = tailwindClassBuilder({ ...base, ...props, className });

	return (
		<HTML.Caption name={name} className={classes} style={style}>
			{children}
		</HTML.Caption>
	);
};

export const Blockquote = ({ name = 'Blockquote', className, tailwind, children, style, ...props }: HtmlType) => {
	const base = styles.blockquoteBase;
	const classes = tailwindClassBuilder({ ...base, ...props, className });

	return (
		<HTML.Blockquote name={name} className={classes} style={style}>
			{children}
		</HTML.Blockquote>
	);
};

export const Pre = ({ name = 'Pre', className, tailwind, children, style, ...props }: HtmlType) => {
	const base = styles.preBase;
	const classes = tailwindClassBuilder({ ...base, ...props, className });

	return (
		<HTML.Pre name={name} className={classes} style={style}>
			{children}
		</HTML.Pre>
	);
};

export const Code = ({ name = 'Code', className, tailwind, children, style, ...props }: HtmlType) => {
	const base = styles.codeBase;
	const classes = tailwindClassBuilder({ ...base, ...props, className });

	return (
		<HTML.Code name={name} className={classes} style={style}>
			{children}
		</HTML.Code>
	);
};

// Docs
// These are core HTML elements.
