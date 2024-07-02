import react from '@vitejs/plugin-react-swc';

import nodePolyfills from 'rollup-plugin-polyfill-node';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	define: {
		global: 'globalThis',
	},
	build: {
		rollupOptions: {
			plugins: [nodePolyfills()],
		},
	},
	plugins: [react(), svgr(), viteTsconfigPaths()],
	preview: {
		host: 'localhost',
		https: true,
		open: false,
		port: 4300,
	},
	resolve: {
		alias: {
			styles: './src/styles',
		},
	},
	server: {
		host: 'localhost',
		open: true,
		port: 4200,
		// https: {
		// 	key: './certs/app.carbonsys.local+1-key.pem',
		// 	cert: './certs/app.carbonsys.local+1.pem',
		// },
	},
});
