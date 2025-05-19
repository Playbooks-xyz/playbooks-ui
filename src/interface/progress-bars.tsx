import { useMemo } from 'react';

import { Div } from 'interface/html';
import { iProgress, iProgressBar } from 'interface/progress-bars.types';
import { gradientBgColor, tailwindClassBuilder } from 'utils';

export const ProgressBar = ({ id, name = 'ProgressBar', className, children, ...tailwind }: iProgressBar) => {
	const base = {
		bgColor: 'bg-gray-200 dark:bg-gray-700',
		bgOpacity: 'bg-opacity',
		borderRadius: 'rounded-full',
		overflow: 'overflow-hidden',
		height: 'h-2',
		width: 'w-full',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const Progress = ({ id, name = 'Progress', value = 0, className, children, ...tailwind }: iProgress) => {
	const base = {
		...gradientBgColor,
		position: 'absolute',
		bgOpacity: '',
		overflow: 'overflow-hidden',
		height: 'h-2',
		transition: 'transition-all ease',
	};
	const width = useMemo(() => ({ width: `width-[${value}%]` }), [value]);
	const classes = tailwindClassBuilder({ ...base, ...tailwind, ...width, className });

	return (
		<Div data-name={name} className={classes}>
			{children}
		</Div>
	);
};

// Docs
// https://tailwindui.com/interface/application-ui/navigation/steps
