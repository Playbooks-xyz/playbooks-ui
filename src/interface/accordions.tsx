import { useRef } from 'react';

import {
	iAccordion,
	iAccordionBody,
	iAccordionIcon,
	iAccordionText,
	iAccordionTitle,
	iAccordionToggle,
} from 'interface/accordions.types';
import { BtnWrapper } from 'interface/buttons';
import { Font, P } from 'interface/fonts';
import { Div, Span } from 'interface/html';
import { FarIcon } from 'interface/icons';
import { borderProps } from 'tailwind';

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
		color: 'gray-500',
		display: 'flex-between',
		fontFamily: 'font-accent',
		fontSize: 'text-sm',
		fontWeight: 'font-medium',
		hover: 'h:bg-gray-100 dark:h:bg-gray-800',
		spacing: 'py-4',
		width: 'w-full',
	};
	const props = { ...base, ...tailwind, className, name };

	return (
		<BtnWrapper id={id} onClick={() => onClick(id)} {...props}>
			<Span className='flex-start' space='space-x-4' width='w-full'>
				{children}
			</Span>
			<AccordionIcon open={open} />
		</BtnWrapper>
	);
};

export const AccordionIcon = ({
	id,
	name = 'AccordionIcon',
	icon = 'chevron-down',
	open,
	onClick,
	className,
	children,
	...tailwind
}: iAccordionIcon) => {
	const base = {
		rotate: open ? 'rotate-180' : 'rotate-0',
		borderRadius: 'rounded-md',
		display: 'flex-middle',
		transition: 'transition-all ease',
	};
	const props = { ...base, ...tailwind, className, name };

	return (
		<Span {...props}>
			<FarIcon icon={icon} className='gray-700 dark:gray-300' />
		</Span>
	);
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
		overflow: 'o-hidden',
		origin: 'origin-top',
		ease: 'ease-out',
		transition: 'transition-all',
	};
	const base = { ...borderProps };
	const props = { ...base, ...tailwind, className, name };
	const ref = useRef(null);

	// Computed
	const style = animate
		? {
				maxHeight: open ? ref.current?.offsetHeight + 'px' : '0px',
		  }
		: {
				maxHeight: open ? null : '0px',
		  };

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
