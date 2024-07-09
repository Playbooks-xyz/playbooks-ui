import { useEffect } from 'react';

export const useKeyPress = (onKeyPress, listeners) => {
	// Hooks
	useEffect(() => {
		window.addEventListener('keydown', onKeyPress);
		return () => window.removeEventListener('keydown', onKeyPress);
	}, [...listeners]);
};

export const useKeyDownUp = (onKeyDown, onKeyUp, listeners) => {
	// Hooks
	useEffect(() => {
		window.addEventListener('keydown', onKeyDown);
		window.addEventListener('keyup', onKeyUp);
		return () => {
			window.removeEventListener('keydown', onKeyDown);
			window.removeEventListener('keyup', onKeyUp);
		};
	}, [...listeners]);
};

export const useElementKeyPress = (element, onKeyPress, listeners) => {
	useEffect(() => {
		if (element) element.addEventListener('keydown', onKeyPress);
		return () => (element ? element.removeEventListener('keydown', onKeyPress) : null);
	}, [element, ...listeners]);
};

// Docs
// https://usehooks.com/usekeypress
