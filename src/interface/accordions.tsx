import { useEffect, useMemo, useRef, useState } from 'react';

import { Btn } from 'interface/buttons';
import { Font, P } from 'interface/fonts';
import { Div } from 'interface/html';
import * as styles from 'styles/accordion-styles';
import * as types from 'types/accordion-types';

export const Accordion = ({ id, name = 'Accordion', open, className, children, ...tailwind }: types.iAccordion) => {
	const base = styles.accordion;
	const props = { ...base, ...tailwind, className, name };

	return (
		<Div id={id} {...props}>
			{children}
		</Div>
	);
};

export const AccordionToggle = ({
	id,
	name = 'AccordionToggle',
	alt = 'toggle',
	variant = 'border',
	open,
	onClick,
	className,
	children,
	...tailwind
}: types.iAccordionToggle) => {
	const base = {
		...styles.accordionToggle,
		nextIcon: {
			...styles.accordionToggle.nextIcon,
			rotate: open ? 'rotate-180' : 'rotate-0',
		},
	};
	const props = { ...base, ...tailwind, children, className, name };

	return <Btn variant={variant} onClick={() => onClick(id)} {...props} />;
};

export const AccordionTitle = ({
	id,
	name = 'AccordionTitle',
	size = 'h6',
	className,
	children,
	...tailwind
}: types.iAccordionTitle) => {
	const base = styles.accordionTitle;
	const props = { ...base, ...tailwind, className, name };

	return (
		<Font size={size} {...props}>
			{children}
		</Font>
	);
};

export const AccordionBody = ({
	id,
	name = 'AccordionBody',
	open,
	animate,
	className,
	children,
	...tailwind
}: types.iAccordionBody) => {
	const wrapperBase = styles.accordionBodyWrapper;
	const base = styles.accordionBody;
	const props = { ...base, ...tailwind, className, name };
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
			<Div ref={ref} {...props}>
				{children}
			</Div>
		</Div>
	);
};

export const AccordionText = ({
	id,
	name = 'AccordionText',
	className,
	children,
	...tailwind
}: types.iAccordionText) => {
	const base = styles.accordionText;
	const props = { ...base, ...tailwind, className, name };

	return <P {...props}>{children}</P>;
};

// Docs
// https://tailwindui.com/interface/marketing/sections/faq-sections
