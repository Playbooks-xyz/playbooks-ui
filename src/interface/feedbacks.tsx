import { Font, P, Small } from 'interface/fonts';
import { Div } from 'interface/html';
import { Icon } from 'interface/icons';
import * as theme from 'theme';
import * as types from 'types/feedback-types';
import { classBuilder } from 'utils';

export const Feedback = ({ id, name = 'Feedback', tailwind, className, children, ...props }: types.FeedbackProps) => {
	const base = theme.feedback();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const FeedbackHeader = ({
	id,
	name = 'FeedbackHeader',
	tailwind,
	className,
	children,
	...props
}: types.FeedbackHeaderProps) => {
	const base = theme.feedbackHeader();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const FeedbackIcon = ({
	id,
	name = 'FeedbackIcon',
	type = 'fad',
	icon,
	tailwind,
	className,
	...props
}: types.FeedbackIconProps) => {
	const base = { ...theme.feedbackIcon() };
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return <Icon type={type} icon={icon} className={computed} />;
};

export const FeedbackBody = ({
	id,
	name = 'FeedbackBody',
	tailwind,
	className,
	children,
	...props
}: types.FeedbackBodyProps) => {
	const base = theme.feedbackBody();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const FeedbackPretitle = ({
	id,
	name = 'SectionPretitle',
	tailwind,
	className,
	children,
	...props
}: types.FeedbackTitleProps) => {
	const base = theme.feedbackPretitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Small {...computed}>{children}</Small>;
};

export const FeedbackTitle = ({
	id,
	name = 'FeedbackTitle',
	size = 'h5',
	tailwind,
	className,
	children,
	...props
}: types.FeedbackTitleProps) => {
	const base = theme.feedbackTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const FeedbackText = ({
	id,
	name = 'FeedbackText',
	tailwind,
	className,
	children,
	...props
}: types.FeedbackTextProps) => {
	const base = theme.feedbackText();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const FeedbackActions = ({
	id,
	name = 'FeedbackActions',
	tailwind,
	className,
	children,
	...props
}: types.FeedbackActionsProps) => {
	const base = theme.feedbackActions();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/application-ui/feedback/empty-states
