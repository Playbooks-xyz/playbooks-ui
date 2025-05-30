import { HtmlProps } from 'types';

export type iModalWrapper = HtmlProps & {
	open?: boolean;
	onClose?: () => any;
	tailwind?: any;
};

export type iModal = HtmlProps & {
	open?: boolean;
	onClose?: () => any;
	tailwind?: any;
};

export type iModalBackdrop = HtmlProps & {
	open: boolean;
	onClose?: () => any;
	tailwind?: any;
};

export type iModalHeader = HtmlProps & {
	onClose?: () => any;
};

export type iModalTitle = HtmlProps;

export type iModalSubtitle = HtmlProps;

export type iModalBody = HtmlProps;

export type iModalFooter = HtmlProps;
