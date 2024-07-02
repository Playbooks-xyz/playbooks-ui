import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import App from 'app';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
	<BrowserRouter>
		<HelmetProvider>
			<App />
		</HelmetProvider>
	</BrowserRouter>,
);
