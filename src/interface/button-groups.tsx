import { Div } from 'interface/html';
import * as styles from 'styles/button-group-styles';
import * as types from 'types/button-group-types';

export const BtnGroup = ({
	id,
	name = 'BtnGroup',
	tailwind,
	className,
	children,
	...props
}: types.ButtonGroupProps) => {
	const base = styles.btnGroup;
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/application-ui/elements/button-groups
