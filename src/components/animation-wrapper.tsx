import { animated, useSpring } from '@react-spring/web';

import { classBuilder } from 'utils';

export const useAnimation = useSpring;

export type AnimationType = {
	className?: string;
	style: any;
	children: any;
};

const Animation = ({ className, style, children, ...tailwind }: AnimationType) => {
	const base = { position: 'relative' };
	const classes = classBuilder({ ...base, ...tailwind, className });

	// Render
	return (
		<animated.div className={classes} style={style}>
			{children}
		</animated.div>
	);
};

export { Animation };

// Docs
// https://www.react-spring.dev/docs/components/use-spring
