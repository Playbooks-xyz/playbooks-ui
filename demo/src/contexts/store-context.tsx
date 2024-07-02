import React, { useEffect, useMemo } from 'react';

import {
	download,
	jsonApiNormalize,
	jsonApiNormalizeArray,
	jsonApiSerialize,
	jsonApiSerializeArray,
	storeRequest,
} from 'api';
import { useStorage } from 'contexts/storage-context';
import { isArray, logger } from 'utils';

type iStore = {
	query?: any;
	queryRecord?: any;
	createRecord?: any;
	updateRecord?: any;
	saveRecord?: any;
	saveRecords?: any;
	deleteRecord?: any;
	download?: any;
};

type iStoreQuery = {
	url: string;
	headers?: any;
	params: any;
};

type iStoreRecord = {
	url: string;
	headers?: any;
	params: any;
	data: any;
};

const StoreContext = React.createContext<iStore>({});

const StoreProvider = ({ children }) => {
	const { storage } = useStorage();

	// Computed
	const authHeaders = useMemo(() => {
		if (!storage.token?.id) return {};
		const token = storage.token?.token;
		const tempToken = storage.tempToken?.token;
		return { Authorization: storage.adminMode ? tempToken : token };
	}, [JSON.stringify(storage)]);

	// Hooks
	useEffect(() => {
		logger('store: ', { status: 'ready' });
	}, []);

	// Methods
	const query = async ({ url, headers, params }: iStoreQuery) => {
		const formattedHeaders = { ...authHeaders, ...headers };
		const response = await storeRequest({ method: 'GET', url, headers: formattedHeaders, params });
		const formattedResponse = jsonApiNormalizeArray(response.data, response.included, response.meta);
		return formattedResponse;
	};

	const queryRecord = async ({ url, headers, params }: iStoreQuery) => {
		const formattedHeaders = { ...authHeaders, ...headers };
		const response = await storeRequest({ method: 'GET', url, headers: formattedHeaders, params });
		const formattedResponse = jsonApiNormalize(response.data, response.included);
		return formattedResponse;
	};

	const saveRecord = async ({ url, headers, params, data }: iStoreRecord) => {
		return data.id
			? await updateRecord({ url, headers, params, data })
			: await createRecord({ url, headers, params, data });
	};

	const saveRecords = async ({ url, headers, params, data }: iStoreRecord) => {
		const formattedHeaders = { ...authHeaders, ...headers };
		const formattedData = jsonApiSerializeArray(data);
		const response = await storeRequest({ method: 'PUT', url, headers: formattedHeaders, params, data: formattedData });
		const formattedResponse = jsonApiNormalize(response.data, response.included);
		return formattedResponse;
	};

	const createRecord = async ({ url, headers, params, data }: iStoreRecord) => {
		const formattedHeaders = { ...authHeaders, ...headers };
		const formattedData = isArray(data) ? jsonApiSerializeArray(data) : jsonApiSerialize(data);
		const response = await storeRequest({
			method: 'POST',
			url,
			headers: formattedHeaders,
			params,
			data: formattedData,
		});
		const formattedResponse = jsonApiNormalize(response.data, response.included);
		return formattedResponse;
	};

	const updateRecord = async ({ url, headers, params, data }: iStoreRecord) => {
		const formattedHeaders = { ...authHeaders, ...headers };
		const formattedData = isArray(data) ? jsonApiSerializeArray(data) : jsonApiSerialize(data);
		const response = await storeRequest({ method: 'PUT', url, headers: formattedHeaders, params, data: formattedData });
		const formattedResponse = jsonApiNormalize(response.data, response.included);
		return formattedResponse;
	};

	const deleteRecord = async ({ url, headers, params, data }: iStoreRecord) => {
		const formattedHeaders = { ...authHeaders, ...headers };
		const response = await storeRequest({ method: 'DELETE', url, headers: formattedHeaders, params, data });
		const formattedResponse = jsonApiNormalize(response.data, response.included);
		return formattedResponse;
	};

	// Render
	return (
		<StoreContext.Provider
			value={{
				query,
				queryRecord,
				saveRecord,
				saveRecords,
				createRecord,
				updateRecord,
				deleteRecord,
				download,
			}}>
			{children}
		</StoreContext.Provider>
	);
};

const useStore = () => {
	return React.useContext(StoreContext);
};

export { StoreProvider, useStore };
