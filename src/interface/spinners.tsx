import * as Loaders from 'assets/loaders';
import { useInterface } from 'contexts';
import { Div } from 'interface/html';
import * as types from 'types/spinner-types';
import { classBuilder } from 'utils';

export const Oval = ({ id, name = 'Oval', tailwind, className, ...props }: types.SpinnerProps) => {
	const { theme } = useInterface();
	const base = theme.spinner();
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return <Loaders.Oval className={computed} />;
};

export const Puff = ({ id, name = 'Puff', tailwind, className, ...props }: types.SpinnerProps) => {
	const { theme } = useInterface();
	const base = theme.spinner();
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return <Loaders.Puff className={computed} />;
};

export const Spinner = ({ tailwind, ...props }) => {
	const { theme } = useInterface();
	const base = theme.spinner();
	const computed = { ...base, ...props, tailwind };

	return <Div {...computed} />;
};

export const SpinnerWrapper = ({ tailwind, children, ...props }) => {
	const { theme } = useInterface();
	const base = theme.spinner();
	const computed = { ...base, ...props, tailwind };

	return <Div {...computed}>{children}</Div>;
};

// Docs
// https://github.com/ajwann/svg-loaders-react
// http://samherbert.net/svg-loaders/
// https://tailwindcss.com/docs/animation#spin
