import { useInterface } from 'contexts';
import { Font, P } from 'interface/fonts';
import { Div } from 'interface/html';
import { Icon } from 'interface/icons';
import * as types from 'types/alert-types';

export const Alert = ({
	id,
	type = 'info',
	name = 'Alert',
	tailwind,
	className,
	children,
	...props
}: types.AlertProps) => {
	const { theme } = useInterface();
	const base = theme.alert({ type });
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const AlertIcon = ({
	id,
	type = 'fad',
	name = 'AlertIcon',
	icon = 'exclamation-circle',
	tailwind,
	className,
	...props
}: types.AlertIconProps) => {
	const { theme } = useInterface();
	const base = theme.alertIcon();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Icon type={type} icon={icon} {...computed} />;
};

export const AlertBody = ({
	id,
	name = 'AlertBody',
	tailwind,
	className,
	children,
	...props
}: types.AlertBodyProps) => {
	const { theme } = useInterface();
	const base = theme.alertBody();
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
	const { theme } = useInterface();
	const base = theme.alertTitle();
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
	const { theme } = useInterface();
	const base = theme.alertText();
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
	const { theme } = useInterface();
	const base = theme.alertActions();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs:
// https://tailwindui.com/interface/application-ui/feedback/alerts
