import React, { useEffect, useState } from 'react';

import { logger } from 'utils';

const TrackerContext = React.createContext({});

const TrackerProvider = ({ children }) => {
	const [loaded, setLoaded] = useState(false);

	// Hooks
	useEffect(() => {
		setLoaded(true);
		logger('tracker: ', { status: 'ok' });
	}, []);

	// Methods
	const trackEvent = async (query, params) => {
		// Adapter
		// Normalize
		// Logging
		// Return
	};

	const trackUser = async (query, recordId, params) => {
		// Adapter
		// Normalize
		// Logging
		// Return
	};

	const trackPage = async (query, model) => {
		// Serialize
		// Create or update
		// Logging
		// Return
	};

	const trackBug = async (query, data) => {
		// Adapter
		// Format response
	};

	// Render
	return (
		<TrackerContext.Provider value={{ trackEvent, trackUser, trackPage, trackBug }}>
			{loaded ? children : null}
		</TrackerContext.Provider>
	);
};

const useTracker = () => {
	return React.useContext(TrackerContext);
};

export { TrackerProvider, useTracker };

// Docs
