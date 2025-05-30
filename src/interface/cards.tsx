import { Font, P } from 'interface/fonts';
import { Div, Img } from 'interface/html';
import { Icon } from 'interface/icons';
import * as styles from 'styles/card-styles';
import * as types from 'types/card-types';

export const Card = ({ id, name = 'Card', className, children, ...tailwind }: types.CardProps) => {
	const base = styles.card;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const CardHeader = ({ id, name = 'CardHeader', className, children, ...tailwind }: types.CardHeaderProps) => {
	const base = styles.cardHeader;
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
}: types.CardIconProps) => {
	const props = { ...styles.cardIcon, ...tailwind, className, name };

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
}: types.CardImgProps) => {
	const base = styles.cardImg;
	const props = { ...base, ...tailwind, className, name };

	return <Img src={src} alt={alt} {...props} />;
};

export const CardBody = ({ id, name = 'CardBody', className, children, ...tailwind }: types.CardBodyProps) => {
	const base = styles.cardBody;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const CardPretitle = ({
	id,
	name = 'CardPretitle',
	className,
	children,
	...tailwind
}: types.CardPretitleProps) => {
	const base = styles.cardPretitle;
	const props = { ...base, ...tailwind, className, name };

	return <P {...props}>{children}</P>;
};

export const CardTitle = ({
	id,
	name = 'CardTitle',
	size = 'h6',
	className,
	children,
	...tailwind
}: types.CardTitleProps) => {
	const base = styles.cardTitle;
	const props = { ...base, ...tailwind, className, name };

	return (
		<Font size={size} {...props}>
			{children}
		</Font>
	);
};

export const CardSubtitle = ({
	id,
	name = 'CardSubtitle',
	className,
	children,
	...tailwind
}: types.CardSubtitleProps) => {
	const base = styles.cardSubtitle;
	const props = { ...base, ...tailwind, className, name };

	return <P {...props}>{children}</P>;
};

export const CardText = ({ id, name = 'CardText', className, children, ...tailwind }: types.CardTextProps) => {
	const base = styles.cardText;
	const props = { ...base, ...tailwind, className, name };

	return <P {...props}>{children}</P>;
};

export const CardFooter = ({ id, name = 'CardFooter', className, children, ...tailwind }: types.CardFooterProps) => {
	const base = styles.cardFooter;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

export const CardActions = ({ id, name = 'CardActions', className, children, ...tailwind }: types.CardActionsProps) => {
	const base = styles.cardActions;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

// Docs:
// https://tailwindui.com/interface/application-ui/lists/grid-lists
