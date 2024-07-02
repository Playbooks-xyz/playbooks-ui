import { isArray, isEmpty, isObject } from 'utils/helpers';
import { camelToDash, dashToCamel } from 'utils/transforms';

// Helpers
const defaultFormatter = value => value;

const formatLookup = type => {
	switch (type) {
		case 'camelcase':
			return camelToDash;

		default:
			return defaultFormatter;
	}
};

// Serialize
export const serializeArray = (data = [], attrs = []) => {
	const serializedData = [];
	data.map(v => serializedData.push(serializeAttrs({ data: v, attrs })));
	return serializedData;
};

export const serialize = (data = {}, attrs = []) => {
	const serializedData = {};
	Object.assign(serializedData, serializeAttrs({ data, attrs }));
	return serializedData;
};

export const serializeAttrs = ({ type, data = {}, attrs = [] }: { type?: string; data: any; attrs?: string[] }) => {
	const formatter = formatLookup(type);
	const serializedAttrs = {};

	Object.keys(data).map(key => {
		if (attrs.length !== 0) {
			if (isArray(data[key]) && isObject(data[key][0])) {
				const arrayData = data[key];
				const arrayAttrs = attrs.filter(v => v.split('.')[0] === key)?.map(v => v.split('.')[1]);
				if (isEmpty(arrayAttrs)) return;
				return (serializedAttrs[formatter(key)] =
					arrayData.length > 0 ? arrayData.map(data => serializeAttrs({ data, attrs: arrayAttrs })) : []);
			}
			if (isArray(data[key])) {
				return (serializedAttrs[camelToDash(key)] = data[key]);
			}
			if (isObject(data[key])) {
				const objectData = data[key];
				const objectAttrs = attrs.filter(v => v.split('.')[0] === key);
				const formattedAttrs = objectAttrs.filter(v => v.includes('.')).map(v => v.split('.')[1]);
				if (isEmpty(objectAttrs)) return;
				return (serializedAttrs[formatter(key)] = serializeAttrs({ data: objectData, attrs: formattedAttrs }));
			}
			if (attrs.includes(key)) return (serializedAttrs[formatter(key)] = data[key]);
			return;
		}
		return (serializedAttrs[formatter(key)] = data[key]);
	});

	return serializedAttrs;
};

// Normalize
export const normalizeArray = (data = [], included = [], meta = {}) => {
	const normalizedArray = { data: [], meta: {} };
	data.map(v => normalizedArray.data.push(normalizeAttrs(v, included)));
	normalizedArray.meta = normalizeMeta(meta);
	return normalizedArray;
};

export const normalize = (data, attrs = []) => {
	const normalizedData = { data: {} };
	Object.assign(normalizedData.data, normalizeAttrs(data, attrs));
	// logger('normalizedData: ', normalizedData);
	return normalizedData;
};

export const normalizeMeta = meta => {
	const normalizedMeta = {};
	Object.keys(meta).map(key => {
		normalizedMeta[dashToCamel(key)] = parseInt(meta[key]);
	});
	return normalizedMeta;
};

export const normalizeAttrs = (data, attrs = []) => {
	const normalizedAttrs = {};
	Object.keys(data).map(key => {
		if (attrs.includes(key)) return;
		if (isArray(data[key])) {
			return (normalizedAttrs[dashToCamel(key)] = data[key].map(v => normalizeAttrs(v, attrs)));
		}
		if (isObject(data[key])) {
			return (normalizedAttrs[dashToCamel(key)] = normalizeAttrs(data[key], attrs));
		}
		return (normalizedAttrs[dashToCamel(key)] = data[key]);
	});
	return normalizedAttrs;
};

export const normalizeAttr = (data, key) => {
	return { [dashToCamel(key)]: data[key] };
};

// Docs
//
