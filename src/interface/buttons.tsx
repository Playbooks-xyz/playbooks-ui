import { Fragment } from 'react';

import * as HTML from '@ehubbell/html';
import * as theme from '@playbooks/theme';
import { Img, Span } from 'interface/html';
import { Icon } from 'interface/icons';
import { Oval } from 'interface/spinners';
import * as types from 'types/button-types';
import { classBuilder } from 'utils';

export const Btn = ({ variant = 'primary', ...props }) => {
	switch (variant) {
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

		default:
			return <Btn {...props} />;
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
	const base = theme.primaryBtn({ active, size });
	return <BtnShared id={id} name={name} className={className} {...base} tailwind={tailwind} {...props} />;
};

export const AccentBtn = ({
	id,
	name = 'AccentBtn',
	size = 'sm',
	active,
	tailwind,
	className,
	...props
}: types.BtnProps) => {
	const base = theme.accentBtn({ active, size });
	return <BtnShared id={id} name={name} className={className} {...base} tailwind={tailwind} {...props} />;
};

export const BorderBtn = ({
	id,
	name = 'BorderBtn',
	size = 'sm',
	active,
	tailwind,
	className,
	...props
}: types.BtnProps) => {
	const base = theme.borderBtn({ active, size });
	return <BtnShared id={id} name={name} className={className} {...base} tailwind={tailwind} {...props} />;
};

export const TabBtn = ({ id, name = 'TabBtn', size = 'sm', active, tailwind, className, ...props }: types.BtnProps) => {
	const base = theme.tabBtn({ active, size });

	return <BtnShared id={id} name={name} className={className} {...base} tailwind={tailwind} {...props} />;
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
	const base = theme.textBtn({ active, size });
	return <BtnShared id={id} name={name} className={className} {...base} tailwind={tailwind} {...props} />;
};

const BtnShared = ({
	id,
	type,
	name,
	alt,
	disabled,
	prevIcon,
	prevImg,
	icon,
	img,
	nextIcon,
	nextImg,
	taskRunning,
	onClick,
	tailwind,
	className,
	children,
	...props
}: types.BtnProps) => {
	return (
		<BtnWrapper
			id={id}
			type={type}
			name={name}
			alt={alt}
			disabled={disabled}
			taskRunning={taskRunning}
			onClick={onClick}
			tailwind={tailwind}
			className={className}
			{...props}>
			{taskRunning ? <Span /> : prevIcon && <Icon type='far' icon={prevIcon?.icon || prevIcon} {...prevIcon} />}
			{taskRunning ? (
				<Fragment />
			) : (
				prevImg && <Img src={prevImg?.src || prevImg} borderRadius='rounded-sm' spacing='w-5 h-5' {...prevImg} />
			)}
			<Span space='space-x-4' {...props?.span}>
				{taskRunning ? (
					<Oval />
				) : icon ? (
					<Icon type='far' icon={icon?.icon || icon} {...icon} />
				) : img ? (
					<Img src={img?.src || img} borderRadius='rounded-sm' spacing='w-5 h-5' {...img} />
				) : (
					children
				)}
				<Span className='sr-only'>{alt}</Span>
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
	id = '',
	type = 'button',
	name = 'BtnWrapper',
	alt = '',
	onClick,
	disabled = false,
	taskRunning = false,
	children,
	tailwind,
	className,
	...props
}: types.BtnProps) => {
	const base = theme.btnWrapper({ disabled });
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.Button
			type={type}
			aria-label={alt}
			title={alt}
			name={name}
			disabled={disabled || taskRunning}
			onClick={onClick}
			className={computed}>
			{children}
		</HTML.Button>
	);
};

// Docs
// https://tailwindui.com/interface/application-ui/elements/buttons
