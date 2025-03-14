import { useRouter } from 'next/router';

import { useInterface } from 'contexts';
import { Head } from 'interface/head';
import { Div } from 'interface/html';
import { iRoute } from 'interface/routes.types';
import { capitalize } from 'utils/transforms';

export const Route = ({ id, name = 'Route', seo, className, children, ...tailwind }: iRoute) => {
	const base = { bgColor: 'bg-white dark:bg-gray-900' };
	const props = { ...base, ...tailwind, className, name };
	const { meta } = useInterface();
	const router = useRouter();

	// Computed
	const paths = router.asPath.split('?')[0].split('/');
	const formattedPaths = paths.map(path =>
		path
			.split('-')
			.map(v => capitalize(v))
			.join(' '),
	);
	const computedTitle = meta.title + formattedPaths.join(' | ');
	const computedUrl = meta.baseUrl + router.asPath.split('?')[0];
	const computedProps = { ...meta, ...seo };

	// Render
	return (
		<Div {...props}>
			<Head title={seo.title || computedTitle} url={computedUrl} {...computedProps} />
			{children}
		</Div>
	);
};
