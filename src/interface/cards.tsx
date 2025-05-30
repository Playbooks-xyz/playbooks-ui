import { Font, P } from 'interface/fonts';
import { Div, Img } from 'interface/html';
import { Icon } from 'interface/icons';
import * as styles from 'styles';
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
} from 'types/card-types';

export const Card = ({ id, name = 'Card', className, children, ...tailwind }: iCard) => {
	const base = styles.cardBase;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const CardHeader = ({ id, name = 'CardHeader', className, children, ...tailwind }: iCardHeader) => {
	const base = styles.cardHeaderBase;
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
	const props = { ...styles.cardIconBase, ...tailwind, className, name };

	return <Icon type={type} icon={icon} {...props} />;
};

export const CardImg = ({
	id,
	name = 'CardImg',
	alt = 'thumbnail',
	src,
	className,
	children,
	...tailwind
}: iCardImg) => {
	const base = styles.cardImgBase;
	const props = { ...base, ...tailwind, className, name };

	return <Img src={src} alt={alt} {...props} />;
};

export const CardBody = ({ id, name = 'CardBody', className, children, ...tailwind }: iCardBody) => {
	const base = styles.cardBodyBase;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const CardPretitle = ({ id, name = 'CardPretitle', className, children, ...tailwind }: iCardPretitle) => {
	const base = styles.cardPretitleBase;
	const props = { ...base, ...tailwind, className, name };

	return <P {...props}>{children}</P>;
};

export const CardTitle = ({ id, name = 'CardTitle', size = 'h6', className, children, ...tailwind }: iCardTitle) => {
	const base = styles.cardTitleBase;
	const props = { ...base, ...tailwind, className, name };

	return (
		<Font size={size} {...props}>
			{children}
		</Font>
	);
};

export const CardSubtitle = ({ id, name = 'CardSubtitle', className, children, ...tailwind }: iCardSubtitle) => {
	const base = styles.cardSubtitleBase;
	const props = { ...base, ...tailwind, className, name };

	return <P {...props}>{children}</P>;
};

export const CardText = ({ id, name = 'CardText', className, children, ...tailwind }: iCardText) => {
	const base = styles.cardTextBase;
	const props = { ...base, ...tailwind, className, name };

	return <P {...props}>{children}</P>;
};

export const CardFooter = ({ id, name = 'CardFooter', className, children, ...tailwind }: iCardFooter) => {
	const base = styles.cardFooterBase;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const CardActions = ({ id, name = 'CardActions', className, children, ...tailwind }: iCardActions) => {
	const base = styles.cardActionsBase;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

// Docs:
// https://tailwindui.com/interface/application-ui/lists/grid-lists
