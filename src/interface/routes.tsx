import { useRouter } from 'next/router';

import { useInterface } from 'contexts';
import { Head } from 'interface/head';
import { Div } from 'interface/html';
import * as styles from 'styles/route-styles';
import * as types from 'types/route-types';
import { capitalize } from 'utils/transforms';

export const Route = ({ id, name = 'Route', seo, tailwind, className, children, ...props }: types.RouteProps) => {
	const base = styles.route;
	const computedProps = { ...base, ...props, tailwind, className, name };
	const interfaceContext = useInterface();
	const router = useRouter();

	// Computed
	const paths = router.asPath.split('?')[0].split('/');
	const formattedPaths = paths.map(path =>
		path
			.split('-')
			.map(v => capitalize(v))
			.join(' '),
	);
	const computedTitle = interfaceContext.meta?.title + formattedPaths.join(' | ');
	const computedUrl = interfaceContext.meta?.baseUrl + router.asPath.split('?')[0];
	const headProps = { ...interfaceContext.meta, ...seo };

	// Render
	return (
		<Div {...computedProps}>
			<Head {...headProps} title={seo?.title || computedTitle} url={computedUrl} />
			{children}
		</Div>
	);
};
