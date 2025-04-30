import { useEffect, useMemo, useRef, useState } from 'react';

import {
	iAccordion,
	iAccordionBody,
	iAccordionText,
	iAccordionTitle,
	iAccordionToggle,
} from 'interface/accordions.types';
import { Btn } from 'interface/buttons';
import { Font, P } from 'interface/fonts';
import { Div } from 'interface/html';
import { borderProps } from 'utils';

export const Accordion = ({ id, name = 'Accordion', open, className, children, ...tailwind }: iAccordion) => {
	const base = {
		border: '',
		...borderProps,
		transition: 'transition-all',
		origin: 'origin-top',
	};
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
}: iAccordionToggle) => {
	const base = {
		animation: 'transition-all ease',
		border: '',
		...borderProps,
		borderRadius: 'rounded-md',
		color: 'text-gray-500',
		display: 'flex-between',
		fontFamily: 'font-accent',
		fontSize: 'text-sm',
		fontWeight: 'font-medium',
		hover: 'h:bg-gray-100 dark:h:bg-gray-800',
		nextIcon: { icon: 'chevron-down', rotate: open ? 'rotate-180' : 'rotate-0', transition: 'transition-all ease' },
		spacing: 'py-4',
		span: { display: 'flex-start', flex: 'grow', width: 'w-full' },
		width: 'w-full',
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
}: iAccordionTitle) => {
	const base = { display: 'flex-start', fontWeight: 'font-medium' };
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
}: iAccordionBody) => {
	const wrapperBase = {
		overflow: 'overflow-hidden',
		origin: 'origin-top',
		ease: 'ease-out',
		transition: 'transition-all',
	};
	const base = { ...borderProps };
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

export const AccordionText = ({ id, name = 'AccordionText', className, children, ...tailwind }: iAccordionText) => {
	const base = { fontSize: 'text-sm', fontWeight: 'font-light' };
	const props = { ...base, ...tailwind, className, name };

	return <P {...props}>{children}</P>;
};

// Docs
// https://tailwindui.com/interface/marketing/sections/faq-sections
