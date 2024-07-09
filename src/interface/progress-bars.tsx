import { animated, useSpring } from '@react-spring/web';

import { Div } from 'interface/html';
import { iFrameworkedProgress, iProgress, iProgressBar } from 'interface/progress-bars.types';
import { gradientBgColor, tailwindClassBuilder } from 'tailwind';

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
	};
	const style = useSpring({ width: value ? value + '%' : '0%' });
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<animated.div data-name={name} className={classes} style={style}>
			{children}
		</animated.div>
	);
};

export const ProgressFrameworked = ({
	id,
	name = 'ProgressFrameworked',
	value = 0,
	offset,
	className,
	children,
	...tailwind
}: iFrameworkedProgress) => {
	const base = {
		position: 'absolute',
		bgColor: 'bg-cyan-400',
		bgOpacity: '',
		height: 'h-2',
	};
	const style = useSpring({ marginLeft: offset + '%', width: value ? value + '%' : '0%' });
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<animated.div className={classes} style={style}>
			{children}
		</animated.div>
	);
};

// Docs
// https://tailwindui.com/interface/application-ui/navigation/steps
