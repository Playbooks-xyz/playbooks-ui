import uniq from 'lodash/uniq';
import uniqid from 'uniqid';

export const env = import.meta.env.VITE_NODE_ENV;

export const timeout = (period: number, dev?: boolean) => {
	return dev ? null : new Promise(resolve => setTimeout(resolve, period));
};

export const getSeconds = () => {
	return Math.floor(Date.now() / 1000);
};

export const getRandomInt = (max = 1000000) => {
	return Math.floor(Math.random() * max);
};

export const getUUID = () => {
	return uniqid.time();
};

export const getUnique = (array: any[]) => {
	return uniq(array);
};

export const addObject = (array: any[], record: any): any[] => {
	return !array.includes(record) ? array.concat(record) : array;
};

export const addOrRemoveObject = (array: any[], record: any): any[] => {
	return array.includes(record) ? removeObject(array, record) : array.concat(record);
};

export const removeObject = (array: any[], record: any): any[] => {
	return array.filter(a => a !== record);
};

export const duration = (start: number, end: number, period: string) => {
	const milliSeconds = end - start;
	const seconds = parseFloat((milliSeconds / 1000).toFixed(2));
	const minutes = parseFloat((seconds / 60).toFixed(2));

	switch (period) {
		case 'minutes':
		case 'm':
			return `${minutes}m`;

		case 'seconds':
		case 's':
			return `${seconds}s`;

		default:
			return `${milliSeconds}ms`;
	}
};

export const timeElapsed = (start: number) => {
	return Date.now() - start + 'ms';
};

export const listBuilder = (count = 3) => {
	return [...new Array(count)].map((_, i) => i + 1);
};

export const removeHtmlEntities = (data: string) => {
	const trademark = '&reg;';
	const ampersand = '&amp;';
	const space = '&nbsp;';
	return data.replace(trademark, '').replace(ampersand, '').replace(space, '');
};

export const isArray = (data: any) => {
	return Array.isArray(data);
};

export const isObject = (data: any) => {
	return data !== null && typeof data === 'object';
};

export const isString = (data: any) => {
	return typeof data === 'string';
};

export const isEmpty = (data: any) => {
	if (data === null || data === undefined || data === 'undefined') return true;
	if (isArray(data)) return data.length === 0 ? true : false;
	if (isObject(data)) return Object.keys(data).length === 0 ? true : false;
	return data.length === 0 ? true : false;
};

// Docs
// https://www.w3schools.com/js/js_typeof.asp#:~:text=In%20JavaScript%20null%20is%20%22nothing,typeof%20null%20is%20an%20object.
// https://www.w3schools.com/html/html_entities.asp
