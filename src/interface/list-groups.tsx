import { Li, Ul } from 'interface/html';
import { iListGroup, iListItem } from 'types/list-group-types';

export const ListGroup = ({ id, name = 'ListGroup', className, children, ...tailwind }: iListGroup) => {
	const base = {
		display: 'flex-column',
		divide: 'divide-y-2',
		divideColor: 'divide-gray-200',
		divideStyle: 'divide-dashed',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Ul {...props}>{children}</Ul>;
};

export const ListItem = ({ id, name = 'ListItem', className, children, ...tailwind }: iListItem) => {
	const base = {};
	const props = { ...base, ...tailwind, className, name };

	return <Li {...props}>{children}</Li>;
};

// Docs
// https://tailwindui.com/interface/application-ui/layout/list-containers
