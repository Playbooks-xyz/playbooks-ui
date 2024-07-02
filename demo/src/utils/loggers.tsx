const errorStyles = 'color: crimson';
const infoStyles = 'color: cadetblue';
const successStyles = 'color: aquamarine';

const shouldLog = ['development', 'staging'].includes(import.meta.env.VITE_NODE_ENV);

export const logger = (title, ...data) => {
	if (shouldLog) {
		return console.log(`${title}`, ...data);
	}
};

export const logError = (title, ...data) => {
	if (shouldLog) {
		return console.log(`%c${title}`, errorStyles, ...data);
	}
};

export const logInfo = (title, ...data) => {
	if (shouldLog) {
		return console.log(`%c${title}`, infoStyles, ...data);
	}
};

export const logSuccess = (title, ...data) => {
	if (shouldLog) {
		return console.log(`%c${title}`, successStyles, ...data);
	}
};

// Docs:
// https://developer.mozilla.org/en-US/docs/Web/API/Console
