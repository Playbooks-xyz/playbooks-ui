import { forwardRef, useRef } from 'react';

import { CurrencyInputWrapper } from 'components/currency-input-wrapper';
import { GoogleAutocompleteWrapper } from 'components/google-autocomplete-wrapper';
import { MaskedInput } from 'components/masked-input-wrapper';
import { PhoneInputWrapper } from 'components/phone-input-wrapper';
import { useElementKeyPress } from 'hooks';
import {
	iForm,
	iFormCheckbox,
	iFormFile,
	iFormGroup,
	iFormInput,
	iFormInputCurrency,
	iFormInputMask,
	iFormLabel,
	iFormLocationInput,
	iFormRange,
	iFormSelect,
	iFormText,
	iFormTextArea,
} from 'interface/forms.types';
import { Div, Span } from 'interface/html';
import { checkboxProps, computeInputSize, inputProps, rangeProps, tailwindClassBuilder } from 'utils';

export const Form = ({ id, name = 'Form', onSubmit, className, children, ...tailwind }: iForm) => {
	const base = {};
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<form onSubmit={onSubmit} data-name={name} className={classes}>
			{children}
		</form>
	);
};

export const FormGroup = ({ id, name = 'FormGroup', className, children, ...tailwind }: iFormGroup) => {
	const base = { space: 'space-y-2', spacing: 'mb-4', width: 'w-full' };
	const props = { ...base, ...tailwind, name, className };

	return (
		<Div id={id} {...props}>
			{children}
		</Div>
	);
};

export const FormLabel = ({
	id,
	name = 'FormLabel',
	htmlFor,
	onClick,
	className,
	children,
	...tailwind
}: iFormLabel) => {
	const base = {
		color: 'gray-600 dark:gray-400',
		cursor: 'cursor-pointer',
		display: 'inline-block',
		fontFamily: 'font-secondary',
		fontWeight: 'font-medium',
		fontSize: 'text-sm',
		spacing: 'p-1',
		tracking: 'tracking-wide',
	};
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<label id={id} data-name={name} htmlFor={htmlFor} onClick={onClick ? onClick : null} className={classes}>
			{children}
		</label>
	);
};

export const FormCheckbox = ({
	id,
	name = 'FormCheckbox',
	checked = false,
	onChange,
	readOnly,
	className,
	...tailwind
}: iFormCheckbox) => {
	const base = checkboxProps(checked);
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<input
			id={id}
			type='checkbox'
			data-name={name}
			checked={checked}
			onChange={onChange}
			readOnly={readOnly}
			className={classes}
		/>
	);
};

export const FormRange = ({
	id,
	name = 'FormRange',
	value,
	min,
	max,
	step,
	onChange,
	readOnly,
	className,
	...tailwind
}: iFormRange) => {
	const base = rangeProps();
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<input
			id={id}
			type='range'
			data-name={name}
			value={value}
			min={min}
			max={max}
			step={step}
			onChange={onChange}
			readOnly={readOnly}
			className={classes}
		/>
	);
};

export const FormInput = forwardRef<any, iFormInput>(
	(
		{
			id,
			name = 'FormInput',
			type,
			size = 'md',
			value,
			variant,
			placeholder,
			onChange,
			onFocus,
			onBlur,
			onClick,
			readOnly,
			className,
			...tailwind
		}: iFormInput,
		ref,
	) => {
		const base = { ...inputProps(variant), ...computeInputSize(size) };
		const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

		return (
			<input
				id={id}
				ref={ref}
				data-name={name}
				type={type || 'text'}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				onFocus={onFocus}
				onBlur={onBlur}
				onClick={onClick}
				readOnly={readOnly}
				autoComplete='off'
				className={classes}
			/>
		);
	},
);

export const FormMaskInput = ({
	id,
	name = 'FormMaskInput',
	size = 'md',
	mask,
	value,
	variant,
	placeholder,
	onChange,
	onBlur,
	readOnly,
	className,
	...tailwind
}: iFormInputMask) => {
	const base = { ...inputProps(variant), ...computeInputSize(size) };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<MaskedInput
			id={id}
			mask={mask}
			value={value}
			placeholder={placeholder}
			onChange={onChange}
			onBlur={onBlur}
			readOnly={readOnly}
			className={classes}
		/>
	);
};

