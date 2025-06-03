import { HtmlProps } from 'types';

export type ModalWrapperProps = HtmlProps & {
	open?: boolean;
	onClose?: () => any;
	tailwind?: any;
};

export type ModalProps = HtmlProps & {
	open?: boolean;
	onClose?: () => any;
	tailwind?: any;
};

export type ModalBackdropProps = HtmlProps & {
	open: boolean;
	onClose?: () => any;
};

export type ModalHeaderProps = HtmlProps & {
	onClose?: () => any;
};

export type ModalTitleProps = HtmlProps;

export type ModalSubtitleProps = HtmlProps;

export type ModalBodyProps = HtmlProps;

export type ModalFooterProps = HtmlProps;
