import { Font, P } from 'interface/fonts';
import { Div, Img } from 'interface/html';
import { Icon } from 'interface/icons';
import * as theme from 'theme';
import * as types from 'types/card-types';

export const Card = ({ id, name = 'Card', tailwind, className, children, ...props }: types.CardProps) => {
	const base = theme.card();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const CardHeader = ({
	id,
	name = 'CardHeader',
	tailwind,
	className,
	children,
	...props
}: types.CardHeaderProps) => {
	const base = theme.cardHeader();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const CardIcon = ({
	id,
	name = 'CardIcon',
	type = 'fad',
	icon = 'code',
	wrapper,
	tailwind,
	className,
	...props
}: types.CardIconProps) => {
	const computed = { ...theme.cardIcon(), ...props, tailwind, className, name };

	return <Icon type={type} icon={icon} {...computed} />;
};

export const CardImg = ({
	id,
	name = 'CardImg',
	alt = 'thumbnail',
	src,
	tailwind,
	className,
	children,
	...props
}: types.CardImgProps) => {
	const base = theme.cardImg();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Img src={src} alt={alt} {...computed} />;
};

export const CardBody = ({ id, name = 'CardBody', tailwind, className, children, ...props }: types.CardBodyProps) => {
	const base = theme.cardBody();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const CardPretitle = ({
	id,
	name = 'CardPretitle',
	tailwind,
	className,
	children,
	...props
}: types.CardPretitleProps) => {
	const base = theme.cardPretitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const CardTitle = ({
	id,
	name = 'CardTitle',
	size = 'h6',
	tailwind,
	className,
	children,
	...props
}: types.CardTitleProps) => {
	const base = theme.cardTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const CardSubtitle = ({
	id,
	name = 'CardSubtitle',
	tailwind,
	className,
	children,
	...props
}: types.CardSubtitleProps) => {
	const base = theme.cardSubtitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const CardText = ({ id, name = 'CardText', tailwind, className, children, ...props }: types.CardTextProps) => {
	const base = theme.cardText();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const CardFooter = ({
	id,
	name = 'CardFooter',
	tailwind,
	className,
	children,
	...props
}: types.CardFooterProps) => {
	const base = theme.cardFooter();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const CardActions = ({
	id,
	name = 'CardActions',
	tailwind,
	className,
	children,
	...props
}: types.CardActionsProps) => {
	const base = theme.cardActions();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs:
// https://tailwindui.com/interface/application-ui/lists/grid-lists
