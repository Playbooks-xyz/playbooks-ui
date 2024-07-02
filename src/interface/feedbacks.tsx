import {
	iFeedback,
	iFeedbackActions,
	iFeedbackBody,
	iFeedbackHeader,
	iFeedbackIcon,
	iFeedbackText,
	iFeedbackTitle,
} from 'types/feedbacks.types';
import { Font, P, Small } from 'interface/fonts';
import { Div } from 'interface/html';
import { Icon } from 'interface/icons';
import { borderProps, tailwindClassBuilder } from 'tailwind';

export const Feedback = ({ id, name = 'Feedback', className, children, ...tailwind }: iFeedback) => {
	const base = {
		align: 'text-left',
		bgColor: 'bg-gray-50 dark:bg-gray-800',
		border: '',
		...borderProps,
		borderRadius: 'rounded-md',
		spacing: 'p-8',
		// width: 'w-full',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const FeedbackHeader = ({
	id,
	name = 'FeedbackHeader',
	icon,
	iconSize,
	className,
	children,
	...tailwind
}: iFeedbackHeader) => {
	const base = { spacing: 'p-4' };
	const props = { ...base, ...tailwind, className, name };

	return (
		<Div {...props}>
			{icon && <FeedbackIcon icon={icon} fontSize={iconSize} />}
			{children}
		</Div>
	);
};

export const FeedbackIcon = ({
	id,
	name = 'FeedbackIcon',
	type = 'fad',
	icon,
	fontSize = 'text-3xl',
	className,
	...tailwind
}: iFeedbackIcon) => {
	const base = { color: 'gray-500', fontSize };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return <Icon type={type} icon={icon} className={classes} />;
};

export const FeedbackBody = ({ id, name = 'FeedbackBody', className, children, ...tailwind }: iFeedbackBody) => {
	const base = { space: 'space-y-2', spacing: 'p-4' };
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const FeedbackPretitle = ({
	id,
	name = 'SectionPretitle',
	className,
	children,
	...tailwind
}: iFeedbackTitle) => {
	const base = {
		color: 'gray-500',
		fontFamily: 'font-accent',
		fontSize: 'text-sm',
		fontWeight: 'font-medium',
		textTransform: 'uppercase',
		tracking: 'tracking-wider',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Small {...props}>{children}</Small>;
};

export const FeedbackTitle = ({
	id,
	name = 'FeedbackTitle',
	size = 'h5',
	className,
	children,
	...tailwind
}: iFeedbackTitle) => {
	const base = {
		color: 'gray-800 dark:white',
		fontWeight: 'font-semibold',
		textTransform: 'capitalize',
		tracking: 'tracking-wide',
	};
	const props = { ...base, ...tailwind, className, name };

	return (
		<Font size={size} {...props}>
			{children}
		</Font>
	);
};

export const FeedbackText = ({ id, name = 'FeedbackText', className, children, ...tailwind }: iFeedbackText) => {
	const base = { fontFamily: 'font-secondary' };
	const props = { ...base, ...tailwind, className, name };

	return <P {...props}>{children}</P>;
};

export const FeedbackActions = ({
	id,
	name = 'FeedbackActions',
	className,
	children,
	...tailwind
}: iFeedbackActions) => {
	const base = { display: 'flex-start', flex: 'shrink-0', space: 'space-x-4', spacing: 'p-4' };
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/application-ui/feedback/empty-states
