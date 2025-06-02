import { Range } from 'react-range';

import * as HTML from '@ehubbell/html';
import * as theme from 'theme';
import { classBuilder } from 'utils';

export const RangeSlider = ({ min = 0, max = 100, step = null, value, onChange, tailwind, ...props }) => {
	return (
		<Range
			step={step}
			min={min}
			max={max}
			values={[value]}
			onChange={onChange}
			renderTrack={({ props, children }) => (
				<RangeSliderTrack
					ref={props.ref}
					values={[value]}
					min={min}
					max={max}
					trackProps={props}
					onNext={() => {}}
					tailwind={tailwind}>
					{children}
				</RangeSliderTrack>
			)}
			renderThumb={({ props, isDragged }) => <RangeSliderThumb tailwind={tailwind} isDragged={isDragged} {...props} />}
		/>
	);
};

export const RangeSliders = ({ min = 0, max = 100, step = 1, values, onChange, onNext, tailwind, ...props }) => {
	return (
		<Range
			step={step}
			min={min}
			max={max}
			values={values}
			onChange={onChange}
			renderTrack={({ props, children }) => (
				<RangeSliderTrack
					ref={props.ref}
					values={values}
					min={min}
					max={max}
					trackProps={props}
					onNext={onNext}
					tailwind={tailwind}>
					{children}
				</RangeSliderTrack>
			)}
			renderThumb={({ props, isDragged }) => (
				<RangeSliderThumb ref={props.ref} tailwind={tailwind} isDragged={isDragged} {...props} />
			)}
		/>
	);
};

export const RangeSliderTrack = ({ ref, values, min, max, trackProps, children, onNext, tailwind, ...restProps }) => {
	const base = theme.rangeSliderTrack();
	const computed = classBuilder({ ...base, ...restProps, tailwind });
	return (
		<HTML.Div
			onMouseDown={trackProps.onMouseDown}
			onTouchStart={trackProps.onTouchStart}
			onTouchEnd={onNext}
			onMouseUp={onNext}
			className={computed}
			style={trackProps.style}>
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

export const RangeSliderThumb = ({ ref, isDragged, tailwind, ...props }) => {
	const base = theme.rangeSliderThumb({ isDragged });
	const computed = classBuilder({ ...base, ...props, tailwind });

	return <HTML.Div ref={ref} {...props} className={computed} style={props.style} />;
};

// Docs
// https://www.npmjs.com/package/react-range
