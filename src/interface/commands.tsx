import { useMemo } from 'react';

import { Span } from 'interface/html';
import { iCommand } from 'types/command-types';
import { borderProps } from 'utils';

export const Command = ({ id, name = 'CMD', keys = [], className, children, ...tailwind }: iCommand) => {
	const base = {
		...borderProps,
		flex: 'shrink-0',
		fontFamily: 'font-secondary',
		fontSize: 'text-xs',
		fontWeight: 'font-medium',
		textTransform: 'capitalize',
		whitespace: 'whitespace-nowrap',
	};
	const props = { ...base, ...tailwind, className, name };

	// Computed
	const computedKeys = useMemo(() => {
		const formattedKeys = [];
		keys.map(code => {
			switch (code) {
				case 'command':
				case 'Command':
					return formattedKeys.push('⌘');
				case 'control':
				case 'Control':
					return formattedKeys.push('^');
				case 'enter':
				case 'Enter':
					return formattedKeys.push('↵');
				case 'option':
				case 'Option':
					return formattedKeys.push('⌥');
				case 'shift':
				case 'Shift':
					return formattedKeys.push('⇧');
			}
		});
		return formattedKeys;
	}, [keys]);

	// Render
	return (
		<Span {...props}>
			{computedKeys.join('')}
			{children}
		</Span>
	);
};
