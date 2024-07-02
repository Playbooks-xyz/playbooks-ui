import ReactMaskedInput from 'react-input-mask';

export const MaskedInput = ({ id, mask, value, placeholder, readOnly, onBlur, onChange, className }) => (
	<ReactMaskedInput
		id={id}
		mask={mask || '99/9999'}
		maskChar={null}
		value={value}
		placeholder={placeholder}
		onBlur={onBlur}
		onChange={onChange}
		className={className}
		readOnly={readOnly}
	/>
);

// Docs
// https://github.com/sanniassin/react-input-mask
