import { HtmlType } from 'types';

export type iModalWrapper = HtmlType & {
	open?: boolean;
	onClose?: ()=> any;
	tailwind?: any;
};

export type iModal = HtmlType & {
	open?: boolean;
	onClose?: ()=> any;
	tailwind?: any;
};

export type iModalBackdrop = HtmlType & {
	open: boolean;
	onClose?: ()=> any;
	tailwind?: any;
};

export type iModalHeader = HtmlType & {
	onClose?: ()=> any;
};

export type iModalTitle = HtmlType;

export type iModalSubtitle = HtmlType;

export type iModalBody = HtmlType;

export type iModalFooter = HtmlType;
