import { useRef, useState } from 'react';
import { usePopper } from 'react-popper';

import { Fade } from 'components/fade-wrapper';
import { useInterface } from 'contexts';
import { useKeyPress, useMouseUp } from 'hooks';
import { AccentBtn, Btn } from 'interface/buttons';
import { H6, P } from 'interface/fonts';
import { Div, Li, Ul } from 'interface/html';
import { AccentLink } from 'interface/links';
import * as types from 'types/drop-types';

export const Drop = ({
	id,
	ref,
	name = 'Drop',
	open,
	onClose,
	tailwind,
	className,
	children,
	...props
}: types.DropProps) => {
	const { theme } = useInterface();
	const base = theme.drop();
	const computed = { ...base, ...props, tailwind, className, name };

	// Hooks
	useKeyPress(onKeyDown, [open]);
	useMouseUp(onMouseUp, [open]);

	// Functions
	function onKeyDown(e) {
		if (!open) return;
		if (e.target.dataset.name === 'FormInput') return;
		if (e.keyCode === 27) onClose();
	}

	function onMouseUp(e) {
		if (!open) return;
		if (ref?.current?.contains(e.target)) return;
		onClose();
	}

	// Render
	return (
		<Div id={id} ref={ref} {...computed}>
			{children}
		</Div>
	);
};

export const DropToggle = ({
	id,
	name = 'DropToggle',
	alt,
	variant = 'accent',
	nextIcon = 'chevron-down',
	onClick,
	tailwind,
	className,
	children,
	...props
}: types.DropToggleProps) => {
	const { theme } = useInterface();
	const base = theme.dropToggle();
	const computed = { ...base, ...props, tailwind, children, className, name };

	return <Btn id={id} alt={alt} variant={variant} nextIcon={nextIcon} onClick={() => onClick(id)} {...computed} />;
};

export const DropMenu = ({
	id,
	ref,
	name = 'DropMenu',
	open,
	placement = 'bottom-start',
	options,
	tailwind,
	className,
	style,
	children,
	...props
}: types.DropMenuProps) => {
	const { theme } = useInterface();
	const [show, setShow] = useState(false);
	const base = theme.dropMenu({ open: show });
	const computed = { ...base, ...props, tailwind, className, name };
	const [dropRef, setDropRef] = useState(null);
	const nodeRef = useRef(null);
	const { styles: popperStyles, attributes } = usePopper(ref?.current, dropRef, {
		placement: placement,
		strategy: 'fixed',
		...options,
	});

	// Methods
	const onEnter = () => setShow(true);
	const onExit = () => setShow(false);

	// Render
	return (
		<Fade ref={nodeRef} show={open} timeout={200} onEnter={onEnter} onExit={onExit}>
			<div
				id={id}
				ref={setDropRef}
				role='menu'
				aria-orientation='vertical'
				aria-labelledby='menu-button'
				tabIndex={-1}
				className='w-auto z-10'
				style={popperStyles.popper}
				{...attributes.popper}>
				<Div ref={nodeRef} {...computed} style={style}>
					{children}
				</Div>
			</div>
		</Fade>
	);
};

export const DropHeader = ({
	id,
	name = 'DropHeader',
	tailwind,
	className,
	children,
	...props
}: types.DropHeaderProps) => {
	const { theme } = useInterface();
	const base = theme.dropHeader();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const DropTitle = ({
	id,
	name = 'DropTitle',
	tailwind,
	className,
	children,
	...props
}: types.DropTitleProps) => {
	const { theme } = useInterface();
	const base = theme.dropTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return <H6 {...computed}>{children}</H6>;
};

export const DropSubtitle = ({
	id,
	name = 'DropSubtitle',
	tailwind,
	className,
	children,
	...props
}: types.DropSubtitleProps) => {
	const { theme } = useInterface();
	const base = theme.dropSubtitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const DropList = ({ id, name = 'DropList', tailwind, className, children, ...props }: types.DropListProps) => {
	const { theme } = useInterface();
	const base = theme.dropList();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Ul {...computed}>{children}</Ul>;
};

export const DropItem = ({ id, name = 'DropItem', tailwind, className, children, ...props }: types.DropItemProps) => {
	const { theme } = useInterface();
	const base = theme.dropItem();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Li {...computed}>{children}</Li>;
};

export const DropBtn = ({ id, name = 'DropBtn', tailwind, className, children, ...props }: types.DropBtnProps) => {
	const { theme } = useInterface();
	const base = theme.dropBtn();
	const computed = { ...base, ...props, tailwind, children, className, name };

	return <AccentBtn {...computed} />;
};

export const DropLink = ({ id, name = 'DropLink', tailwind, className, children, ...props }: types.DropLinkProps) => {
	const { theme } = useInterface();
	const base = theme.dropLink();
	const computed = { ...base, ...props, tailwind, children, className, name };

	return <AccentLink {...computed} />;
};

// Docs
// https://tailwindui.com/interface/application-ui/elements/drops
