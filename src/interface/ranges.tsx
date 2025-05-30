import { Range } from 'react-range';

import * as HTML from '@ehubbell/html';
import * as styles from 'styles';
import { tailwindClassBuilder } from 'utils';

export const RangeSlider = ({ min = 0, max = 100, step = null, value, onChange }) => {
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

export const RangeSliders = ({ min = 0, max = 100, step = 1, values, onChange, onNext }) => {
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

export const RangeSliderTrack = ({ ref, values, min, max, props, children, onNext }) => {
	const base = styles.rangeSliderTrack;
	const className = tailwindClassBuilder(base);
	return (
		<HTML.Div
			onMouseDown={props.onMouseDown}
			onTouchStart={props.onTouchStart}
			onTouchEnd={onNext}
			onMouseUp={onNext}
			className={className}
			style={props.style}>
			<HTML.Div
				ref={ref}
				style={{
					height: '5px',
					width: '100%',
					alignSelf: 'center',
				}}>
				{children}
			</HTML.Div>
		</HTML.Div>
	);
};

export const RangeSliderThumb = ({ ref, isDragged, ...props }) => {
	const base = {
		...styles.rangeSliderThumb,
		bgColor: isDragged ? 'bg-blue-500 dark:bg-cyan-500' : 'bg-gray-300 dark:bg-gray-600',
		borderColor: isDragged ? 'border-blue-500 dark:border-cyan-500' : 'border-gray-300 dark:border-gray-600',
	};
	const className = tailwindClassBuilder(base);

	return <HTML.Div ref={ref} {...props} className={className} style={props.style} />;
};

// Docs
// https://www.npmjs.com/package/react-range
