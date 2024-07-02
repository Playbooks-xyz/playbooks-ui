import { Font, H5, P, Small } from 'interface/fonts';
import { Div, Span } from 'interface/html';
import { iPageLoader, iSectionLoader } from 'types/loaders.types';
import { Oval } from 'interface/spinners';

export const ModalLoader = ({
	id,
	name = 'ModalLoader',
	title = 'Processing Order',
	message = 'Give us a second...',
	className,
	children,
	...tailwind
}: iPageLoader) => {
	const base = { align: 'text-center', spacing: 'mx-auto' };
	const props = { ...base, ...tailwind, className, name };

	return (
		<Div {...props}>
			<Span>
				<Oval size='w-14 h-14' stroke='stroke-gray-600 dark:stroke-gray-300' className='mb-4' />
				<Div spacing='space-y-1' className='text-center'>
					{title && <H5 fontWeight='font-bold'>{title}</H5>}
					{message && <Small className='tracking-wide gray-600'>{message}</Small>}
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
	tailwind,
}: iPageLoader) => {
	const base = {
		bgColor: 'bg-white dark:bg-gray-900',
		color: 'gray-700 dark:gray-300',
		display: 'flex-middle',
		position: 'absolute inset-0',
		spacing: 'h-full w-full',
		zIndex: 'z-50',
	};
	const props = { ...base, ...tailwind?.div, className, name };

	return (
		<Div {...props}>
			<Span display='flex-start' space='space-x-8' {...tailwind?.span}>
				<Oval size='w-12 h-12' stroke='stroke-gray-600 dark:stroke-gray-300' {...tailwind?.spinner} />
				<Div align='text-left' {...tailwind?.body}>
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
}: iSectionLoader) => {
	const base = { align: 'text-center', spacing: 'mx-auto' };
	const props = { ...base, ...tailwind, className, name };

	return (
		<Div {...props}>
			<Oval size='w-12 h-12' stroke='stroke-gray-600 dark:stroke-gray-300' className='mb-4' />
			<Div spacing='space-y-1' className='text-center'>
				{title && <H5 fontWeight='font-bold'>{title}</H5>}
				{message && <Small className='tracking-wide gray-600'>{message}</Small>}
				{children}
			</Div>
		</Div>
	);
};

// Docs
//
