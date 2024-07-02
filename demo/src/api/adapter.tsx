import fetch from 'cross-fetch';
import { isEmpty, timeElapsed, timeout } from 'utils/helpers';
import { logInfo, logSuccess } from 'utils/loggers';

const apiDomain = import.meta.env.VITE_API_DOMAIN;

type iStoreRequest = {
	method?: string;
	url?: string;
	headers?: any;
	params?: any;
	data?: any | any[];
};

// Private
export const client = async (url, options) => {
	const response = await fetch(url, options);
	if (!response.ok) {
		const data = await response.json();
		throw data.errors;
	}
	return await response.json();
};

export const formatOptions = (method, headers, data) => {
	const formattedOptions = {};
	formattedOptions['method'] = method;
	formattedOptions['headers'] = { ...headers, 'Content-Type': 'application/json' };
	formattedOptions['body'] = JSON.stringify(data);
	// if (env === 'development') formattedOptions['agent'] = new Https.Agent({ rejectUnauthorized: false });
	return formattedOptions;
};

export const formatParams = (params = {}) => {
	let formattedParams = '';
	Object.keys(params).map((key, index) => {
		const value = params[key];
		if (!isEmpty(value)) {
			formattedParams = formattedParams.concat(`${key}=${value.toString()}`);
			formattedParams = index < Object.keys(params).length - 1 ? formattedParams.concat('&') : formattedParams;
		}
	});
	return formattedParams;
};

export const formatUrl = (url, params) => {
	const formattedUrl = apiDomain + url;
	return params ? formattedUrl.concat(`?${params}`) : formattedUrl;
};

export const request = async ({ method = 'GET', url, headers, params, data }: iStoreRequest) => {
	const date = new Date();
	const formattedParams = formatParams(params);
	const formattedUrl = formatUrl(url, formattedParams);
	const formattedOptions = formatOptions(method, headers, data);
	const response = await client(formattedUrl, formattedOptions);
	return [timeElapsed(date), response];
};

export const apiRequest = async ({ method = 'GET', url, headers, params, data }: iStoreRequest) => {
	logInfo(`apiRequest: `, { method, url, params, data });
	const [date, response] = await request({ method, url, headers, params, data });
	logSuccess(`apiResponse (${date}): `, { method, url, params, response });
	return response;
};

export const storeRequest = async ({ method = 'GET', url, headers, params, data }: iStoreRequest) => {
	await timeout(300);
	logInfo(`storeRequest: `, { method, url, params, data });
	const [date, response] = await request({ method, url, headers, params, data });
	logSuccess(`storeResponse (${date}): `, { method, url, params, response });
	return response;
};

export const download = async ({ method = 'GET', url, headers, params, data }: iStoreRequest) => {
	await timeout(300);
	const date = new Date();
	logInfo(`downloadRequest: `, { method, url, params, data });
	const formattedParams = formatParams(params);
	const formattedUrl = formatUrl(url, formattedParams);
	const formattedOptions = formatOptions(method, headers, data);
	const response = await fetch(formattedUrl, formattedOptions);
	logSuccess(`downloadResponse (${date}): `, { method, url, params, response });
	if (!response.ok) {
		const data = await response.json();
		throw data.errors;
	}
	return await response;
};

// Docs:
// https://www.npmjs.com/package/cross-fetch#usage
// https://github.github.io/fetch/
