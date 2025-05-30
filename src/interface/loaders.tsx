import { Font, H5, P, Small } from 'interface/fonts';
import { Div, Span } from 'interface/html';
import { Oval } from 'interface/spinners';
import * as styles from 'styles/loader-styles';
import * as types from 'types/loader-types';

export const ModalLoader = ({
	id,
	name = 'ModalLoader',
	title = 'Processing Order',
	message = 'Give us a second...',
	className,
	children,
	...tailwind
}: types.iPageLoader) => {
	const base = styles.modalLoader;
	const props = { ...base, ...tailwind, className, name };

	return (
		<Div {...props}>
			<Span>
				<Oval size='w-14 h-14' className='stroke-gray-600 dark:stroke-gray-300  mb-4' />
				<Div spacing='space-y-1' className='text-center'>
					{title && <H5 fontWeight='font-bold'>{title}</H5>}
					{message && <Small className='tracking-wide text-gray-600'>{message}</Small>}
					{children}
				</Div>
			</Span>
		</Div>
	);
};

export const PageLoader = ({
	id,
	name = 'PageLoader',
	title = 'Hang Tight',
	message = 'Loading dashboard...',
	className,
	children,
	...tailwind
}: types.iPageLoader) => {
	const base = styles.pageLoader;
	const props = { ...base, ...tailwind, className, name };

	return (
		<Div {...props}>
			<Span display='flex-start' space='space-x-8'>
				<Oval size='w-12 h-12' className='stroke-gray-600 dark:stroke-gray-300' />
				<Div align='text-left'>
					{title && (
						<Font size='h5' fontWeight='font-bold'>
							{title}
						</Font>
					)}
					{message && <P>{message}</P>}
					{children}
				</Div>
			</Span>
		</Div>
	);
};

export const SectionLoader = ({
	id,
	name = 'SectionLoader',
	title = 'Loading',
	message = 'Give us a second...',
	className,
	children,
	...tailwind
}: types.iSectionLoader) => {
	const base = styles.sectionLoader;
	const props = { ...base, ...tailwind, className, name };

	return (
		<Div {...props}>
			<Oval size='w-12 h-12' className='stroke-gray-600 dark:stroke-gray-300 mb-4' />
			<Div spacing='space-y-1' className='text-center'>
				{title && <H5 fontWeight='font-bold'>{title}</H5>}
				{message && <Small className='tracking-wide text-gray-600'>{message}</Small>}
				{children}
			</Div>
		</Div>
	);
};

// Docs
//
