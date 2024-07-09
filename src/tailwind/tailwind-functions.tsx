import classNames from 'classnames/bind';

export const tailwindClassBuilder = (props, name?) => {
	return classNames.bind(props);
};

// Docs
// https://tailwindcss.com/docs/configuration#referencing-in-java-script
