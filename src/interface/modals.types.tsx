import { HtmlType } from 'types';

export type iModal = HtmlType & {
	open?: string;
	onClose?: () => void;
};

export type iModalBackdrop = HtmlType;

export type iModalHeader = HtmlType & {
	onClose?: () => void;
};

export type iModalTitle = HtmlType;

export type iModalSubtitle = HtmlType;

export type iModalBody = HtmlType;

export type iModalFooter = HtmlType;
