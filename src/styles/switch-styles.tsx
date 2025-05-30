export const switchGroup = {
	display: 'flex-between',
	space: 'space-x-4',
};

export const switchBase = {
	display: 'inline-flex items-center justify-center shrink-0',
	position: 'relative',
	overflow: 'overflow-hidden',
	size: 'w-12 h-10',
	cursor: 'cursor-pointer',
	ring: 'ring-sky',
};

export const switchBackdrop = {
	bgColor: 'bg-gray-200',
	animation: 'transition-all',
	pointer: ' pointer-events-none',
	size: 'w-10 h-2',
	borderRadius: 'rounded-full',
};

export const switchInner = {
	animation: 'transition-all',
	position: 'absolute',
	duration: 'duration-200',
	pointer: ' pointer-events-none',
	size: 'w-10 h-3',
	spacing: 'mx-auto',
	borderRadius: 'rounded-full',
};

export const switchToggle = {
	animation: 'transition-all',
	inset: 'left-0',
	position: 'absolute',
	display: 'inline-block',
	border: '',
	duration: 'duration-200',
	pointer: ' pointer-events-none',
	size: 'w-6 h-6',
	borderRadius: 'rounded-full',
};

export const switchLabel = {
	display: 'inline-block',
	fontSize: 'font-base',
	fontWeight: 'font-medium',
	color: 'text-gray-700 dark:text-gray-200',
};
