import React, { useEffect, useState } from 'react';

import { useStorage } from 'contexts/storage-context';
import { logger } from 'utils';

type iTheme = {
	darkMode: boolean;
	setDarkMode: any;
	loaded: boolean;
};

const ThemeContext = React.createContext<iTheme>(null);

const ThemeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);
	const [loaded, setLoaded] = useState(false);
	const storage = useStorage();

	// Hooks
	useEffect(() => {
		init();
		logger('theme: ', { status: 'ready' });
	}, []);

	useEffect(() => {
		updateMode(darkMode);
	}, [darkMode]);

	// Methods
	const init = () => {
		const storageDark = storage.getValue('dark') || false;
		setDarkMode(storageDark);
		setLoaded(true);
	};

	const updateMode = mode => {
		if (mode) {
			document.body.classList.add('dark');
			storage.storeValue('dark', true);
		} else {
			document.body.classList.remove('dark');
			storage.storeValue('dark', false);
		}
	};

	return <ThemeContext.Provider value={{ darkMode, setDarkMode, loaded }}>{children}</ThemeContext.Provider>;
};

const useTheme = () => {
	return React.useContext(ThemeContext);
};

export { ThemeProvider, useTheme };
