const colors = require('tailwindcss/colors');
const TailwindFormPlugin = require('@tailwindcss/forms');

module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		colors: {
			transparent: 'transparent',
			black: colors.black,
			cyan: colors.cyan, // [#cffafe, #a5f3fc, #67e8f9, #22d3ee, #06b6d4, #0891b2] #22d3ee
			blue: colors.blue, // [#dbeafe, #bfdbfe, #93c5fd, #60a5fa, #3b82f6]
			gray: colors.slate, // [#f8fafc, #f1f5f9, #e2e8f0, #cbd5e1, #94a3b8, #64748b, #475569, #334155, #1e293b, #0f172a] #334155
			green: colors.emerald, // [#d1fae5, #a7f3d0, #6ee7b7, #34d399, #10b981]
			pink: colors.pink, // [#fce7f3, #fbcfe8, #f9a8d4, #f472b6, #ec4899, #db2777]
			red: colors.rose, // [#ffe4e6, #fecdd3, #fda4af, #fb7185, #f43f5e, #e11d48] #f43f5e
			orange: colors.orange, // [#ffedd5, #fed7aa, #fdba74, #fb923c, #f97316, #ea580c] #fb923c
			indigo: colors.indigo, // [#e0e7ff, #c7d2fe, #a5b4fc, #818cf8, #6366f1, #4f46e5] #6366f1
			purple: colors.violet, // [#ede9fe, #ddd6fe, #c4b5fd, #a78bfa, #8b5cf6, #7c3aed] #8B5CF6
			white: colors.white,
		},
		extend: {
			fontFamily: {
				primary: ['Plus Jakarta Sans', 'sans-serif'], // ['thin, light, regular, medium, bold']
				secondary: ['Inter', 'sans-serif'], // ['thin, light, regular, medium, bold']
				accent: ['Courier', 'monospace'], // ['thin, light, regular, medium, bold']
			},
			maxWidth: {
				xs: '480px !important',
				sm: '640px !important',
				md: '768px !important',
				lg: '1024px !important',
				xl: '1280px !important',
				xxl: '1440px !important',
			},
			minWidth: {
				xs: '480px !important',
				sm: '640px !important',
				md: '768px !important',
				lg: '1024px !important',
				xl: '1280px !important',
				xxl: '1440px !important',
			},
			width: {
				xs: '480px !important',
				sm: '640px !important',
				md: '768px !important',
				lg: '1024px !important',
				xl: '1280px !important',
				xxl: '1440px !important',
			},
		},
	},
	corePlugins: {
		brightness: false,
		contrast: false,
		filter: false,
		grayScale: false,
		hueRotate: false,
		invert: false,
		saturate: false,
		sepia: false,
		backdropContrast: false,
		backdropBrightness: false,
		backdropFilter: false,
		backdropGrayScale: false,
		backdropHueRotate: false,
		backdropInvert: false,
		backdropSaturate: false,
		backdropSepia: false,
		// preflight: false,
	},
	plugins: [TailwindFormPlugin],
};

// Docs
// https://tailwindcss.com/docs
// https://tailwindcss.com/docs/customizing-colors#default-color-palette
