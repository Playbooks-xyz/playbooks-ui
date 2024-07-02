import React, { createRef } from 'react';
import { createPortal } from 'react-dom';

import { Div } from 'html';

type iInterface = {
	ref: any;
	createPortal: any;
	toggleScroll: any;
};

const InterfaceContext = React.createContext<iInterface>(null);

const InterfaceProvider = ({ children }) => {
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
		<InterfaceContext.Provider value={{ ref, createPortal, toggleScroll }}>
			{children}
			<Div id='i_portal' ref={ref} />
		</InterfaceContext.Provider>
	);
};

const useInterface = () => {
	return React.useContext(InterfaceContext);
};

export { InterfaceProvider, useInterface };

// Docs
// https://css-tricks.com/prevent-page-scrolling-when-a-modal-is-open/
