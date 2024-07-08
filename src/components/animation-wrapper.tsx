import { Transition } from 'react-transition-group';

export type iFade = {
	show: boolean;
	timeout: any;
	onEnter?: any;
	onEntering?: any;
	onEntered?: any;
	onExit?: any;
	onExiting?: any;
	onExited?: any;
	mountOnEnter?: boolean;
	unmountOnExit?: boolean;
	children: any;
};

const Fade = ({
	show,
	timeout,
	onEnter,
	onEntering,
	onEntered,
	onExit,
	onExiting,
	onExited,
	mountOnEnter = true,
	unmountOnExit = true,
	children,
}: iFade) => {
	return (
		<Transition
			in={show}
			appear={show}
			timeout={timeout}
			onEnter={onEnter}
			onEntering={onEntering}
			onEntered={onEntered}
			onExit={onExit}
			onExiting={onExiting}
			onExited={onExited}
			mountOnEnter={mountOnEnter}
			unmountOnExit={unmountOnExit}>
			{children}
		</Transition>
	);
};

export { Fade };

// Docs
// https://reactcommunity.team/react-transition-group/transition
