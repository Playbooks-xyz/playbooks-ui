import { useMemo } from 'react';
import { useRouter } from 'next/router';

import { Head } from 'interface/head';
import { Div } from 'interface/html';
import { iRoute } from 'interface/routes.types';
import { capitalize } from 'utils/transforms';

export const Route = ({ id, name = 'Route', title, description, photo, className, children, ...tailwind }: iRoute) => {
	const base = {};
	const props = { ...base, ...tailwind, className, name };
	const router = useRouter();

	// Computed
	const companyName = 'Playbooks';

	const computedTitle = useMemo(() => {
		const paths = router.asPath.split('?')[0].split('/');
		const spacedPaths = paths.map(v =>
			v
				.split('-')
				.map(p => capitalize(p))
				.join(' '),
		);
		return spacedPaths.join(' | ');
	}, [router.pathname]);

	const formattedTitle = title ? title : companyName + computedTitle;

	// Render
	return (
		<Div {...props}>
			<Head title={formattedTitle} photo={photo} description={description} />
			{children}
		</Div>
	);
};
