import React, { createRef } from 'react';
import { createPortal } from 'react-dom';

import * as defaultTheme from '@playbooks/theme';
import { Div } from 'interface/html';

export type InterfaceProps = {
	ref?: any;
	meta: any;
	theme?: any;
	createPortal: any;
	toggleScroll: any;
};

export const InterfaceContext = React.createContext<InterfaceProps>(null);

export const InterfaceProvider = ({ meta, theme, children }: { meta: any; theme?: any; children: any }) => {
	const computedTheme = theme ? theme : defaultTheme || null;
	const ref = createRef();

	// Methods
	const toggleScroll = open => {
		if (typeof window !== 'undefined') {
			const body = document.querySelector('body');
			if (open) {
				body.classList?.add('overflow-hidden');
			} else {
				body.classList?.remove('overflow-hidden');
			}
		}
	};

	// Render
	return (
		<InterfaceContext.Provider value={{ ref, meta, theme: computedTheme, createPortal, toggleScroll }}>
			{children}
			<Div id='interface_portal' name='InterfacePortal' ref={ref} />
		</InterfaceContext.Provider>
	);
};

export const useInterface = () => {
	return React.useContext(InterfaceContext);
};

// Docs
// https://css-tricks.com/prevent-page-scrolling-when-a-modal-is-open/
