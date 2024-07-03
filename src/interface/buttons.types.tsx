import { HtmlType } from 'types';

export type iBtn = HtmlType & {
	id?: string;
	type?: 'submit' | 'button' | 'reset';
	active?: boolean;
	disabled?: boolean;
	prevIcon?: string;
	icon?: string;
	nextIcon?: string;
	taskRunning?: boolean;
	onClick?: () => void;
};
