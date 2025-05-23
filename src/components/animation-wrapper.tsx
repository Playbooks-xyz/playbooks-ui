import { animated, useSpring } from '@react-spring/web';

import { tailwindClassBuilder } from 'utils';

export const useAnimation = useSpring;

const Animation = ({ className, style, children, ...tailwind }) => {
	const base = { position: 'relative' };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

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
