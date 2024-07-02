import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useStorage } from 'contexts/storage-context';
import { useStore } from 'contexts/store-context';
import { useToast } from 'contexts/toast-context';
import { logger } from 'utils';

type iSessionContext = {
	user?: any;
	setUser?: any;
	isAuthenticated?: any;
	rootApi: string;
	rootLink: string;
	authenticate?: any;
	update?: any;
	logout?: any;
	loaded?: any;
};

const SessionContext = React.createContext<iSessionContext>(null);

const SessionProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [loaded, setLoaded] = useState(false);
	const navigate = useNavigate();
	const storage = useStorage();
	const store = useStore();
	const toast = useToast();

	// Computed
	const rootApi = `/session/${user.uuid}`;
	const rootLink = `/${user.uuid}`;
	const isAuthenticated = () => (parseInt(user.id) > 0 ? true : false);

	// Hooks
	useEffect(() => {
		if (storage.loaded) init();
	}, [storage.loaded]);

	// Methods
	const init = async () => {
		try {
			const token = storage.getValue('token');
			if (token?.id) await fetchSession();
		} catch (e) {
			storage.clear();
			toast.showError(e);
		} finally {
			setLoaded(true);
		}
	};

	const fetchSession = async (headers?) => {
		const response = await store.queryRecord({
			url: `/session`,
			headers,
			params: { include: ['location', 'orgs', 'setup', 'settings'] },
		});
		setUser(response.data);
		logger('session: ', response.data);
		return response.data;
	};

	const authenticate = async user => {
		storage.storeValue('token', user.token);
		const headers = { Authorization: user.token?.token };
		return await fetchSession(headers);
	};

	const update = async v => {
		await fetchSession();
		// setUser({ ...user, ...v });
	};

	const logout = async () => {
		setUser({});
		storage.clear();
		logger('session ended: ', {});
		toast.showSuccess(200, `You've been logged out`);
		navigate.push('/');
	};

	// Render
	return (
		<SessionContext.Provider
			value={{
				user,
				setUser,
				isAuthenticated,
				rootApi,
				rootLink,
				authenticate,
				update,
				loaded,
				logout,
			}}>
			{children}
		</SessionContext.Provider>
	);
};

const useSession = () => {
	return React.useContext(SessionContext);
};

export { SessionProvider, useSession };

// Docs
// https://www.npmjs.com/package/local-storage
