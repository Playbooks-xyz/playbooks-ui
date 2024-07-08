import { iButtonGroup } from 'interface/button-groups.types';
import { Div } from 'interface/html';
import { borderProps } from 'tailwind';

export const BtnGroup = ({ id, name = 'BtnGroup', className, children, ...tailwind }: iButtonGroup) => {
	const base = {
		display: 'inline-flex',
		border: 'border',
		...borderProps,
		borderRadius: 'rounded-md',
		overflow: 'overflow-hidden',
		divide: 'divide-x',
		divideColor: 'divide-gray-400',
		divideOpacity: 'divide-opacity-25',
		flex: 'shrink-0',
		space: 'space-x-0',
		width: 'width-inherit',
	};
	const props = { ...base, ...tailwind, className, name };

	return <Div {...props}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/application-ui/elements/button-groups
