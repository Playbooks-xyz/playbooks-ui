import { Fragment } from 'react';

import * as HTML from '@ehubbell/html';
import { Img, Span } from 'interface/html';
import { Icon } from 'interface/icons';
import { Oval } from 'interface/spinners';
import * as styles from 'styles';
import { iBtn } from 'types/button-types';
import {
	btnAccentProps,
	btnBorderProps,
	btnProps,
	btnTabProps,
	btnTextProps,
	computeBtnSize,
	tailwindClassBuilder,
} from 'utils';

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

export const PrimaryBtn = ({ id, name = 'PrimaryBtn', size = 'sm', active, className, ...tailwind }: iBtn) => {
	const base = { ...btnProps(active), size: computeBtnSize(size) };

	return <BtnShared id={id} name={name} className={className} {...base} {...tailwind} />;
};

export const AccentBtn = ({ id, name = 'AccentBtn', size = 'sm', active, className, ...tailwind }: iBtn) => {
	const base = { ...btnAccentProps(active), size: computeBtnSize(size) };

	return <BtnShared id={id} name={name} className={className} {...base} {...tailwind} />;
};

export const BorderBtn = ({ id, name = 'BorderBtn', size = 'sm', active, className, ...tailwind }: iBtn) => {
	const base = { ...btnBorderProps(active), size: computeBtnSize(size) };

	return <BtnShared id={id} name={name} className={className} {...base} {...tailwind} />;
};

export const TabBtn = ({ id, name = 'TabBtn', size = 'sm', active, className, ...tailwind }: iBtn) => {
	const base = { ...btnTabProps(active), size: computeBtnSize(size) };

	return <BtnShared id={id} name={name} className={className} {...base} {...tailwind} />;
};

export const TextBtn = ({ id, name = 'TextBtn', size = 'sm', active, className, ...tailwind }: iBtn) => {
	const base = { ...btnTextProps(active), size: computeBtnSize(size) };

	return <BtnShared id={id} name={name} className={className} {...base} {...tailwind} />;
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
	className,
	children,
	...tailwind
}: iBtn) => {
	return (
		<BtnWrapper
			id={id}
			type={type}
			name={name}
			alt={alt}
			disabled={disabled}
			taskRunning={taskRunning}
			onClick={onClick}
			className={className}
			{...tailwind}>
			{taskRunning ? <Span /> : prevIcon && <Icon type='far' icon={prevIcon?.icon || prevIcon} {...prevIcon} />}
			{taskRunning ? (
				<Fragment />
			) : (
				prevImg && <Img src={prevImg?.src || prevImg} borderRadius='rounded-sm' spacing='w-5 h-5' {...prevImg} />
			)}
			<Span space='space-x-4' {...tailwind?.span}>
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
	className,
	...tailwind
}: iBtn) => {
	const base = {
		...styles.btnWrapper,
		cursor: disabled ? 'cursor-not-allowed' : 'cursor-pointer',
	};
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<HTML.Button
			type={type}
			aria-label={alt}
			title={alt}
			name={name}
			disabled={disabled || taskRunning}
			onClick={onClick}
			className={classes}>
			{children}
		</HTML.Button>
	);
};

// Docs
// https://tailwindui.com/interface/application-ui/elements/buttons
