import * as Loaders from 'assets/loaders';
import * as styles from 'styles/spinner-styles';
import * as types from 'types/spinner-types';
import { tailwindClassBuilder } from 'utils';

export const Oval = ({ id, name = 'Oval', className, ...tailwind }: types.SpinnerProps) => {
	const base = styles.spinner;
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return <Loaders.Oval className={classes} />;
};

export const Puff = ({ id, name = 'Puff', className, ...tailwind }: types.SpinnerProps) => {
	const base = styles.spinner;
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return <Loaders.Puff className={classes} />;
};

// Docs
// https://github.com/ajwann/svg-loaders-react
// http://samherbert.net/svg-loaders/
