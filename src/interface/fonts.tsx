import * as HTML from '@ehubbell/html';
import * as styles from 'styles/font-styles';
import * as types from 'types/font-types';
import { classBuilder } from 'utils';

export const Font = ({ tailwind, ...props }) => {
	switch (props.size) {
		case 'h1':
			return <H1 tailwind={tailwind} {...props} />;

		case 'h2':
			return <H2 tailwind={tailwind} {...props} />;

		case 'h3':
			return <H3 tailwind={tailwind} {...props} />;

		case 'h4':
			return <H4 tailwind={tailwind} {...props} />;

		case 'h5':
			return <H5 tailwind={tailwind} {...props} />;

		case 'h6':
			return <H6 tailwind={tailwind} {...props} />;

		case 'p':
			return <P tailwind={tailwind} {...props} />;

		case 'sm':
			return <Small tailwind={tailwind} {...props} />;

		case 'xs':
			return <Small fontSize='text-xs' tailwind={tailwind} {...props} />;
	}
};

export const H1 = ({ id, name = 'H1', tailwind, className, children, ...props }: types.FontProps) => {
	const base = styles.h1;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.H1 id={id} name={name} className={computed}>
			{children}
		</HTML.H1>
	);
};

export const H2 = ({ id, name = 'H2', tailwind, className, children, ...props }: types.FontProps) => {
	const base = styles.h2;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.H2 id={id} name={name} className={computed}>
			{children}
		</HTML.H2>
	);
};

export const H3 = ({ id, name = 'H3', tailwind, className, children, ...props }: types.FontProps) => {
	const base = styles.h3;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.H3 id={id} name={name} className={computed}>
			{children}
		</HTML.H3>
	);
};

export const H4 = ({ id, name = 'H4', tailwind, className, children, ...props }: types.FontProps) => {
	const base = styles.h4;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.H4 id={id} name={name} className={computed}>
			{children}
		</HTML.H4>
	);
};

export const H5 = ({ id, name = 'H5', tailwind, className, children, ...props }: types.FontProps) => {
	const base = styles.h5;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.H5 id={id} name={name} className={computed}>
			{children}
		</HTML.H5>
	);
};

export const H6 = ({ id, name = 'H6', tailwind, className, children, ...props }: types.FontProps) => {
	const base = styles.h6;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.H6 id={id} name={name} className={computed}>
			{children}
		</HTML.H6>
	);
};

export const P = ({ id, name = 'P', tailwind, className, children, ...props }: types.FontProps) => {
	const base = styles.p;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.P id={id} name={name} className={computed}>
			{children}
		</HTML.P>
	);
};

export const Small = ({ id, name = 'Small', tailwind, className, children, ...props }: types.FontProps) => {
	const base = styles.small;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.Small id={id} name={name} className={computed}>
			{children}
		</HTML.Small>
	);
};

// Docs
// https://tailwindcss.com/docs/font-size
