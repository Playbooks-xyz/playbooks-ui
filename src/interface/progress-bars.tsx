import { useInterface } from 'contexts';
import { Div } from 'interface/html';
import * as types from 'types/progress-bar-types';

export const ProgressBar = ({
	id,
	name = 'ProgressBar',
	tailwind,
	className,
	children,
	...props
}: types.ProgressBarProps) => {
	const { theme } = useInterface();
	const base = theme.progressBar();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const Progress = ({ id, name = 'Progress', value = 0, tailwind, className, ...props }: types.ProgressProps) => {
	const { theme } = useInterface();
	const base = theme.progress();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed} style={{ width: `${value}%` }} />;
};

// Docs
// https://tailwindui.com/interface/application-ui/feedback/progress-bars
