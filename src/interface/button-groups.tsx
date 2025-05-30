import { Div } from 'interface/html';
import * as styles from 'styles';
import { iButtonGroup } from 'types/button-group-types';

export const BtnGroup = ({ id, name = 'BtnGroup', className, children, ...tailwind }: iButtonGroup) => {
	const base = styles.btnGroup;
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/application-ui/elements/button-groups
