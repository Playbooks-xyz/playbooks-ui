import dynamic from 'next/dynamic';
const FontAwesome = dynamic(() => import('@fortawesome/react-fontawesome').then(v => v.FontAwesomeIcon), {
	ssr: false,
});
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

type FaType = {
	type?: IconPrefix;
	icon?: string;
	transform?: string;
	className?: string;
};

const FaWrapper = ({ type = 'fas', icon, transform, className }: FaType) => (
	<FontAwesome icon={[type, icon as IconName]} transform={transform} className={className} />
);

export { FaWrapper };

// Docs
// https://fontawesome.com/kits/95c629a819/use
// https://fontawesome.com/how-to-use/on-the-web/styling/rotating-icons
// https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
