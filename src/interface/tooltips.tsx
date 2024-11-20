import { useState } from 'react';
import { usePopper } from 'react-popper';

import { Fade } from 'components/animation-wrapper';
import { Div, Span } from 'interface/html';
import { iTooltip, iTooltipArrow, iTooltipBody, iTooltipInner } from 'interface/tooltips.types';
import { computeTooltipAnimation } from 'utils';

export const Tooltip = ({
	id,
	name = 'Tooltip',
	open,
	placement = 'right',
	html,
	onClick,
	onHover,
	className,
	children,
	tailwind,
}: iTooltip) => {
	const base = {
		cursor: 'cursor-pointer',
		duration: 'duration-100',
		transition: 'transition-all ease',
		className,
		...tailwind?.span,
	};
	const [fade, setFade] = useState('hidden');
	const [refElement, setRefElement] = useState(null);
	const [popElement, setPopElement] = useState(null);
	const [arrowElement, setArrowElement] = useState(null);
	const { styles, attributes } = usePopper(refElement, popElement, {
		placement,
		modifiers: [
			{ name: 'arrow', options: { element: arrowElement } },
			{ name: 'offset', options: { offset: [0, 5] } },
		],
	});

	// Methods
	const onShow = e => {
		if (!onClick) e.preventDefault();
		return onClick ? onClick() : null;
	};

	const onMouseEnter = () => {
		return !open && onHover ? onHover() : null;
	};

	const onMouseLeave = () => {
		return open && onHover ? onHover() : null;
	};

	// Render
	return (
		<Span
			ref={setRefElement}
			name={name}
			onClick={onShow as any}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			{...base}>
			{children}
			<Fade
				show={open}
				timeout={100}
				onEntering={() => setFade(`opacity-0 ${computeTooltipAnimation(placement)} scale-90`)}
				onEntered={() => setFade('opacity-100 scale-100')}
				onExiting={() => setFade(`opacity-0 ${computeTooltipAnimation(placement)} scale-90`)}
				onExited={() => setFade('hidden')}>
				<Div ref={setPopElement} zIndex='z-10' style={styles.popper} {...attributes.popper}>
					<TooltipBody
						setArrowElement={setArrowElement}
						fade={fade}
						html={html}
						className={className}
						styles={styles}
						tailwind={tailwind?.tooltip}
					/>
				</Div>
			</Fade>
		</Span>
	);
};

export const TooltipBody = ({
	id,
	name = 'TooltipBody',
	setArrowElement,
	html,
	className,
	styles,
	tailwind,
}: iTooltipBody) => {
	const base = { animation: 'transition ease', zIndex: 'z-10' };
	const props = { ...base, ...tailwind, className, name };

	return (
		<Div {...props}>
			<TooltipArrow
				setArrowElement={setArrowElement}
				style={{ ...styles.popper, ...styles.arrow }}
				tailwind={tailwind?.arrow}
			/>
			<TooltipInner tailwind={tailwind?.inner}>{html}</TooltipInner>
		</Div>
	);
};

export const TooltipInner = ({ id, name = 'TooltipInner', className, children, tailwind }: iTooltipInner) => {
	const base = {
		bgColor: 'bg-gray-800',
		borderRadius: 'rounded-md',
		color: 'white',
		fontSize: 'text-sm',
		spacing: 'px-4 py-3 m-1',
		width: 'w-auto',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const TooltipArrow = ({
	id,
	name = 'TooltipArrow',
	setArrowElement,
	className,
	style,
	tailwind,
}: iTooltipArrow) => {
	const base = {
		bgColor: 'bg-gray-800',
		borderRadius: 'rounded-sm',
		rotate: 'rotate-45',
		size: 'h-4 w-4',
	};
	const props = { ...base, ...tailwind, className, name };

	return (
		<Div ref={setArrowElement} style={style}>
			<Div {...props} />
		</Div>
	);
};

// Docs
// https://www.npmjs.com/package/react-popper
// https://popper.js.team/docs/v2/modifiers/offset/
// https://popper.js.team/docs/v2/constructors/#options
// https://popper.js.team/docs/v2/modifiers/
