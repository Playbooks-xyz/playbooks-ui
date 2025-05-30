import * as HTML from '@ehubbell/html';
import * as styles from 'styles';
import { iFont } from 'types/font-types';
import { tailwindClassBuilder } from 'utils';

export const Font = props => {
	switch (props.size) {
		case 'h1':
			return <H1 {...props} />;

		case 'h2':
			return <H2 {...props} />;

		case 'h3':
			return <H3 {...props} />;

		case 'h4':
			return <H4 {...props} />;

		case 'h5':
			return <H5 {...props} />;

		case 'h6':
			return <H6 {...props} />;

		case 'p':
			return <P {...props} />;

		case 'sm':
			return <Small {...props} />;

		case 'xs':
			return <Small fontSize='text-xs' {...props} />;
	}
};

export const H1 = ({ id, name = 'H1', className, children, ...tailwind }: iFont) => {
	const base = styles.h1;
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<HTML.H1 id={id} name={name} className={classes}>
			{children}
		</HTML.H1>
	);
};

export const H2 = ({ id, name = 'H2', className, children, ...tailwind }: iFont) => {
	const base = styles.h2;
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<HTML.H2 id={id} name={name} className={classes}>
			{children}
		</HTML.H2>
	);
};

export const H3 = ({ id, name = 'H3', className, children, ...tailwind }: iFont) => {
	const base = styles.h3;
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<HTML.H3 id={id} name={name} className={classes}>
			{children}
		</HTML.H3>
	);
};

export const H4 = ({ id, name = 'H4', className, children, ...tailwind }: iFont) => {
	const base = styles.h4;
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<HTML.H4 id={id} name={name} className={classes}>
			{children}
		</HTML.H4>
	);
};

export const H5 = ({ id, name = 'H5', className, children, ...tailwind }: iFont) => {
	const base = styles.h5;
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<HTML.H5 id={id} name={name} className={classes}>
			{children}
		</HTML.H5>
	);
};

export const H6 = ({ id, name = 'H6', className, children, ...tailwind }: iFont) => {
	const base = styles.h6;
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<HTML.H6 id={id} name={name} className={classes}>
			{children}
		</HTML.H6>
	);
};

export const P = ({ id, name = 'P', className, children, ...tailwind }: iFont) => {
	const base = styles.p;
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<HTML.P id={id} name={name} className={classes}>
			{children}
		</HTML.P>
	);
};

export const Small = ({ id, name = 'Small', className, children, ...tailwind }: iFont) => {
	const base = styles.small;
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<HTML.Small id={id} name={name} className={classes}>
			{children}
		</HTML.Small>
	);
};

// Docs
// https://tailwindcss.com/docs/font-size
