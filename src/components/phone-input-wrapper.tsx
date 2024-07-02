import PhoneInput from 'react-phone-number-input/input';

const PhoneInputWrapper = ({ id, value, placeholder, onBlur, onChange, readOnly, className }) => (
	<PhoneInput
		id={id}
		value={value}
		readOnly={readOnly}
		placeholder={placeholder}
		onBlur={onBlur}
		onChange={onChange}
		className={className}
	/>
);

export { PhoneInputWrapper };

// Docs
// https://www.npmjs.com/package/react-phone-number-input
