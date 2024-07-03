import {
	iCard,
	iCardActions,
	iCardBody,
	iCardFooter,
	iCardHeader,
	iCardIcon,
	iCardImg,
	iCardPretitle,
	iCardSubtitle,
	iCardText,
	iCardTitle,
} from 'interface/cards.types';
import { Font, H6, P } from 'interface/fonts';
import { Div, Img } from 'interface/html';
import { Icon } from 'interface/icons';
import { borderProps } from 'tailwind';

export const Card = ({ id, name = 'Card', className, children, ...tailwind }: iCard) => {
	const base = {
		animation: 'transition-all ease',
		border: 'border',
		...borderProps,
		borderRadius: 'rounded-md',
		color: 'gray-400',
		width: 'w-full',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const CardHeader = ({ id, name = 'CardHeader', className, children, ...tailwind }: iCardHeader) => {
	const base = {
		bgColor: 'bg-gray-100 dark:bg-gray-800',
		...borderProps,
		borderRadius: 'rounded-md',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const CardIcon = ({
	id,
	name = 'CardIcon',
	type = 'fad',
	icon = 'code',
	wrapper,
	className,
	...tailwind
}: iCardIcon) => {
	const props = { color: 'gray-500', fontSize: 'text-xl', ...tailwind, className, name };

	return <Icon type={type} icon={icon} {...props} />;
};

export const CardImg = ({ id, name = 'CardImg', src, alt, className, children, ...tailwind }: iCardImg) => {
	const base = { bgColor: 'bg-gray-100 dark:bg-gray-800', display: 'flex-middle', width: 'w-full' };
	const props = { ...base, ...tailwind, className, name };

	return <Img src={src} alt={alt} {...props} />;
};

export const CardBody = ({ id, name = 'CardBody', className, children, ...tailwind }: iCardBody) => {
	const base = { align: 'text-left', ...borderProps, space: 'space-y-1', spacing: 'p-4' };
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const CardPretitle = ({ id, name = 'CardPretitle', className, children, ...tailwind }: iCardPretitle) => {
	const base = {
		color: 'blue-500 dark:orange-500',
		fontFamily: 'font-accent',
		fontSize: 'text-sm',
		fontWeight: 'font-book',
		textTransform: 'capitalize',
		tracking: 'tracking-wider',
	};
	const props = { ...base, ...tailwind, className, name };

	return <H6 {...props}>{children}</H6>;
};

export const CardTitle = ({ id, name = 'CardTitle', size = 'h6', className, children, ...tailwind }: iCardTitle) => {
	const base = { display: 'flex-start', fontWeight: 'font-semibold', space: 'space-x-4' };
	const props = { ...base, ...tailwind, className, name };

	return (
		<Font size={size} {...props}>
			{children}
		</Font>
	);
};

export const CardSubtitle = ({ id, name = 'CardSubtitle', className, children, ...tailwind }: iCardSubtitle) => {
	const base = {
		color: 'gray-600 dark:gray-300',
		fontWeight: 'font-light',
		fontSize: 'text-base',
		space: 'space-x-4',
		tracking: 'tracking-normal',
	};
	const props = { ...base, ...tailwind, className, name };

	return <P {...props}>{children}</P>;
};

export const CardText = ({ id, name = 'CardText', className, children, ...tailwind }: iCardText) => {
	const base = { color: 'gray-600 dark:gray-300', fontSize: 'text-sm', fontWeight: 'font-light' };
	const props = { ...base, ...tailwind, className, name };

	return <P {...props}>{children}</P>;
};

export const CardFooter = ({ id, name = 'CardFooter', className, children, ...tailwind }: iCardFooter) => {
	const base = {
		border: 'border-t',
		...borderProps,
		color: 'gray-500',
		display: 'flex-between',
		fontSize: 'text-sm',
		space: 'space-x-4',
		spacing: 'p-4',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const CardActions = ({ id, name = 'CardActions', className, children, ...tailwind }: iCardActions) => {
	const base = { display: 'flex-start', flex: 'shrink-0', space: 'space-x-4' };
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

// Docs:
// https://tailwindui.com/interface/application-ui/lists/grid-lists
