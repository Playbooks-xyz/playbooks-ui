import * as Loaders from 'assets/loaders';
import { iSpinner } from 'types/spinner-types';
import { tailwindClassBuilder } from 'utils';

export const Oval = ({ id, name = 'Oval', className, ...tailwind }: iSpinner) => {
	const base = { align: 'flex', stroke: 'stroke-inherit', size: 'w-4 h-4', spacing: 'mx-auto' };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return <Loaders.Oval className={classes} />;
};

export const Puff = ({ id, name = 'Puff', className, ...tailwind }: iSpinner) => {
	const base = { align: 'flex', stroke: 'stroke-inherit', size: 'w-4 h-4', spacing: 'mx-auto' };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return <Loaders.Puff className={classes} />;
};

// Docs
// https://github.com/ajwann/svg-loaders-react
// http://samherbert.net/svg-loaders/
