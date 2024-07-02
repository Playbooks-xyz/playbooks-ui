import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { formatError, isEmpty, logger } from 'utils';

interface iToast {
	showSuccess: (title, message) => any;
	showInfo: (title, message) => any;
	showError: (v) => any;
}

const ToastContext = React.createContext<iToast>(null);

interface iError {
	type?: string;
	status?: number;
	title?: string;
	message?: string;
}

const ToastProvider = ({ children }) => {
	const [toast, setToast] = useState({});
	const [toasts, setToasts] = useState([]);
	const location = useLocation();

	// Hooks
	useEffect(() => {
		if (!isEmpty(toasts)) logger('toasts: ', toasts);
	}, [toasts]);

	useEffect(() => {
		if (!isEmpty(toast)) {
			setToasts(toasts.filter(t => t !== toast));
			setToast({});
		}
	}, [toast]);

	useEffect(() => {
		return () => {
			setToasts([]);
			setToast({});
		};
	}, [location.pathname]);

	// Methods
	const showSuccess = (title: string, message?: string) => {
		setToasts(toasts => toasts.concat({ type: 'success', status: 200, title, message }));
	};

	const showInfo = (title: string, message?: string) => {
		setToasts(toasts => toasts.concat({ type: 'info', status: 'Info', title, message }));
	};

	const showError = (error: iError) => {
		setToasts(toasts => toasts.concat({ type: 'error', ...formatError(error) }));
	};

	const memoizedValues = useMemo(() => {
		return { showSuccess, showInfo, showError };
	}, []);

	// Render
	return (
		<ToastContext.Provider value={memoizedValues}>
			{/* {toasts.map((t, i) => (
				<Fragment key={i}>{t.title}</Fragment>
			))} */}
			{children}
		</ToastContext.Provider>
	);
};

const useToast = () => {
	return React.useContext(ToastContext);
};

export { ToastProvider, useToast };
