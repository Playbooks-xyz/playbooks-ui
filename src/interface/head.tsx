import NHead from 'next/head';

import { useInterface } from 'contexts';
import { iHead } from 'interface/head.types';

export const Head = (props: iHead) => {
	const interfaceContext = useInterface();

	// Computed
	const computedMeta = { ...interfaceContext?.seo, ...props };

	// Render
	return (
		<NHead>
			<title>{computedMeta.title}</title>
			<link rel='icon' href={computedMeta.favicon} />
			<link rel='canonical' href={computedMeta.baseUrl + computedMeta.path} />
			<meta name='description' content={computedMeta.description} />
			<meta name='author' content={computedMeta.author} />

			<meta name='og:image' content={computedMeta.photo} />
			<meta name='og:description' content={computedMeta.description} />

			<meta name='og:type' content={computedMeta.type} />
			<meta name='og:title' content={computedMeta.title} />
			<meta name='og:image:secure_url' content={computedMeta.photo} />
			<meta name='og:url' content={computedMeta.baseUrl + computedMeta.path} />

			<meta name='twitter:card' content={computedMeta.card} />
			<meta name='twitter:image' content={computedMeta.photo} />
			<meta name='twitter:title' content={computedMeta.title} />
			<meta name='twitter:description' content={computedMeta.description} />
			<meta name='twitter:site' content={computedMeta.author} />

			<meta name='robots' content={computedMeta.robots} />
			<meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
			{props.children}
		</NHead>
	);
};

// Docs
// https://www.advancedwebranking.com/blog/meta-tags-important-in-seo
// https://ogp.me/#types
// https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
