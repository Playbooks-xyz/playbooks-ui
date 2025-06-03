import { animated, useSpring } from '@react-spring/web';

import { TailwindProps } from '@ehubbell/html';
import { computeTailwind } from 'utils';

export const useAnimation = useSpring;

export type AnimationProps = {
	name?: string;
	tailwind?: TailwindProps;
	className?: string;
	style: any;
	children: any;
};

const Animation = ({ name, tailwind, className, style, children, ...props }: AnimationProps) => {
	const base = { position: 'relative' };
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });

	// Render
	return (
		<animated.div data-name={name} className={classes} style={style}>
			{children}
		</animated.div>
	);
};

export { Animation };

// Docs
// https://www.react-spring.dev/docs/components/use-spring
