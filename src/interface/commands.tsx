import { useMemo } from 'react';

import { iCommand } from 'interface/commands.types';
import { Span } from 'interface/html';
import keycode from 'keycode';
import { borderProps, computeBadgeSize } from 'utils';

export const Command = ({
	id,
	name = 'CMD',
	size = 'sm',
	variant = '',
	keys = [],
	className,
	children,
	...tailwind
}: iCommand) => {
	const base = {
		size: computeBadgeSize(size),
		...borderProps,
		borderRadius: 'rounded-md',
		color: 'text-gray-600 dark:text-gray-200',
		flex: 'shrink-0',
		fontFamily: 'font-accent',
		fontSize: 'text-xs',
		fontWeight: 'font-medium',
		space: 'space-x-2',
		textTransform: 'capitalize',
		whitespace: 'whitespace-nowrap',
	};
	const props = { ...base, ...tailwind, className, name };

	// Computed
	const computedKeys = useMemo(() => {
		return keys.map(code => {
			const keyCode = keycode.codes[code];
			return String.fromCharCode(keyCode);
		});
	}, [keys]);

	// Render
	return (
		<Span {...props}>
			{computedKeys.join('')}
			{children}
		</Span>
	);
};

// Docs:
// https://www.npmjs.com/package/keycode
