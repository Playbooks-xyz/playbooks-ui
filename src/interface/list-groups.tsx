import { Li, Ul } from 'interface/html';
import * as styles from 'styles/list-group-styles';
import * as types from 'types/list-group-types';

export const ListGroup = ({ id, name = 'ListGroup', className, children, ...tailwind }: types.iListGroup) => {
	const base = styles.listGroup;
	const props = { ...base, ...tailwind, className, name };

	return <Ul {...props}>{children}</Ul>;
};

export const ListItem = ({ id, name = 'ListItem', className, children, ...tailwind }: types.iListItem) => {
	const base = styles.listItem;
	const props = { ...base, ...tailwind, className, name };

	return <Li {...props}>{children}</Li>;
};

// Docs
// https://tailwindui.com/interface/application-ui/layout/list-containers
