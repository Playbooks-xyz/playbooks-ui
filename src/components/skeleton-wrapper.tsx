import SkeletonWrapper, { SkeletonTheme } from 'react-loading-skeleton';

import { tailwindClassBuilder } from 'utils';

const Skeleton = ({ color, highlight, height = '100%', width = '100%', className = '', ...tailwind }) => {
	const base = { width: 'w-full' };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<SkeletonTheme baseColor={color} highlightColor={highlight}>
			<SkeletonWrapper height={height} width={width} className={classes} />
		</SkeletonTheme>
	);
};

export { Skeleton };

// Docs
// https://github.com/dvtng/react-loading-skeleton#readme
