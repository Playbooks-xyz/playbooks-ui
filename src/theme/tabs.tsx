export const tabWrapper = () => ({
	width: 'w-full',
});

export const tabSelect = () => ({
	border: 'border-1',
	borderRadius: '',
	sm: 'sm:hidden',
});

export const tabs = () => ({
	display: 'flex-start',
});

export const tab = ({ active }) => ({
	bgColor: 'h:bg-gray-100 dark:h:bg-gray-700',
	border: 'border-b-4',
	borderColor: 'border-transparent h:border-gray-300 dark:h:border-gray-600',
	color: 'text-gray-700 dark:text-gray-200',
	borderRadius: 'rounded-none',
	grid: 'hidden sm:block',
	zIndex: 'z-10',
	...(active && {
		borderColor: 'border-blue-500 dark:border-cyan-500',
		color: 'text-blue-500 dark:text-cyan-500',
	}),
});

export const tabPanes = () => ({});

export const tabPane = ({ active }) => ({
	display: active ? 'block' : 'hidden',
});
