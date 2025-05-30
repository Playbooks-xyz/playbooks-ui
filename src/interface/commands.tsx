import { useMemo } from 'react';

import { Span } from 'interface/html';
import * as styles from 'styles/command-styles';
import * as types from 'types/command-types';

export const Command = ({ id, name = 'CMD', keys = [], className, children, ...tailwind }: types.iCommand) => {
	const base = styles.command;
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
