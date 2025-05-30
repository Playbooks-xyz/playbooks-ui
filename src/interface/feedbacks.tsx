import { Div } from 'interface/html';
import { Font, P, Small } from 'interface/fonts';
import { Icon } from 'interface/icons';
import * as styles from 'styles/feedback-styles';
import * as types from 'types/feedback-types';
import { tailwindClassBuilder } from 'utils';

export const Feedback = ({ id, name = 'Feedback', className, children, ...tailwind }: types.FeedbackProps) => {
	const base = styles.feedback;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const FeedbackHeader = ({
	id,
	name = 'FeedbackHeader',
	className,
	children,
	...tailwind
}: types.FeedbackHeaderProps) => {
	const base = styles.feedbackHeader;
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
}: types.FeedbackIconProps) => {
	const base = { ...styles.feedbackIcon, fontSize };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return <Icon type={type} icon={icon} className={classes} />;
};

export const FeedbackBody = ({
	id,
	name = 'FeedbackBody',
	className,
	children,
	...tailwind
}: types.FeedbackBodyProps) => {
	const base = styles.feedbackBody;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const FeedbackPretitle = ({
	id,
	name = 'SectionPretitle',
	className,
	children,
	...tailwind
}: types.FeedbackTitleProps) => {
	const base = styles.feedbackPretitle;
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
}: types.FeedbackTitleProps) => {
	const base = styles.feedbackTitle;
	const props = { ...base, ...tailwind, className, name };

	return (
		<Font size={size} {...props}>
			{children}
		</Font>
	);
};

export const FeedbackText = ({
	id,
	name = 'FeedbackText',
	className,
	children,
	...tailwind
}: types.FeedbackTextProps) => {
	const base = styles.feedbackText;
	const props = { ...base, ...tailwind, className, name };

	return <P {...props}>{children}</P>;
};

export const FeedbackActions = ({
	id,
	name = 'FeedbackActions',
	className,
	children,
	...tailwind
}: types.FeedbackActionsProps) => {
	const base = styles.feedbackActions;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/application-ui/feedback/empty-states
