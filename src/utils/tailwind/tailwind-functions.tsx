import { isEmpty, isObject } from 'utils';

export const computeProps = value => {
	return isObject(value) ? value : {};
};

export const formatProps = (props, name?) => {
	const formattedProps = props;
	const active = props.active || {};
	Object.keys(active).map(key => (formattedProps[key] = active[key]));
	return formattedProps;
};

export const tailwindClassBuilder = (props, name?) => {
	let classes = '';
	const formattedProps = formatProps(props, name);
	Object.keys(formattedProps)
		.filter((v, i, s) => s.indexOf(v) === i)
		.filter(v => v !== 'type')
		.map(key => {
			const value = formattedProps[key];
			if (isObject(value)) return;
			if (isEmpty(value)) return;
			classes = classes.concat(value + ' ');
		});
	return classes;
};

// Docs
// https://tailwindcss.com/docs/configuration#referencing-in-java-script
