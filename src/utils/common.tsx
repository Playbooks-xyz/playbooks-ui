export const accordionProps = open => ({
	body: {
		border: open ? 'border-b border-l border-r' : 'border',
		borderRadius: open ? 'rounded-bl rounded-br' : 'rounded-md',
	},
	toggle: {
		border: 'border',
		borderRadius: open ? 'rounded-tl rounded-tr' : 'rounded-md',
		spacing: 'p-4',
	},
});

export const borderProps = {
	borderColor: 'border-gray-300 dark:border-gray-600',
	borderOpacity: 'border-opacity-50 dark:border-opacity-50',
};

export const cloudProps = {
	bgColor: 'bg-gray-200 dark:bg-gray-700',
	bgOpacity: 'bg-opacity-25 dark:bg-opacity-25',
	color: 'text-gray-500 dark:text-gray-400',
	fontSize: 'text-sm',
	fontFamily: 'font-secondary',
	size: '',
	spacing: 'px-2 py-1',
};

export const divideProps = {
	divideColor: 'divide-gray-400 dark:divide-gray-600',
	divideOpacity: 'divide-opacity-50 dark:divide-opacity-50',
};

export const accentGradientBgColor = {
	bgColor: 'bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-700',
};

export const gradientBgColor = {
	bgColor: 'bg-gradient-to-br from-cyan-500 to-indigo-500',
};

export const gradientSpan = {
	color: 'text-transparent',
	bgClip: 'bg-clip-text',
	bgColor: 'bg-gradient-to-r from-cyan-500 to-indigo-500',
	leading: 'leading-relaxed',
};

export const headerBgColor = {
	bgColor:
		'bg-gradient-to-b from-white/100 via-white/25 to-white/100 dark:from-gray-900/75 dark:via-gray-900/25 dark:to-gray-900/100',
};

export const metaProps = {
	color: 'text-gray-500 dark:text-gray-400',
	display: 'flex-start',
	fontSize: 'text-sm',
	space: 'space-x-3',
	tracking: 'tracking-wide',
};

export const metaCardProps = {
	size: '',
	bgColor: '',
	color: 'text-gray-500 dark:text-gray-400 h:gray-500 dark:h:gray-300',
	fontSize: 'text-sm',
	spacing: 'mr-4',
	textDecoration: 'underline',
};

export const sectionLinkProps = {
	section: { display: 'flex-start', spacing: '' },
	header: { display: 'hidden' },
	// header: { spacing: '', flex: 'shrink-0', width: 'w-auto' },
	title: {
		size: 'sm',
		color: 'gray-500 dark:gray-400',
		fontFamily: 'font-accent',
		fontWeight: 'font-regular',
		tracking: 'tracking-widest',
		transform: 'uppercase',
	},
	body: { size: '', flex: 'grow', width: 'w-full' },
	list: {
		col: { sm: '6', lg: '2' },
		card: { spacing: '' },
		grid: { cols: '12' },
		header: { borderRadius: '', width: 'w-10' },
		title: { fontSize: 'text-base' },
		text: { display: 'hidden' },
	},
	footer: { display: 'hidden' },
};
