import { Font, P } from 'interface/fonts';
import { Div } from 'interface/html';
import { FarIcon } from 'interface/icons';
import * as styles from 'styles/alert-styles';
import * as types from 'types/alert-types';

export const Alert = ({ id, name = 'Alert', tailwind, className, children, ...props }: types.AlertProps) => {
	const base = styles.alert;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const AlertIcon = ({
	id,
	name = 'AlertIcon',
	icon = 'exclamation-circle',
	tailwind,
	className,
	...props
}: types.AlertIconProps) => {
	const base = styles.alertIcon;
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div {...computed}>
			<FarIcon icon={icon} />
		</Div>
	);
};

export const AlertBody = ({
	id,
	name = 'AlertBody',
	tailwind,
	className,
	children,
	...props
}: types.AlertBodyProps) => {
	const base = styles.alertBody;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const AlertTitle = ({
	id,
	name = 'AlertTitle',
	size = 'h6',
	tailwind,
	className,
	children,
	...props
}: types.AlertTitleProps) => {
	const base = styles.alertTitle;
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const AlertText = ({
	id,
	name = 'AlertText',
	tailwind,
	className,
	children,
	...props
}: types.AlertTextProps) => {
	const base = styles.alertText;
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const AlertActions = ({
	id,
	name = 'AlertActions',
	tailwind,
	className,
	children,
	...props
}: types.AlertActionsProps) => {
	const base = styles.alertActions;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs:
// https://tailwindui.com/interface/application-ui/feedback/alerts
