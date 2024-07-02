import { useEffect } from 'react';

import 'styles/_global.css';
import { SessionProvider, StorageProvider, StoreProvider, ThemeProvider, ToastProvider } from 'contexts';
import Router from 'router';

const App = props => {
	// Hooks
	useEffect(() => {
		console.log('Env: ', import.meta.env.VITE_NODE_ENV);
	}, []);

	// Render
	return (
		<StorageProvider>
			<SessionProvider>
				<StoreProvider>
					<ThemeProvider>
						<ToastProvider>
							<Router />
						</ToastProvider>
					</ThemeProvider>
				</StoreProvider>
			</SessionProvider>
		</StorageProvider>
	);
};

export default App;
