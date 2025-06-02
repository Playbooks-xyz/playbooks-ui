import { borderProps } from 'theme/utils';

export const command = () => ({
	...borderProps,
	flex: 'shrink-0',
	fontFamily: 'font-secondary',
	fontSize: 'text-xs',
	fontWeight: 'font-medium',
	textTransform: 'capitalize',
	whitespace: 'whitespace-nowrap',
});
