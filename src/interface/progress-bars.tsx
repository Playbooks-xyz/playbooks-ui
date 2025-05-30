import { Animation, useAnimation } from 'components/animation-wrapper';
import { Div } from 'interface/html';
import * as styles from 'styles';
import { iProgress, iProgressBar } from 'types/progress-bar-types';

export const ProgressBar = ({ id, name = 'ProgressBar', className, children, ...tailwind }: iProgressBar) => {
	const base = styles.progressBar;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const Progress = ({ id, name = 'Progress', value = 0, className, children, ...tailwind }: iProgress) => {
	const base = styles.progress;
	const style = useAnimation({ width: value ? value + '%' : '0%' });
	const props = { ...base, ...tailwind, className, style, name };

	return <Animation {...props}>{children}</Animation>;
};

// Docs
// https://tailwindui.com/interface/application-ui/navigation/steps
