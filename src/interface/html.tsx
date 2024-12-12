import { forwardRef } from 'react';

import { iFrame, iImg } from 'interface/html.types';
import { HtmlType } from 'types';
import { borderProps, tailwindClassBuilder } from 'utils';

export const Html = ({ id, name = 'Html', className, children, style, ...tailwind }: HtmlType) => {
	const base = {};
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<html id={id} data-name={name} className={classes} style={style}>
			{children}
		</html>
	);
};

export const Body = ({ id, name = 'Body', className, children, style, ...tailwind }: HtmlType) => {
	const base = {};
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<body id={id} data-name={name} className={classes} style={style}>
			{children}
		</body>
	);
};

export const Main = forwardRef<any, HtmlType>(
	({ id, name = 'Main', className, children, style, ...tailwind }: HtmlType, ref) => {
		const base = { position: 'relative' };
		const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

		return (
			<main id={id} ref={ref} data-name={name} className={classes} style={style}>
				{children}
			</main>
		);
	},
);

export const Aside = ({ id, name = 'Aside', className, children, style, ...tailwind }: HtmlType) => {
	const base = { ...borderProps };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<aside id={id} data-name={name} className={classes} style={style}>
			{children}
		</aside>
	);
};

export const Div = forwardRef<any, HtmlType>(
	(
		{
			id,
			name = 'Div',
			html,
			tabIndex,
			onClick,
			onMouseEnter,
			onMouseLeave,
			className,
			children,
			style,
			...tailwind
		}: HtmlType,
		ref,
	) => {
		const base = { position: 'relative', ...borderProps };
		const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

		return (
			<div
				id={id}
				data-name={name}
				ref={ref}
				dangerouslySetInnerHTML={html}
				tabIndex={tabIndex}
				onClick={onClick}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				className={classes}
				style={style}>
				{children}
			</div>
		);
	},
);

export const Span = forwardRef<any, HtmlType>(
	(
		{ id, name = 'Span', onClick, onMouseEnter, onMouseLeave, className, children, style, ...tailwind }: HtmlType,
		ref,
	) => {
		const base = { display: 'inline' };
		const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

		return (
			<span
				id={id}
				ref={ref}
				data-name={name}
				onClick={onClick}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				className={classes}
				style={style}>
				{children}
			</span>
		);
	},
);

export const Ul = ({ id, name = 'Ul', className, children, ...tailwind }: HtmlType) => {
	const base = { ...borderProps, spacing: 'pl-4' };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<ul id={id} data-name={name} className={classes}>
			{children}
		</ul>
	);
};

export const Li = ({ id, name = 'Li', className, children, ...tailwind }: HtmlType) => {
	const base = { ...borderProps, fontFamily: 'font-secondary', color: 'text-inherit' };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<li id={id} data-name={name} className={classes}>
			{children}
		</li>
	);
};

export const IFrame = ({ id, name = 'Img', src, className, style, ...tailwind }: iFrame) => {
	const base = {};
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return <iframe id={id} data-name={name} src={src} className={classes} style={style} />;
};

export const Img = ({ id, name = 'Img', src, alt, className, style, ...tailwind }: iImg) => {
	const base = { display: 'inline-block' };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return <img id={id} data-name={name} src={src} alt={alt} className={classes} style={style} />;
};

export const Hr = ({ id, name = 'Hr', className, children, style, ...tailwind }: HtmlType) => {
	const base = { border: 'border-t', borderRadius: 'rounded-md', ...borderProps };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<hr id={id} data-name={name} className={classes} style={style}>
			{children}
		</hr>
	);
};

export const Article = ({ id, name = 'Article', className, children, style, ...tailwind }: HtmlType) => {
	const base = {};
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<article id={id} data-name={name} className={classes} style={style}>
			{children}
		</article>
	);
};

export const Figure = ({ id, name = 'Figure', className, children, style, ...tailwind }: HtmlType) => {
	const base = {};
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<figure id={id} data-name={name} className={classes} style={style}>
			{children}
		</figure>
	);
};

export const Caption = ({ id, name = 'Caption', className, children, style, ...tailwind }: HtmlType) => {
	const base = {};
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<caption id={id} data-name={name} className={classes} style={style}>
			{children}
		</caption>
	);
};

export const Blockquote = ({ id, name = 'Blockquote', className, children, style, ...tailwind }: HtmlType) => {
	const base = {};
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<blockquote id={id} data-name={name} className={classes} style={style}>
			{children}
		</blockquote>
	);
};

export const Pre = ({ id, name = 'Pre', className, children, style, ...tailwind }: HtmlType) => {
	const base = {};
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<pre id={id} data-name={name} className={classes} style={style}>
			{children}
		</pre>
	);
};

export const Code = ({ id, name = 'Code', className, children, style, ...tailwind }: HtmlType) => {
	const base = {
		bgColor: 'bg-gray-100 dark:bg-gray-800',
		borderRadius: 'rounded-md',
		display: 'inline-block',
		spacing: 'px-2 py-0.5',
	};
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<code id={id} data-name={name} className={classes} style={style}>
			{children}
		</code>
	);
};

// Docs
// These are core HTML elements.
