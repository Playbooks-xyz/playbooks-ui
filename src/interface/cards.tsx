import { useInterface } from 'contexts';
import { Font, P } from 'interface/fonts';
import { Div, Img } from 'interface/html';
import { Icon } from 'interface/icons';
import * as types from 'types/card-types';

export const Card = ({ name = 'Card', tailwind, className, children, ...props }: types.CardProps) => {
	const { theme } = useInterface();
	const base = theme.card();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const CardHeader = ({ name = 'CardHeader', tailwind, className, children, ...props }: types.CardHeaderProps) => {
	const { theme } = useInterface();
	const base = theme.cardHeader();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const CardIcon = ({
	name = 'CardIcon',
	type = 'fad',
	icon = 'code',
	tailwind,
	className,
	...props
}: types.CardIconProps) => {
	const { theme } = useInterface();
	const base = theme.cardIcon();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Icon type={type} icon={icon} {...computed} />;
};

export const CardImg = ({
	name = 'CardImg',
	alt = 'thumbnail',
	tailwind,
	className,
	children,
	...props
}: types.CardImgProps) => {
	const { theme } = useInterface();
	const base = theme.cardImg();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Img alt={alt} {...computed} />;
};

export const CardBody = ({ name = 'CardBody', tailwind, className, children, ...props }: types.CardBodyProps) => {
	const { theme } = useInterface();
	const base = theme.cardBody();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const CardPretitle = ({
	name = 'CardPretitle',
	tailwind,
	className,
	children,
	...props
}: types.CardPretitleProps) => {
	const { theme } = useInterface();
	const base = theme.cardPretitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const CardTitle = ({
	name = 'CardTitle',
	size = 'h6',
	tailwind,
	className,
	children,
	...props
}: types.CardTitleProps) => {
	const { theme } = useInterface();
	const base = theme.cardTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const CardSubtitle = ({
	name = 'CardSubtitle',
	tailwind,
	className,
	children,
	...props
}: types.CardSubtitleProps) => {
	const { theme } = useInterface();
	const base = theme.cardSubtitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const CardText = ({ name = 'CardText', tailwind, className, children, ...props }: types.CardTextProps) => {
	const { theme } = useInterface();
	const base = theme.cardText();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const CardFooter = ({ name = 'CardFooter', tailwind, className, children, ...props }: types.CardFooterProps) => {
	const { theme } = useInterface();
	const base = theme.cardFooter();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const CardActions = ({
	name = 'CardActions',
	tailwind,
	className,
	children,
	...props
}: types.CardActionsProps) => {
	const { theme } = useInterface();
	const base = theme.cardActions();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs:
// https://tailwindui.com/interface/application-ui/lists/grid-lists
