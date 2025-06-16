import { useEffect } from 'react';

export const useKeyPress = (onKeyPress, listeners) => {
	// Hooks
	useEffect(() => {
		window.addEventListener('keydown', onKeyPress);
		return () => window.removeEventListener('keydown', onKeyPress);
	}, [...listeners]);
};

export const useElementKeyPress = (element, onKeyPress, listeners) => {
	useEffect(() => {
		if (element) element.addEventListener('keydown', onKeyPress);
		return () => (element ? element.removeEventListener('keydown', onKeyPress) : null);
	}, [element, ...listeners]);
};

export const useMouseDown = (onMouseDown, listeners) => {
	// Hooks
	useEffect(() => {
		window.addEventListener('mousedown', onMouseDown);
		return () => window.removeEventListener('mousedown', onMouseDown);
	}, [...listeners]);
};

export const useMouseUp = (onMouseUp, listeners) => {
	// Hooks
	useEffect(() => {
		window.addEventListener('mouseup', onMouseUp);
		return () => window.removeEventListener('mouseup', onMouseUp);
	}, [...listeners]);
};

// Docs
// https://usehooks.com/usekeypress
