import NHead from 'next/head';

import { useInterface } from 'contexts';
import { iHead } from 'interface/head.types';

export const Head = ({ title, photo, description, children }: iHead) => {
	const interfaceContext = useInterface();

	// Computed
	const computedMeta = {
		...interfaceContext?.seo,
		title,
		photo,
		description,
	};

	// Render
	return (
		<NHead>
			<title>{computedMeta.title}</title>
			<link rel='icon' href={computedMeta.favicon} />
			<meta name='description' content={computedMeta.description} />
			<meta name='author' content={computedMeta.author} />
			<link rel='canonical' href={computedMeta.siteUrl} />

			<meta name='og:image' content={computedMeta.photo} />
			<meta name='og:description' content={computedMeta.description} />

			<meta name='og:type' content={computedMeta.type} />
			<meta name='og:title' content={computedMeta.title} />
			<meta name='og:image:secure_url' content={computedMeta.photo} />
			<meta name='og:url' content={computedMeta.siteUrl} />

			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:image' content={computedMeta.photo} />
			<meta name='twitter:title' content={computedMeta.title} />
			<meta name='twitter:description' content={computedMeta.description} />
			<meta name='twitter:site' content={computedMeta.author} />

			<meta name='robots' content='noindex' />
			<meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
			{/* <meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';" /> */}
			{children}
		</NHead>
	);
};
