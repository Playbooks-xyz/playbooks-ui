import { Font, P } from 'interface/fonts';
import { Div } from 'interface/html';
import { FarIcon } from 'interface/icons';
import * as styles from 'styles/alert-styles';
import { iAlert, iAlertActions, iAlertBody, iAlertIcon, iAlertText, iAlertTitle } from 'types/alert-types';

export const Alert = ({ id, name = 'Alert', className, children, ...tailwind }: iAlert) => {
	const base = styles.alert;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const AlertIcon = ({
	id,
	name = 'AlertIcon',
	icon = 'exclamation-circle',
	className,
	...tailwind
}: iAlertIcon) => {
	const base = styles.alertIcon;
	const props = { ...base, ...tailwind, className, name };

	return (
		<Div {...props}>
			<FarIcon icon={icon} />
		</Div>
	);
};

export const AlertBody = ({ id, name = 'AlertBody', className, children, ...tailwind }: iAlertBody) => {
	const base = styles.alertBody;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const AlertTitle = ({ id, name = 'AlertTitle', size = 'h6', className, children, ...tailwind }: iAlertTitle) => {
	const base = styles.alertTitle;
	const props = { ...base, ...tailwind, className, name };

	return (
		<Font size={size} {...props}>
			{children}
		</Font>
	);
};

export const AlertText = ({ id, name = 'AlertText', className, children, ...tailwind }: iAlertText) => {
	const base = styles.alertText;
	const props = { ...base, ...tailwind, className, name };

	return <P {...props}>{children}</P>;
};

export const AlertActions = ({ id, name = 'AlertActions', className, children, ...tailwind }: iAlertActions) => {
	const base = styles.alertActions;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

// Docs:
// https://tailwindui.com/interface/application-ui/feedback/alerts
