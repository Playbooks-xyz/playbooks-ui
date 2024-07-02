import { isArray } from 'utils/helpers';

// Serialize
export const serializeParams = (params, filterName, value) => {
	const formattedFilters = [];
	Object.keys(params)
		.filter(key => key !== filterName)
		.map(key => {
			const param = serializeParam(key, params[key]);
			return formattedFilters.push(param);
		});
	if (value) formattedFilters.push(serializeParam(filterName, value));
	return formattedFilters;
};

export const serializeParam = (key, value) => {
	return `${key}=${value}`;
};

// Normalize
export const normalizeParams = filters => {
	const formattedParams = {};
	filters?.map(v => {
		const [key, value] = v.split('=');
		const formattedValue = normalizeParam(key, value);
		return Object.assign(formattedParams, { [key]: formattedValue });
	});
	return formattedParams;
};

export const normalizeParam = (key, value) => {
	return isArray(value) ? value.split(':') : value;
};

export const clearParams = elements => {
	elements.map(v => {
		const input = document.getElementById(v) as HTMLInputElement;
		if (input) input.value = '';
	});
};
