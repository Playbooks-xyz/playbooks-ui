import { H5, P } from 'interface/fonts';
import { Div } from 'interface/html';
import { FadIcon } from 'interface/icons';
import * as styles from 'styles';
import { iAlert, iAlertActions, iAlertBody, iAlertIcon, iAlertText, iAlertTitle } from 'types/alert-types';

export const Alert = ({ id, name = 'Alert', show = true, className, children, ...tailwind }: iAlert) => {
	const base = styles.alertBase;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const AlertIcon = ({ id, name = 'AlertIcon', icon = 'question-circle', className, ...tailwind }: iAlertIcon) => {
	const base = styles.alertIconBase;
	const props = { ...base, ...tailwind, className, name };

	return (
		<Div {...props}>
			<FadIcon icon={icon} />
		</Div>
	);
};

export const AlertBody = ({ id, name = 'AlertBody', className, children, ...tailwind }: iAlertBody) => {
	const base = styles.alertBodyBase;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const AlertTitle = ({ id, name = 'AlertTitle', className, children, ...tailwind }: iAlertTitle) => {
	const base = styles.alertTitleBase;
	const props = { ...base, ...tailwind, className, name };

	return <H5 {...props}>{children}</H5>;
};

export const AlertText = ({ id, name = 'AlertText', className, children, ...tailwind }: iAlertText) => {
	const base = styles.alertTextBase;
	const props = { ...base, ...tailwind, className, name };

	return <P {...props}>{children}</P>;
};

export const AlertActions = ({ id, name = 'AlertActions', className, children, ...tailwind }: iAlertActions) => {
	const base = styles.alertActionsBase;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

// Docs:
// https://tailwindui.com/interface/application-ui/feedback/alerts
