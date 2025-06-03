import { useEffect, useMemo, useRef, useState } from 'react';

import { useInterface } from 'contexts';
import { Btn } from 'interface/buttons';
import { Font, P } from 'interface/fonts';
import { Div } from 'interface/html';
import * as types from 'types/accordion-types';

export const Accordion = ({
	id,
	name = 'Accordion',
	open,
	tailwind,
	className,
	children,
	...props
}: types.AccordionProps) => {
	const { theme } = useInterface();
	const base = theme.accordion();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div id={id} {...computed}>
			{children}
		</Div>
	);
};

export const AccordionToggle = ({
	id,
	name = 'AccordionToggle',
	variant = 'accent',
	nextIcon = 'chevron-down',
	open,
	onClick,
	tailwind,
	className,
	children,
	...props
}: types.AccordionToggleProps) => {
	const { theme } = useInterface();
	const base = theme.accordionToggle({ open });
	const computed = { ...base, ...props, tailwind, children, className, name };

	return <Btn variant={variant} nextIcon={nextIcon} onClick={onClick} {...computed} />;
};

export const AccordionTitle = ({
	id,
	name = 'AccordionTitle',
	size = 'h6',
	tailwind,
	className,
	children,
	...props
}: types.AccordionTitleProps) => {
	const { theme } = useInterface();
	const base = theme.accordionTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const AccordionBody = ({
	id,
	name = 'AccordionBody',
	open,
	animate,
	tailwind,
	className,
	children,
	...props
}: types.AccordionBodyProps) => {
	const { theme } = useInterface();
	const wrapperBase = theme.accordionBodyWrapper();
	const base = theme.accordionBody({ open });
	const computed = { ...base, ...props, tailwind, className, name };
	const [height, setHeight] = useState(0);
	const ref = useRef(null);

	// Computed
	const style = useMemo(() => {
		if (animate) return { maxHeight: open ? ref.current?.offsetHeight + 'px' : '0px' };
		return { maxHeight: open ? null : '0px' };
	}, [height, open, ref?.current]);

	// Hooks
	useEffect(() => {
		const observer = new ResizeObserver(entries => {
			const element = entries[0];
			setHeight(element.contentRect.height);
		});
		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, [children]);

	// Render
	return (
		<Div style={style} {...wrapperBase}>
			<Div ref={ref} {...computed}>
				{children}
			</Div>
		</Div>
	);
};

export const AccordionText = ({
	id,
	name = 'AccordionText',
	tailwind,
	className,
	children,
	...props
}: types.AccordionTextProps) => {
	const { theme } = useInterface();
	const base = theme.accordionText();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

// Docs
// https://tailwindui.com/interface/marketing/sections/faq-sections
