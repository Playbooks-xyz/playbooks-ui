import { useRef, useState } from 'react';
import { usePopper } from 'react-popper';

import { Fade } from 'components/fade-wrapper';
import { useKeyPress, useMouseUp } from 'hooks';
import { AccentBtn, Btn } from 'interface/buttons';
import { H6, P } from 'interface/fonts';
import { Div, Li, Ul } from 'interface/html';
import { AccentLink } from 'interface/links';
import * as styles from 'styles/drop-styles';
import * as types from 'types/drop-types';
import { tailwindClassBuilder } from 'utils';

export const Drop = ({ id, ref, name = 'Drop', open, onClose, className, children, ...tailwind }: types.DropProps) => {
	const base = styles.drop;
	const props = { ...base, ...tailwind, className, name };
	const internalRef = useRef(null);

	// Computed
	const combinedRef = element => {
		internalRef.current = element;
		if (ref) typeof ref === 'function' ? ref(element) : (ref.current = element);
	};

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
		if (internalRef?.current?.contains(e.target)) return;
		onClose();
	}

	// Render
	return (
		<Div id={id} ref={combinedRef} {...props}>
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
	className,
	children,
	...tailwind
}: types.DropToggleProps) => {
	const base = styles.dropToggle;
	const props = { ...base, ...tailwind, children, className, name };

	return <Btn id={id} alt={alt} variant={variant} nextIcon={nextIcon} onClick={() => onClick(id)} {...props} />;
};

export const DropMenu = ({
	id,
	ref,
	name = 'DropMenu',
	open,
	placement,
	options,
	className,
	style,
	children,
	...tailwind
}: types.DropMenuProps) => {
	const [dropRef, setDropRef] = useState(null);
	const base = styles.dropMenu;
	const [fade, setFade] = useState('hidden');
	const classes = tailwindClassBuilder({ ...base, ...tailwind, fade, className });
	const fadeRef = useRef(null);

	const { styles: popperStyles, attributes } = usePopper(ref, dropRef, {
		placement: placement || ('bottom-start' as any),
		strategy: 'fixed',
		...options,
	});

	// Render
	return (
		<Fade
			ref={fadeRef}
			show={open}
			timeout={100}
			onEnter={() => setFade(`opacity-0 scale-90 translate-y-4`)}
			onEntered={() => setFade('opacity-100 scale-100 translate-y-0')}
			onExiting={() => setFade('opacity-0 scale-90 translate-y-4')}
			onExited={() => setFade('hidden')}>
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
				<Div className={classes} style={style}>
					{children}
				</Div>
			</div>
		</Fade>
	);
};

export const DropHeader = ({ id, name = 'DropHeader', className, children, ...tailwind }: types.DropHeaderProps) => {
	const base = styles.dropHeader;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const DropTitle = ({ id, name = 'DropTitle', className, children, ...tailwind }: types.DropTitleProps) => {
	const base = styles.dropTitle;
	const props = { ...base, ...tailwind, className, name };

	return <H6 {...props}>{children}</H6>;
};

export const DropSubtitle = ({
	id,
	name = 'DropSubtitle',
	className,
	children,
	...tailwind
}: types.DropSubtitleProps) => {
	const base = styles.dropSubtitle;
	const props = { ...base, ...tailwind, className, name };

	return <P {...props}>{children}</P>;
};

export const DropList = ({ id, name = 'DropList', className, children, ...tailwind }: types.DropListProps) => {
	const base = styles.dropList;
	const props = { ...base, ...tailwind, className, name };

	return <Ul {...props}>{children}</Ul>;
};

export const DropItem = ({ id, name = 'DropItem', className, children, ...tailwind }: types.DropItemProps) => {
	const base = styles.dropItem;
	const props = { ...base, ...tailwind, className, name };

	return <Li {...props}>{children}</Li>;
};

export const DropBtn = ({ id, name = 'DropBtn', className, children, ...tailwind }: types.DropBtnProps) => {
	const base = styles.dropBtn;
	const props = { ...base, ...tailwind, children, className, name };

	return <AccentBtn {...props} />;
};

export const DropLink = ({ id, name = 'DropLink', className, children, ...tailwind }: types.DropLinkProps) => {
	const base = styles.dropLink;
	const props = { ...base, ...tailwind, children, className, name };

	return <AccentLink {...props} />;
};

// Docs
// https://tailwindui.com/interface/application-ui/elements/drops
