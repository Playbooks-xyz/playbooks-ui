import dynamic from 'next/dynamic';
const FontAwesome = dynamic(() => import('@fortawesome/react-fontawesome').then(v => v.FontAwesomeIcon), {
	ssr: false,
});
import { IconName } from '@fortawesome/fontawesome-svg-core';

type FaType = {
	icon?: string;
	transform?: string;
	className?: string;
};

const FabWrapper = ({ icon, transform, className = 'text-inherit' }: FaType) => (
	<FontAwesome icon={['fab', icon as IconName]} transform={transform} className={className} />
);

const FalWrapper = ({ icon, transform, className = 'text-inherit' }: FaType) => (
	<FontAwesome icon={['fal', icon as IconName]} transform={transform} className={className} />
);

const FadWrapper = ({ icon, transform, className = 'text-inherit' }: FaType) => (
	<FontAwesome icon={['fad', icon as IconName]} transform={transform} className={className} />
);

const FarWrapper = ({ icon, transform, className = 'text-inherit' }: FaType) => (
	<FontAwesome icon={['far', icon as IconName]} transform={transform} className={className} />
);

export { FabWrapper, FadWrapper, FarWrapper };

// Docs
// https://fontawesome.com/kits/95c629a819/use
// https://fontawesome.com/how-to-use/on-the-web/styling/rotating-icons
// https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
