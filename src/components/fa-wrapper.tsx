import dynamic from 'next/dynamic';

import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { IconProps } from 'types';
import { computeTailwind } from 'utils';

const FontAwesome = dynamic(() => import('@fortawesome/react-fontawesome').then(v => v.FontAwesomeIcon), {
	ssr: false,
});

const FaWrapper = ({ type = 'fas', name, icon, transform, tailwind, className, ...props }: IconProps) => {
	const base = {};
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });

	return (
		<FontAwesome
			data-name={name}
			icon={[type as IconPrefix, icon as IconName]}
			transform={transform}
			className={classes}
		/>
	);
};

export { FaWrapper };

// Docs
// https://fontawesome.com/kits/95c629a819/use
// https://fontawesome.com/how-to-use/on-the-web/styling/rotating-icons
// https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
