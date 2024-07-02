import NHead from 'next/head';

import { iHead } from 'types/head.types';

export const Head = ({
	type = '',
	favicon = '',
	photo = '',
	title = '',
	description = '',
	author = '',
	siteUrl = '',
	allowRobots = true,
	children,
}: iHead) => {

	// Render
	return (
		<NHead>
			<title>{title}</title>
			<link rel='icon' href={favicon} />
			<meta name='description' content={description} />
			<meta name='author' content={author} />
			<link rel='canonical' href={siteUrl} />

			<meta name='og:image' content={photo} />
			<meta name='og:description' content={description} />

			<meta name='og:type' content={type} />
			<meta name='og:title' content={title} />
			<meta name='og:image:secure_url' content={photo} />
			<meta name='og:url' content={siteUrl} />

			<meta name='twitter:site' content={author} />
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={description} />
			<meta name='twitter:image' content={photo} />
			{!allowRobots && <meta name='robots' content='noindex' />}
			<meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
			{/* <meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';" /> */}
			{children}
		</NHead>
	);
};
