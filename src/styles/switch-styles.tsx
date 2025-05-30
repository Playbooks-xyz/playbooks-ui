export const switchGroupBase = {
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

export const switchBackdropBase = {
	bgColor: 'bg-gray-200',
	transition: 'transition',
	pointer: ' pointer-events-none',
	size: 'w-10 h-2',
	borderRadius: 'rounded-full',
};

export const switchInnerBase = {
	position: 'absolute',
	transition: 'transition',
	duration: 'duration-200',
	pointer: ' pointer-events-none',
	size: 'w-10 h-3',
	spacing: 'mx-auto',
	borderRadius: 'rounded-full',
};

export const switchToggleBase = {
	inset: 'left-0',
	position: 'absolute',
	display: 'inline-block',
	border: '',
	transition: 'transition',
	transform: 'transform',
	duration: 'duration-200',
	pointer: ' pointer-events-none',
	size: 'w-6 h-6',
	borderRadius: 'rounded-full',
};

export const switchLabelBase = {
	display: 'inline-block',
	fontSize: 'font-base',
	fontWeight: 'font-medium',
	color: 'text-gray-700 dark:text-gray-200',
};