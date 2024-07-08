import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { Div } from 'interface/html';

export type iInterface = {
	ref: any;
	seo: any;
	createPortal: any;
	toggleScroll: any;
};

export const InterfaceContext = React.createContext<iInterface>(null);

export const InterfaceProvider = ({ meta, children }: { meta: any; children: any }) => {
	const [seo, setSeo] = useState(meta);
	const ref = useRef(null);

	// Hooks
	useEffect(() => {
		setSeo(meta);
	}, [meta]);

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
		<InterfaceContext.Provider value={{ ref, seo, createPortal, toggleScroll }}>
			{children}
			<Div id='interface_portal' ref={ref} />
		</InterfaceContext.Provider>
	);
};

export const useInterface = () => {
	return React.useContext(InterfaceContext);
};

// Docs
// https://css-tricks.com/prevent-page-scrolling-when-a-modal-is-open/
