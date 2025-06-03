import { Range } from 'react-range';

import * as HTML from '@ehubbell/html';
import { useInterface } from 'contexts';
import { computeTailwind } from 'utils';

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
	const { theme } = useInterface();
	const base = theme.rangeSliderTrack();
	const classes = computeTailwind({ ...base, ...restProps, tailwind });

	return (
		<HTML.Div
			onMouseDown={trackProps.onMouseDown}
			onTouchStart={trackProps.onTouchStart}
			onTouchEnd={onNext}
			onMouseUp={onNext}
			className={classes}
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
	const { theme } = useInterface();
	const base = theme.rangeSliderThumb({ isDragged });
	const classes = computeTailwind({ ...base, ...props, tailwind });

	return <HTML.Div ref={ref} {...props} className={classes} style={props.style} />;
};

// Docs
// https://www.npmjs.com/package/react-range
