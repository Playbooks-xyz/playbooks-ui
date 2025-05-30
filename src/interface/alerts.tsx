import { H5, P } from 'interface/fonts';
import { Div } from 'interface/html';
import { FadIcon } from 'interface/icons';
import { iAlert, iAlertActions, iAlertBody, iAlertIcon, iAlertText, iAlertTitle } from 'types/alert-types';

export const Alert = ({ id, name = 'Alert', show = true, className, children, ...tailwind }: iAlert) => {
	const base = {
		bgColor: 'bg-gray-100 dark:bg-gray-800',
		bgOpacity: 'bg-opacity-25',
		border: 'border-l-8',
		borderColor: 'border-cyan-500',
		borderRadius: 'rounded-md',
		display: 'flex-start-top',
		overflow: 'overflow-hidden',
		space: 'space-x-8',
		spacing: 'p-4',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const AlertIcon = ({ id, name = 'AlertIcon', icon = 'question-circle', className, ...tailwind }: iAlertIcon) => {
	const base = { color: 'green-400', fontSize: 'text-2xl' };
	const props = { ...base, ...tailwind, className, name };

	return (
		<Div {...props}>
			<FadIcon icon={icon} />
		</Div>
	);
};

export const AlertBody = ({ id, name = 'AlertBody', className, children, ...tailwind }: iAlertBody) => {
	const base = { space: 'space-y-1' };
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const AlertTitle = ({ id, name = 'AlertTitle', className, children, ...tailwind }: iAlertTitle) => {
	const base = { fontWeight: 'font-bold' };
	const props = { ...base, ...tailwind, className, name };

	return <H5 {...props}>{children}</H5>;
};

export const AlertText = ({ id, name = 'AlertText', className, children, ...tailwind }: iAlertText) => {
	const base = { fontSize: 'text-sm' };
	const props = { ...base, ...tailwind, className, name };

	return <P {...props}>{children}</P>;
};

export const AlertActions = ({ id, name = 'AlertActions', className, children, ...tailwind }: iAlertActions) => {
	const base = { display: 'flex-start', flex: 'shrink-0', space: 'space-x-4', spacing: 'py-4' };
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

// Docs:
// https://tailwindui.com/interface/application-ui/feedback/alerts
