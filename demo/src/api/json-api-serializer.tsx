import { isArray, isObject } from 'utils/helpers';
import { camelToDash, dashToCamel } from 'utils/transforms';

export const attrs = {
	type: { normalize: true, serialize: false },
	updatedAt: { serialize: false },
	createdAt: { serialize: false },
};

export const relationships = {};

// Methods
export const jsonApiCheckAttrs = key => {
	const keys = Object.keys(attrs);
	return keys.includes(key) ? attrs[key] : {};
};

export const jsonApiCheckRelationships = key => {
	const keys = Object.keys(relationships);
	return keys.includes(key) ? relationships[key] : {};
};

// Serialize
export const jsonApiSerializeArray = (data = []) => {
	const serializedData = [];
	data.map(d => serializedData.push(jsonApiSerializeAttrs(d)));
	return { data: { attributes: serializedData } };
};

export const jsonApiSerialize = (data = {}) => {
	const serializedData = jsonApiSerializeAttrs(data);
	return { data: { attributes: serializedData } };
};

export const jsonApiSerializeAttrs = (data = {}) => {
	const serializedAttrs = {};
	Object.keys(data).map(key => {
		if (jsonApiCheckAttrs(key).serialize === false) return;
		switch (key) {
			case 'id':
				serializedAttrs[camelToDash(key)] = parseInt(data[key]);
				return;

			case 'price':
			case 'amount':
				serializedAttrs[camelToDash(key)] = parseFloat(data[key]);
				return;

			default:
				if (isArray(data[key]) && isObject(data[key][0])) {
					return (serializedAttrs[camelToDash(key)] = data[key].map(value => jsonApiSerializeAttrs(value)));
				}
				if (isArray(data[key])) {
					return (serializedAttrs[camelToDash(key)] = data[key]);
				}
				if (isObject(data[key])) {
					return (serializedAttrs[camelToDash(key)] = jsonApiSerializeAttrs(data[key]));
				}
				return (serializedAttrs[camelToDash(key)] = data[key]);
		}
	});
	return serializedAttrs;
};

// Normalize
export const jsonApiNormalizeArray = (data = [], included = [], meta = {}) => {
	const normalizedArray = { data: [], meta: {} };
	data.map(v => normalizedArray.data.push(jsonApiNormalizeAttrs(v, included)));
	normalizedArray.meta = jsonApiNormalizeMeta(meta);
	return normalizedArray;
};

export const jsonApiNormalize = (data = {}, included = []) => {
	const normalizedData = { data: {} };
	normalizedData.data = jsonApiNormalizeAttrs(data, included);
	return normalizedData;
};

export const jsonApiNormalizeAttrs = (data = {}, included = []) => {
	const normalizedAttrs = {};
	Object.keys(data).map(key => {
		if (jsonApiCheckAttrs(key).normalize === false) return;
		switch (key) {
			case 'attributes':
				return Object.assign(normalizedAttrs, jsonApiNormalizeAttrs(data[key], included));

			case 'relationships':
				return Object.assign(normalizedAttrs, jsonApiNormalizeRelationships(data[key], included));

			default:
				return (normalizedAttrs[dashToCamel(key)] = data[key]);
		}
	});
	return normalizedAttrs;
};

export const jsonApiNormalizeRelationships = (data = [], included) => {
	const normalizedAttrs = {};

	Object.keys(data).map(key => {
		const relationshipData = data[key].data;

		if (isArray(relationshipData)) {
			return (normalizedAttrs[dashToCamel(key)] = relationshipData.map(v => jsonApiNormalizeRelationship(v, included)));
		}
		if (isObject(relationshipData)) {
			return (normalizedAttrs[dashToCamel(key)] = jsonApiNormalizeRelationship(relationshipData, included));
		}
	});
	return normalizedAttrs;
};

export const jsonApiNormalizeRelationship = (data = {}, included = []) => {
	const relationship = included.find(v => v.type === data.type && v.id === data.id);
	return jsonApiNormalizeAttrs(relationship);
};

export const jsonApiNormalizeMeta = (meta = {}) => {
	const normalizedMeta = {};
	Object.keys(meta).map(key => (normalizedMeta[dashToCamel(key)] = parseInt(meta[key])));
	return normalizedMeta;
};

// Docs
// https://jsonapi-resources.com/
