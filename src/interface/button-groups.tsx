import { Div } from 'interface/html';
import * as styles from 'styles/button-group-styles';
import * as types from 'types/button-group-types';

export const BtnGroup = ({ id, name = 'BtnGroup', className, children, ...tailwind }: types.ButtonGroupProps) => {
	const base = styles.btnGroup;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/application-ui/elements/button-groups
