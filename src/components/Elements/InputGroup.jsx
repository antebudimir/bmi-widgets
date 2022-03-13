import PropTypes from 'prop-types';

const InputGroup = (inputDetails) => {
	const {
		labelFor,
		labelClass,
		labelText,
		inputType,
		inputName,
		inputId,
		inputClass,
		inputPlaceholder,
		inputValue,
		inputStep,
		minValue,
		maxValue,
		maxLength,
		changeHandler,
		required,
		readOnly,
	} = inputDetails;

	return (
		<>
			<label htmlFor={labelFor} className={labelClass}>
				{labelText}
			</label>

			<input
				type={inputType}
				name={inputName}
				id={inputId}
				className={inputClass}
				placeholder={inputPlaceholder}
				value={inputValue}
				step={inputStep}
				min={minValue}
				max={maxValue}
				maxLength={maxLength}
				onChange={changeHandler}
				required={required}
				readOnly={readOnly}
			/>
		</>
	);
};

InputGroup.propTypes = {
	labelFor: PropTypes.string.isRequired,
	labelClass: PropTypes.string,
	labelText: PropTypes.string.isRequired,
	inputType: PropTypes.string.isRequired,
	inputName: PropTypes.string,
	inputId: PropTypes.string,
	inputClass: PropTypes.string,
	inputPlaceholder: PropTypes.string,
	inputStep: PropTypes.string,
	minValue: PropTypes.string,
	maxValue: PropTypes.string,
	maxLength: PropTypes.string,
	changeHandler: PropTypes.func,
};

export default InputGroup;
