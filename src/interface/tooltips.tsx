import { useRef, useState } from 'react';
import { usePopper } from 'react-popper';

import { Fade } from 'components/fade-wrapper';
import { Div, Span } from 'interface/html';
import * as styles from 'styles';
import { iTooltip, iTooltipArrow, iTooltipBody, iTooltipInner } from 'types/tooltip-types';
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
		...styles.tooltipBase,
		className,
		...tailwind?.span,
	};
	const [fade, setFade] = useState('hidden');
	const [refElement, setRefElement] = useState(null);
	const [popElement, setPopElement] = useState(null);
	const [arrowElement, setArrowElement] = useState(null);
	const fadeRef = useRef(null);
	const { styles: popperStyles, attributes } = usePopper(refElement, popElement, {
		placement,
		strategy: 'fixed',
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
			id={id}
			ref={setRefElement}
			name={name}
			onClick={onShow}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			{...base}>
			{children}
			<Fade
				ref={fadeRef}
				show={open}
				timeout={100}
				onEntering={() => setFade(`opacity-0 ${computeTooltipAnimation(placement)} scale-90`)}
				onEntered={() => setFade('opacity-100 scale-100')}
				onExiting={() => setFade(`opacity-0 ${computeTooltipAnimation(placement)} scale-90`)}
				onExited={() => setFade('hidden')}>
				<Div ref={setPopElement} zIndex='z-10' style={popperStyles.popper} {...attributes.popper}>
					<TooltipBody
						setArrowElement={setArrowElement}
						fade={fade}
						html={html}
						className={className}
						styles={popperStyles}
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
	styles: popperStyles,
	tailwind,
}: iTooltipBody) => {
	const base = styles.tooltipBodyBase;
	const props = { ...base, ...tailwind, className, name };

	return (
		<Div {...props}>
			<TooltipArrow
				setArrowElement={setArrowElement}
				style={{ ...popperStyles.popper, ...popperStyles.arrow }}
				tailwind={tailwind?.arrow}
			/>
			<TooltipInner tailwind={tailwind?.inner}>{html}</TooltipInner>
		</Div>
	);
};

export const TooltipInner = ({ id, name = 'TooltipInner', className, children, tailwind }: iTooltipInner) => {
	const base = styles.tooltipInnerBase;
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
	const base = styles.tooltipArrowBase;
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
