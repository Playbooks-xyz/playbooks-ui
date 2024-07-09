export type TailwindType = {
	align?: string;
	aspect?: string;
	animation?: string;
	bgColor?: string;
	bgImage?: string;
	bgPosition?: string;
	bgOpacity?: string;
	bgSize?: string;
	border?: string;
	borderColor?: string;
	borderOpacity?: string;
	borderRadius?: string;
	borderStyle?: string;
	color?: string;
	cursor?: string;
	display?: string;
	divide?: string;
	duration?: string;
	fade?: string;
	fontFamily?: TailwindFontFamilyOpts;
	fontSize?: string;
	fontStyle?: string;
	fontWeight?: string;
	flex?: string;
	gap?: string;
	grid?: string;
	gridFlow?: string;
	height?: string;
	inset?: string;
	margin?: string;
	maxHeight?: string;
	minHeight?: string;
	order?: string;
	origin?: string;
	outline?: string;
	outlineColor?: string;
	outlineOffset?: string;
	overflow?: string;
	pad?: string;
	placeholderColor?: string;
	position?: string;
	ring?: string;
	ringColor?: string;
	rotate?: string;
	shadow?: string;
	size?: string;
	space?: string;
	spacing?: string;
	tracking?: string;
	transition?: string;
	transform?: string;
	weight?: TailwindFontWeightOpts;
	width?: string;
	zIndex?: string;
};

export type TailwindContainerType = {
	sm?: string;
	md?: string;
	lg?: string;
	xl?: string;
	xxl?: string;
	center?: boolean;
	gutters?: boolean;
};

export type TailwindGridType = {
	sm?: string;
	md?: string;
	lg?: string;
	xl?: string;
	xxl?: string;
	cols?: string;
	rows?: string;
	flow?: string;
	gap?: string;
	gapX?: string;
	gapY?: string;
};

export type TailwindColType = {
	sm?: string;
	md?: string;
	lg?: string;
	xl?: string;
	xxl?: string;
	span?: string;
	order?: string;
};

export type TailwindFontFamilyOpts = string | 'font-primary' | 'font-secondary' | 'font-accent';

export type TailwindFontSizeOpts =
	| string
	| 'text-xs'
	| 'text-sm'
	| 'text-base'
	| 'text-lg'
	| 'text-xl'
	| 'text-2xl'
	| 'text-3xl'
	| 'text-4xl'
	| 'text-5xl'
	| 'text-6xl';

export type TailwindFontWeightOpts =
	| string
	| 'font-light'
	| 'font-normal'
	| 'fontracking-normal'
	| 'font-medium'
	| 'font-semiBold'
	| 'font-bold';

export type TailwindPlacementOpts = string | 'left' | 'right';
