import React, { useEffect, useState } from 'react';

import * as LocalStorage from 'local-storage';
import { logger } from 'utils';

type iStorageContext = {
	storage: any;
	getValue: any;
	storeTempValue: any;
	storeValue: any;
	pushValue: any;
	removeValue: any;
	clear: any;
	loaded: boolean;
};

type iStorage = {
	id?: string;
	dark?: boolean;
	domain?: string;
	search?: any[];
	token?: any;
	tempToken?: any;
	adminMode?: any;
};

const storageKey = import.meta.env.VITE_STORAGE_KEY;

const StorageContext = React.createContext<iStorageContext>(null);

const StorageProvider = ({ children }) => {
	const [storage, setStorage] = useState<iStorage>({});
	const [loaded, setLoaded] = useState(false);

	// Hooks
	useEffect(() => {
		init();
	}, []);

	// Methods
	const init = () => {
		setStorage({
			dark: LocalStorage.get(`${storageKey}.dark`) || false,
			search: LocalStorage.get(`${storageKey}.search`) || [],
			token: LocalStorage.get(`${storageKey}.token`) || {},
		});
		logger('storage: ', { status: 'ready' });
		setLoaded(true);
	};

	const getValue = key => {
		return storage[key] ? storage[key] : LocalStorage.get(`${storageKey}.${key}`);
	};

	const storeTempValue = (key, value) => {
		setStorage({ ...storage, [key]: value });
	};

	const storeValue = (key, value) => {
		LocalStorage.set(`${storageKey}.${key}`, value);
		setStorage({ ...storage, [key]: value });
	};

	const pushValue = (key, value) => {
		const formattedValue = storage[key]?.slice(0, 20).concat(value) || [];
		LocalStorage.set(`${storageKey}.${key}`, formattedValue);
		setStorage({ ...storage, [key]: formattedValue });
	};

	const removeValue = key => {
		setStorage({ ...storage, [key]: null });
		LocalStorage.remove(`${storageKey}.${key}`);
	};

	const clear = () => {
		setStorage({});
		LocalStorage.clear();
	};

	// Render
	return (
		<StorageContext.Provider
			value={{ storage, getValue, storeValue, storeTempValue, pushValue, removeValue, clear, loaded }}>
			{children}
		</StorageContext.Provider>
	);
};

const useStorage = () => {
	return React.useContext(StorageContext);
};

export { StorageProvider, useStorage };

// Docs:
// https://www.npmjs.com/package/local-storage
