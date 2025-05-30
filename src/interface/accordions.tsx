import { useEffect, useMemo, useRef, useState } from 'react';

import { Btn } from 'interface/buttons';
import { Font, P } from 'interface/fonts';
import { Div } from 'interface/html';
import * as styles from 'styles/accordion-styles';
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
	const base = styles.accordion;
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
	variant = 'border',
	open,
	onClick,
	tailwind,
	className,
	children,
	...props
}: types.AccordionToggleProps) => {
	const base = {
		...styles.accordionToggle,
		nextIcon: {
			...styles.accordionToggle.nextIcon,
			rotate: open ? 'rotate-180' : 'rotate-0',
		},
	};
	const computed = { ...base, ...props, tailwind, children, className, name };

	return <Btn variant={variant} onClick={() => onClick(id)} {...computed} />;
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
	const base = styles.accordionTitle;
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
	const wrapperBase = styles.accordionBodyWrapper;
	const base = styles.accordionBody;
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
	const base = styles.accordionText;
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

// Docs
// https://tailwindui.com/interface/marketing/sections/faq-sections
