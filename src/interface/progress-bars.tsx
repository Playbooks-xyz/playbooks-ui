import { Animation, useAnimation } from 'components/animation-wrapper';
import { Div } from 'interface/html';
import { iProgress, iProgressBar } from 'types/progress-bar-types';
import { gradientBgColor } from 'utils';

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
		height: 'h-2',
	};
	const style = useAnimation({ width: value ? value + '%' : '0%' });
	const props = { ...base, ...tailwind, className, style, name };

	return <Animation {...props}>{children}</Animation>;
};

// Docs
// https://tailwindui.com/interface/application-ui/navigation/steps
