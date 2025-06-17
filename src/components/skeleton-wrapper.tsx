import SkeletonWrapper, { SkeletonTheme } from 'react-loading-skeleton';

import { TailwindProps } from '@ehubbell/html';
import { computeTailwind } from 'utils';

export type SkeletonProps = {
	height?: string;
	width?: string;
	tailwind?: TailwindProps;
	className?: string;
};

const Skeleton = ({ height = '100%', width = '100%', tailwind, className = '', ...props }: SkeletonProps) => {
	const base = { width: 'w-full' };
	const classes = computeTailwind({ ...base, ...tailwind, ...props, className });

	return (
		<SkeletonTheme>
			<SkeletonWrapper height={height} width={width} className={classes} />
		</SkeletonTheme>
	);
};

export { Skeleton };

// Docs
// https://github.com/dvtng/react-loading-skeleton#readme
