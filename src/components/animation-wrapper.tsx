import { animated, useSpring } from '@react-spring/web';

import { tailwindClassBuilder } from 'utils';

interface Animation {
	className?: string;
	style?: any;
	children: React.ReactNode;
}

export const useAnimation = useSpring;

const Animation: React.FC<Animation> = ({ className, style, children, ...tailwind }) => {
	const base = {};
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
