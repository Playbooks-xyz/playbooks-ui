import react from '@vitejs/plugin-react';

import { exec } from 'node:child_process';
import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';

function pushBuild() {
	exec('npx yalc push', (response, error) => (error ? console.error(error) : null));
}

export default defineConfig({
	base: './',
	build: {
		// sourcemap: true,
		lib: {
			entry: [
				path.resolve(__dirname, 'src/index.tsx'),
				path.resolve(__dirname, 'src/components/components.tsx'),
				path.resolve(__dirname, 'src/contexts/context.tsx'),
				path.resolve(__dirname, 'src/interface/accordions.tsx'),
				path.resolve(__dirname, 'src/interface/alerts.tsx'),
				path.resolve(__dirname, 'src/interface/avatars.tsx'),
				path.resolve(__dirname, 'src/interface/badges.tsx'),
				path.resolve(__dirname, 'src/interface/banners.tsx'),
				path.resolve(__dirname, 'src/interface/breadcrumbs.tsx'),
				path.resolve(__dirname, 'src/interface/button-groups.tsx'),
				path.resolve(__dirname, 'src/interface/buttons.tsx'),
				path.resolve(__dirname, 'src/interface/cards.tsx'),
				path.resolve(__dirname, 'src/interface/commands.tsx'),
				path.resolve(__dirname, 'src/interface/drops.tsx'),
				path.resolve(__dirname, 'src/interface/feedbacks.tsx'),
				path.resolve(__dirname, 'src/interface/fonts.tsx'),
				path.resolve(__dirname, 'src/interface/footers.tsx'),
				path.resolve(__dirname, 'src/interface/forms.tsx'),
				path.resolve(__dirname, 'src/interface/grid.tsx'),
				path.resolve(__dirname, 'src/interface/head.tsx'),
				path.resolve(__dirname, 'src/interface/headers.tsx'),
				path.resolve(__dirname, 'src/interface/heros.tsx'),
				path.resolve(__dirname, 'src/interface/html.tsx'),
				path.resolve(__dirname, 'src/interface/icons.tsx'),
				path.resolve(__dirname, 'src/interface/input-groups.tsx'),
				path.resolve(__dirname, 'src/interface/links.tsx'),
				path.resolve(__dirname, 'src/interface/list-groups.tsx'),
				path.resolve(__dirname, 'src/interface/loaders.tsx'),
				path.resolve(__dirname, 'src/interface/menus.tsx'),
				path.resolve(__dirname, 'src/interface/modals.tsx'),
				path.resolve(__dirname, 'src/interface/navbars.tsx'),
				path.resolve(__dirname, 'src/interface/navs.tsx'),
				path.resolve(__dirname, 'src/interface/paginations.tsx'),
				path.resolve(__dirname, 'src/interface/prefooters.tsx'),
				path.resolve(__dirname, 'src/interface/progress-bars.tsx'),
				path.resolve(__dirname, 'src/interface/radios.tsx'),
				path.resolve(__dirname, 'src/interface/ranges.tsx'),
				path.resolve(__dirname, 'src/interface/routes.tsx'),
				path.resolve(__dirname, 'src/interface/sections.tsx'),
				path.resolve(__dirname, 'src/interface/slides.tsx'),
				path.resolve(__dirname, 'src/interface/spinners.tsx'),
				path.resolve(__dirname, 'src/interface/switches.tsx'),
				path.resolve(__dirname, 'src/interface/tables.tsx'),
				path.resolve(__dirname, 'src/interface/tabs.tsx'),
				path.resolve(__dirname, 'src/interface/tags.tsx'),
				path.resolve(__dirname, 'src/interface/toasts.tsx'),
				path.resolve(__dirname, 'src/interface/tooltips.tsx'),
				path.resolve(__dirname, 'src/styles/styles.tsx'),
				path.resolve(__dirname, 'src/utils/utils.tsx'),
			],
			formats: ['cjs'],
			name: 'playbooks-interface',
			fileName: (format, entryName) => {
				// console.log('entryName: ', entryName)
				return `${entryName}.cjs`;
			},
		},
		rollupOptions: {
			external: [
				'react',
				'react-dom',
				'react/jsx-runtime',
				'next',
				'next/dynamic',
				'next/head',
				'next/link',
				'next/router',
				'tailwindcss',
			],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
					'react/jsx-runtime': 'react/jsx-runtime',
					next: 'next',
					tailwindcss: 'tailwindcss',
				},
				// preserveModules: true
			},
			plugins: [peerDepsExternal()],
		},
	},
	plugins: [
		react(),
		{
			name: 'yalc-push',
			closeBundle: pushBuild,
		},
	],
	css: {
		postcss: {
			plugins: [tailwindcss],
		},
	},
	resolve: {
		alias: {
			src: path.resolve(__dirname, '/src'),
			assets: path.resolve(__dirname, '/src/assets'),
			components: path.resolve(__dirname, '/src/components'),
			contexts: path.resolve(__dirname, '/src/contexts'),
			hooks: path.resolve(__dirname, '/src/hooks'),
			icons: path.resolve(__dirname, '/src/icons'),
			interface: path.resolve(__dirname, '/src/interface'),
			styles: path.resolve(__dirname, '/src/styles'),
			types: path.resolve(__dirname, '/src/types'),
			utils: path.resolve(__dirname, '/src/utils'),
		},
	},
});

// Docs
// https://github.com/vitejs/vite/discussions/9217
