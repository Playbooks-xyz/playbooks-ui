import { forwardRef } from 'react';
import { Range } from 'react-range';

import { tailwindClassBuilder } from 'tailwind';

export const RangeSlider = ({ min = 0, max = 100, step = null, value, onChange, tailwind = {} }) => {
	return (
		<Range
			step={step}
			min={min}
			max={max}
			values={[value]}
			onChange={onChange}
			renderTrack={({ props, children }) => <RangeSliderTrack {...props}>{children}</RangeSliderTrack>}
			renderThumb={({ props }) => <RangeSliderThumb {...props} />}
		/>
	);
};

export const RangeSliders = ({ min = 0, max = 100, step = 1, values, onChange, onNext, tailwind = {} }) => {
	return (
		<Range
			step={step}
			min={min}
			max={max}
			values={values}
			onChange={onChange}
			renderTrack={({ props, children }) => (
				<RangeSliderTrack ref={props.ref} values={values} min={min} max={max} props={props} onNext={onNext}>
					{children}
				</RangeSliderTrack>
			)}
			renderThumb={({ props, isDragged }) => <RangeSliderThumb ref={props.ref} {...props} />}
		/>
	);
};

export const RangeSliderTrack = forwardRef(({ values, min, max, props, children, onNext }, ref) => {
	const base = {
		bgColor: 'bg-gray-100 dark:bg-gray-800',
		borderRadius: 'rounded-full',
		height: 'h-inherit',
		display: 'flex',
		width: 'w-full',
	};
	const className = tailwindClassBuilder(base);
	return (
		<div
			onMouseDown={props.onMouseDown}
			onTouchStart={props.onTouchStart}
			onTouchEnd={onNext}
			onMouseUp={onNext}
			className={className}
			style={props.style}>
			<div
				ref={ref}
				style={{
					height: '5px',
					width: '100%',
					alignSelf: 'center',
				}}>
				{children}
			</div>
		</div>
	);
});

export const RangeSliderThumb = forwardRef(({ isDragged, ...props }, ref) => {
	const base = {
		size: 'w-6 h-6',
		bgColor: isDragged ? 'bg-blue-500 dark:bg-orange-500' : 'bg-gray-300 dark:bg-gray-600',
		border: 'border-2',
		borderColor: isDragged ? 'border-blue-500 dark:border-orange-500' : 'border-gray-300 dark:border-gray-600',
		borderRadius: 'rounded-full',
		display: 'flex-middle',
		position: '',
		shadow: 'shadow-sm',
	};
	const className = tailwindClassBuilder(base);

	return <div ref={ref} {...props} className={className} style={props.style} />;
});

// Docs
// https://www.npmjs.com/package/react-range
