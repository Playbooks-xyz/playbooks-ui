import { useMemo } from 'react';
import { useRouter } from 'next/router';

import { useInterface } from 'contexts';
import { Head } from 'interface/head';
import { Div } from 'interface/html';
import { iRoute } from 'interface/routes.types';
import { capitalize } from 'utils/transforms';

export const Route = ({ id, name = 'Route', title, seo, className, children, ...tailwind }: iRoute) => {
	const base = { bgColor: 'bg-white dark:bg-gray-900' };
	const props = { ...base, ...tailwind, className, name };
	const interfaceContext = useInterface();
	const router = useRouter();

	// Computed
	const computedTitle = useMemo(() => {
		const basePath = router.asPath.split('?')[0];
		const paths = basePath.split('/');
		const formattedPaths = paths.map(v =>
			v
				.split('-')
				.map(v => capitalize(v))
				.join(' '),
		);
		return interfaceContext.seo?.title + formattedPaths.join(' | ');
	}, [router.pathname]);

	// Render
	return (
		<Div {...props}>
			<Head title={title || computedTitle} {...seo} />
			{children}
		</Div>
	);
};
