import * as Loaders from 'assets/loaders';
import * as styles from 'styles/spinner-styles';
import * as types from 'types/spinner-types';
import { classBuilder } from 'utils';

export const Oval = ({ id, name = 'Oval', tailwind, className, ...props }: types.SpinnerProps) => {
	const base = styles.spinner;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return <Loaders.Oval className={computed} />;
};

export const Puff = ({ id, name = 'Puff', tailwind, className, ...props }: types.SpinnerProps) => {
	const base = styles.spinner;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return <Loaders.Puff className={computed} />;
};

// Docs
// https://github.com/ajwann/svg-loaders-react
// http://samherbert.net/svg-loaders/
