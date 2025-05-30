import { Font, P, Small } from 'interface/fonts';
import { Div } from 'interface/html';
import { Icon } from 'interface/icons';
import * as styles from 'styles';
import {
	iFeedback,
	iFeedbackActions,
	iFeedbackBody,
	iFeedbackHeader,
	iFeedbackIcon,
	iFeedbackText,
	iFeedbackTitle,
} from 'types/feedback-types';
import { borderProps, tailwindClassBuilder } from 'utils';

export const Feedback = ({ id, name = 'Feedback', className, children, ...tailwind }: iFeedback) => {
	const base = styles.feedbackBase;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const FeedbackHeader = ({ id, name = 'FeedbackHeader', className, children, ...tailwind }: iFeedbackHeader) => {
	const base = styles.feedbackHeaderBase;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
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
	const base = { ...styles.feedbackIconBase, fontSize };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return <Icon type={type} icon={icon} className={classes} />;
};

export const FeedbackBody = ({ id, name = 'FeedbackBody', className, children, ...tailwind }: iFeedbackBody) => {
	const base = styles.feedbackBodyBase;
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
	const base = styles.feedbackPretitleBase;
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
	const base = styles.feedbackTitleBase;
	const props = { ...base, ...tailwind, className, name };

	return (
		<Font size={size} {...props}>
			{children}
		</Font>
	);
};

export const FeedbackText = ({ id, name = 'FeedbackText', className, children, ...tailwind }: iFeedbackText) => {
	const base = styles.feedbackTextBase;
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
	const base = styles.feedbackActionsBase;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/application-ui/feedback/empty-states
