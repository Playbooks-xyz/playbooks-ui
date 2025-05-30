import { useRef } from 'react';

import * as HTML from '@ehubbell/html';
import { CurrencyInputWrapper } from 'components/currency-input-wrapper';
import { GoogleAutocompleteWrapper } from 'components/google-autocomplete-wrapper';
import { MaskedInput } from 'components/masked-input-wrapper';
import { PhoneInputWrapper } from 'components/phone-input-wrapper';
import { useElementKeyPress } from 'hooks';
import { Div, Span } from 'interface/html';
import * as styles from 'styles/form-styles';
import * as types from 'types/form-types';
import { classBuilder, computeInputSize } from 'utils';

export const Form = ({ id, name = 'Form', onSubmit, tailwind, className, children, ...props }: types.FormProps) => {
	const base = styles.form;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.Form onSubmit={onSubmit} name={name} className={computed}>
			{children}
		</HTML.Form>
	);
};

export const FormGroup = ({
	id,
	name = 'FormGroup',
	tailwind,
	className,
	children,
	...props
}: types.FormGroupProps) => {
	const base = styles.formGroup;
	const computed = { ...base, ...props, tailwind, name, className };

	return (
		<Div id={id} {...computed}>
			{children}
		</Div>
	);
};

export const FormLabel = ({
	id,
	name = 'FormLabel',
	htmlFor,
	onClick,
	tailwind,
	className,
	children,
	...props
}: types.FormLabelProps) => {
	const base = styles.formLabel;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.Label id={id} name={name} htmlFor={htmlFor} onClick={onClick} className={computed}>
			{children}
		</HTML.Label>
	);
};

export const FormCheckbox = ({
	id,
	name = 'FormCheckbox',
	checked = false,
	onChange,
	readOnly,
	tailwind,
	className,
	...props
}: types.FormCheckboxProps) => {
	const base = styles.formCheckbox;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.Input
			id={id}
			type='checkbox'
			name={name}
			checked={checked}
			onChange={onChange}
			readOnly={readOnly}
			className={computed}
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
	tailwind,
	className,
	...props
}: types.FormRangeProps) => {
	const base = styles.formRange;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.Input
			id={id}
			type='range'
			name={name}
			value={value}
			min={min}
			max={max}
			step={step}
			onChange={onChange}
			readOnly={readOnly}
			className={computed}
		/>
	);
};

export const FormInput = ({
	id,
	ref,
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
	tailwind,
	className,
	...props
}: types.FormInputProps) => {
	const base = { ...styles.formInput(variant), ...computeInputSize(size) };
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.Input
			id={id}
			ref={ref}
			name={name}
			type={type || 'text'}
			value={value}
			placeholder={placeholder}
			onChange={onChange}
			onFocus={onFocus}
			onBlur={onBlur}
			onClick={onClick}
			readOnly={readOnly}
			autoComplete='off'
			className={computed}
		/>
	);
};

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
	tailwind,
	className,
	...props
}: types.FormInputPropsMask) => {
	const base = { ...styles.formInput(variant), ...computeInputSize(size) };
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<MaskedInput
			id={id}
			mask={mask}
			value={value}
			placeholder={placeholder}
			onChange={onChange}
			onBlur={onBlur}
			readOnly={readOnly}
			className={computed}
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
	tailwind,
	className,
	...props
}: types.FormInputPropsCurrency) => {
	const base = { ...styles.formInput(variant), ...computeInputSize(size) };
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<CurrencyInputWrapper
			id={id}
			value={value}
			prefix={prefix}
			placeholder={placeholder}
			onChange={onChange}
			readOnly={readOnly}
			className={computed}
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
	tailwind,
	className,
	children,
	...props
}: types.FormInputProps) => {
	const base = { ...styles.formInput(variant), ...computeInputSize(size), ...styles.formDivInput };
	const computed = { ...base, ...props, tailwind, name, className };

	return (
		<Div id={id} tabIndex='0' onClick={onClick} {...computed}>
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
	tailwind,
	className,
	...props
}: types.FormFileProps) => {
	const base = styles.formFileInput;
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return <input placeholder={placeholder} value={value} onChange={onChange} className={computed} />;
};

export const FormLocationInput = ({
	id,
	name = 'FormLocationInput',
	size = 'md',
	value,
	variant,
	options,
	placeholder,
	googleMapsApiKey,
	onChange,
	onSelect,
	onBlur,
	readOnly,
	tailwind,
	className,
	...props
}: types.FormLocationPropsInput) => {
	const base = { ...styles.formInput(variant), ...computeInputSize(size) };
	const computed = classBuilder({ ...base, ...props, tailwind, className });
	const ref = useRef(null);

	// Hooks
	useElementKeyPress(ref.current, onKeyPress, []);

	// Methods
	function onKeyPress(e) {
		if (e.keyCode === 13) e.preventDefault();
	}

	return (
		<GoogleAutocompleteWrapper options={options} googleMapsApiKey={googleMapsApiKey} onSelect={onSelect}>
			<HTML.Input
				id={id}
				ref={ref}
				value={value}
				placeholder={placeholder}
				onBlur={onBlur}
				onChange={onChange}
				readOnly={readOnly}
				className={computed}
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
	tailwind,
	className,
	...props
}: types.FormInputProps) => {
	const base = { ...styles.formInput(variant), ...computeInputSize(size) };
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<PhoneInputWrapper
			id={id}
			value={value}
			placeholder={placeholder}
			onBlur={onBlur}
			onChange={onChange}
			readOnly={readOnly}
			className={computed}
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
	tailwind,
	className,
	...props
}: types.FormSelectProps) => {
	const base = { ...styles.formInput(variant), ...computeInputSize(size), cursor: 'cursor-pointer' };
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.Select value={value} disabled={disabled} onChange={onChange} className={computed}>
			<HTML.Option value='' disabled className='gray-500 dark:gray-400'>
				{placeholder}
			</HTML.Option>
			{options.map((option, i) => (
				<HTML.Option key={i} value={option}>
					{option}
				</HTML.Option>
			))}
		</HTML.Select>
	);
};

export const FormText = ({ id, name = 'FormText', tailwind, className, children, ...props }: types.FormTextProps) => {
	const base = styles.formText;
	const computed = { ...base, ...props, tailwind, name, className };

	return <Div {...computed}>{children}</Div>;
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
	tailwind,
	className,
	...props
}: types.FormTextPropsArea) => {
	const base = { ...styles.formInput(variant), ...computeInputSize(size) };
	const computed = classBuilder({ ...base, ...props, tailwind, className });

	return (
		<HTML.TextArea
			id={id}
			rows={rows || 4}
			value={value}
			placeholder={placeholder}
			onChange={onChange}
			readOnly={readOnly}
			className={computed}
		/>
	);
};

// Docs
// // https://github.com/tailwindlabs/tailwindcss-forms