export const FormCurrencyInput = ({
	id,
	name = 'FormCurrencyInput',
	size = 'md',
	value,
	variant,
	prefix,
	placeholder,
	onChange,
	onBlur,
	readOnly,
	className,
	...tailwind
}: iFormInputCurrency) => {
	const base = { ...inputProps(variant), ...computeInputSize(size) };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<CurrencyInputWrapper
			id={id}
			value={value}
			prefix={prefix}
			placeholder={placeholder}
			onChange={onChange}
			readOnly={readOnly}
			className={classes}
		/>
	);
};

export const FormDivInput = ({
	id,
	name = 'FormDivInput',
	size = 'md',
	value,
	variant,
	placeholder,
	onClick,
	className,
	children,
	...tailwind
}: iFormInput) => {
	const base = {
		...inputProps(variant),
		...computeInputSize(size),
		color: 'gray-600 dark:gray-400',
		display: 'flex-center',
		overflow: 'overflow-x-scroll',
	};
	const props = { ...base, ...tailwind, name, className };

	return (
		<Div id={id} tabIndex='0' onClick={onClick} {...props}>
			{children ? children : <Span color=''>{placeholder}</Span>}
		</Div>
	);
};

export const FormFileInput = ({
	id,
	name = 'FormFileInput',
	value,
	placeholder,
	onChange,
	className,
	...tailwind
}: iFormFile) => {
	const base = {};
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return <input placeholder={placeholder} value={value} onChange={onChange} className={classes} />;
};

export const FormLocationInput = ({
	id,
	name = 'FormLocationInput',
	size = 'md',
	value,
	variant,
	options,
	placeholder,
	onChange,
	onSelect,
	onBlur,
	readOnly,
	className,
	...tailwind
}: iFormLocationInput) => {
	const base = { ...inputProps(variant), ...computeInputSize(size) };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });
	const ref = useRef(null);

	// Hooks
	useElementKeyPress(ref.current, onKeyPress, []);

	// Methods
	function onKeyPress(e) {
		if (e.keyCode === 13) e.preventDefault();
	}

	return (
		<GoogleAutocompleteWrapper options={options} onSelect={onSelect}>
			<input
				id={id}
				ref={ref}
				value={value}
				placeholder={placeholder}
				onBlur={onBlur}
				onChange={onChange}
				readOnly={readOnly}
				className={classes}
			/>
		</GoogleAutocompleteWrapper>
	);
};

export const FormPhoneInput = ({
	id,
	name = 'FormPhoneInput',
	size = 'md',
	value,
	variant,
	placeholder,
	onChange,
	onBlur,
	readOnly,
	className,
	...tailwind
}: iFormInput) => {
	const base = { ...inputProps(variant), ...computeInputSize(size) };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<PhoneInputWrapper
			id={id}
			value={value}
			placeholder={placeholder}
			onBlur={onBlur}
			onChange={onChange}
			readOnly={readOnly}
			className={classes}
		/>
	);
};

export const FormSelect = ({
	id,
	name = 'FormSelect',
	size = 'md',
	value,
	variant,
	options = [],
	placeholder,
	disabled,
	onChange,
	className,
	...tailwind
}: iFormSelect) => {
	const base = { ...inputProps(variant), ...computeInputSize(size), cursor: 'cursor-pointer' };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<select value={value} disabled={disabled} placeholder={placeholder} onChange={onChange} className={classes}>
			<option value='' disabled>
				{placeholder}
			</option>
			{options.map((option, i) => (
				<option key={i} value={option}>
					{option}
				</option>
			))}
		</select>
	);
};

export const FormText = ({ id, name = 'FormText', className, children, ...tailwind }: iFormText) => {
	const base = {
		color: 'gray-500 dark:gray-400',
		spacing: 'mx-1',
		tracking: 'tracking-wider',
		fontSize: 'text-xs',
	};
	const props = { ...base, ...tailwind, name, className };

	return <Div {...props}>{children}</Div>;
};

export const FormTextArea = ({
	id,
	name = 'FormTextArea',
	size = 'md',
	value,
	variant,
	rows,
	placeholder,
	onChange,
	readOnly,
	className,
	...tailwind
}: iFormTextArea) => {
	const base = { ...inputProps(variant), ...computeInputSize(size) };
	const classes = tailwindClassBuilder({ ...base, ...tailwind, className });

	return (
		<textarea
			id={id}
			rows={rows || 4}
			value={value}
			placeholder={placeholder}
			onChange={onChange}
			readOnly={readOnly}
			className={classes}
		/>
	);
};

// Docs
// // https://github.com/tailwindlabs/tailwindcss-forms
