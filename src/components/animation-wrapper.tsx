import { Transition } from 'react-transition-group';

const Fade = ({
	show,
	timeout = 200,
	onEnter,
	onEntering,
	onEntered,
	onExit,
	onExiting,
	onExited,
	mountOnEnter = true,
	unmountOnExit = true,
	children,
}) => {
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
