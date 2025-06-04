import { Fragment } from 'react';

import * as HTML from '@ehubbell/html';
import { useInterface } from 'contexts';
import { Img, Span } from 'interface/html';
import { Icon } from 'interface/icons';
import { Oval } from 'interface/spinners';
import * as types from 'types/button-types';
import { computeProps, computeTailwind } from 'utils';

export const Btn = props => {
	switch (props?.variant) {
		case 'primary':
			return <PrimaryBtn {...props} />;

		case 'accent':
			return <AccentBtn {...props} />;

		case 'border':
			return <BorderBtn {...props} />;

		case 'tab':
			return <TabBtn {...props} />;

		case 'text':
			return <TextBtn {...props} />;

		case 'wrapper':
			return <BtnWrapper {...props} />;

		default:
			return <PrimaryBtn {...props} />;
	}
};

export const PrimaryBtn = ({
	id,
	name = 'PrimaryBtn',
	size = 'sm',
	active,
	tailwind,
	className,
	...props
}: types.BtnProps) => {
	const { theme } = useInterface();
	const base = theme.primaryBtn({ active, size });

	return <BtnShared name={name} className={className} {...base} tailwind={tailwind} {...props} />;
};

export const AccentBtn = ({
	name = 'AccentBtn',
	size = 'sm',
	active,
	tailwind,
	className,
	...props
}: types.BtnProps) => {
	const { theme } = useInterface();
	const base = theme.accentBtn({ active, size });

	return <BtnShared name={name} className={className} {...base} tailwind={tailwind} {...props} />;
};

export const BorderBtn = ({
	name = 'BorderBtn',
	size = 'sm',
	active,
	tailwind,
	className,
	...props
}: types.BtnProps) => {
	const { theme } = useInterface();
	const base = theme.borderBtn({ active, size });

	return <BtnShared name={name} className={className} {...base} tailwind={tailwind} {...props} />;
};

export const TabBtn = ({ id, name = 'TabBtn', size = 'sm', active, tailwind, className, ...props }: types.BtnProps) => {
	const { theme } = useInterface();
	const base = theme.tabBtn({ active, size });

	return <BtnShared name={name} className={className} {...base} tailwind={tailwind} {...props} />;
};

export const TextBtn = ({
	id,
	name = 'TextBtn',
	size = 'sm',
	active,
	tailwind,
	className,
	...props
}: types.BtnProps) => {
	const { theme } = useInterface();
	const base = theme.textBtn({ active, size });

	return <BtnShared id={id} name={name} className={className} {...base} tailwind={tailwind} {...props} />;
};

const BtnShared = ({
	alt,
	prevIcon,
	prevImg,
	icon,
	img,
	nextIcon,
	nextImg,
	taskRunning,
	tailwind,
	children,
	...props
}: types.BtnProps) => {
	return (
		<BtnWrapper alt={alt} taskRunning={taskRunning} tailwind={tailwind} {...props}>
			{taskRunning ? <Span /> : prevIcon && <Icon type='far' icon={prevIcon?.icon || prevIcon} {...prevIcon} />}
			{taskRunning ? (
				<Fragment />
			) : (
				prevImg && <Img src={prevImg?.src || prevImg} borderRadius='rounded-sm' spacing='w-5 h-5' {...prevImg} />
			)}
			<Span display='inline-flex' space='space-x-4' {...tailwind?.span}>
				{taskRunning ? (
					<Oval />
				) : icon ? (
					<Icon type='far' icon={icon?.icon || icon} {...icon} />
				) : img ? (
					<Img src={img?.src || img} borderRadius='rounded-sm' spacing='w-5 h-5' {...img} />
				) : (
					children
				)}
			</Span>
			{taskRunning ? (
				<Fragment />
			) : (
				nextImg && <Img src={prevImg?.src || prevImg} borderRadius='rounded-sm' spacing='w-5 h-5' {...prevImg} />
			)}
			{taskRunning ? <Span /> : nextIcon && <Icon type='far' icon={nextIcon?.icon || nextIcon} {...nextIcon} />}
		</BtnWrapper>
	);
};

export const BtnWrapper = ({
	type = 'button',
	name = 'BtnWrapper',
	alt,
	disabled,
	taskRunning,
	children,
	tailwind,
	className,
	...props
}: types.BtnProps) => {
	const { theme } = useInterface();
	const base = theme.btnWrapper({ disabled });
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });
	const filtered = computeProps(props);

	return (
		<HTML.Button
			type={type}
			aria-label={alt}
			title={alt}
			name={name}
			disabled={disabled || taskRunning}
			className={classes}
			{...filtered}>
			{children}
		</HTML.Button>
	);
};

// Docs
// https://tailwindui.com/interface/application-ui/elements/buttons
