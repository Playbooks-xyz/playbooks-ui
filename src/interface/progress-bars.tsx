import { Animation, useAnimation } from 'components/animation-wrapper';
import { Div } from 'interface/html';
import * as styles from 'styles/progress-bar-styles';
import * as types from 'types/progress-bar-types';

export const ProgressBar = ({
	id,
	name = 'ProgressBar',
	tailwind,
	className,
	children,
	...props
}: types.ProgressBarProps) => {
	const base = styles.progressBar;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const Progress = ({
	id,
	name = 'Progress',
	value = 0,
	tailwind,
	className,
	children,
	...props
}: types.ProgressProps) => {
	const base = styles.progress;
	const style = useAnimation({ width: value ? value + '%' : '0%' });
	const computed = { ...base, ...props, tailwind, className, style, name };

	return <Animation {...computed}>{children}</Animation>;
};

// Docs
// https://tailwindui.com/interface/application-ui/navigation/steps
