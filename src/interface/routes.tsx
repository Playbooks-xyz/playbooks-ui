import { useRouter } from 'next/router';

import { useInterface } from 'contexts';
import { Head } from 'interface/head';
import { Div } from 'interface/html';
import * as styles from 'styles';
import { iRoute } from 'types/route-types';
import { capitalize } from 'utils/transforms';

export const Route = ({ id, name = 'Route', seo, style, className, children, ...tailwind }: iRoute) => {
	const base = styles.routeBase;
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
	const computedTitle = meta?.title + formattedPaths.join(' | ');
	const computedUrl = meta?.baseUrl + router.asPath.split('?')[0];
	const computedProps = { ...meta, ...seo };

	// Render
	return (
		<Div style={style} {...props}>
			<Head {...computedProps} title={seo?.title || computedTitle} url={computedUrl} />
			{children}
		</Div>
	);
};
