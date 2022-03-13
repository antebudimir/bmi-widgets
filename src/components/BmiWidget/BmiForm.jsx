import InputGroup from 'components/Elements/InputGroup';
import LinearMeter from 'components//BmiWidget/LinearMeter';
import CatMeter from 'components/BmiWidget/CatMeter';
import ReactGauge from 'react-gauge-capacity';
import gaugeOptions from './gaugeOptions';

const BmiForm = ({ bmiScore, setBmiScore }) => {
	const handleUserInput = (e) => {
		const { value } = e.target;

		setBmiScore(value);
	};

	const dontSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form id="bmi-form" onSubmit={dontSubmit}>
			<InputGroup
				labelFor="bmi-range"
				labelText="BMI score"
				labelClass="hidden-visually"
				inputType="range"
				inputId="bmi-range"
				inputClass="bmi-thumb"
				inputValue={bmiScore}
				minValue="0"
				maxValue="120"
				readOnly
			/>
			<LinearMeter />

			<InputGroup
				labelFor="bmi-range"
				labelText="BMI score"
				labelClass="hidden-visually"
				inputType="range"
				inputId="bmi-range"
				inputClass="bmi-thumb bmi-thumb-triangle"
				inputValue={bmiScore}
				minValue="0"
				maxValue="120"
				readOnly
			/>
			<LinearMeter />

			<InputGroup
				labelFor="bmi-range-secondary"
				labelText="BMI score"
				labelClass="hidden-visually"
				inputType="range"
				inputId="bmi-range-secondary"
				inputClass="bmi-thumb bmi-thumb-scale"
				inputValue={bmiScore}
				minValue="0"
				maxValue="120"
				readOnly
			/>
			<LinearMeter />

			<InputGroup
				labelFor="bmi-range-tertiary"
				labelText="BMI score"
				labelClass="hidden-visually"
				inputType="range"
				inputId="bmi-range-tertiary"
				inputClass={`bmi-thumb ${
					bmiScore < 40 || bmiScore > 80 ? 'sad' : 'happy'
				}`}
				inputValue={bmiScore}
				minValue="0"
				maxValue="120"
				readOnly
			/>
			<LinearMeter />

			<InputGroup
				inputType="number"
				labelFor="calculation"
				labelClass="calculation-label"
				labelText="BMI calculation that's coming from somewhere (here we'll type it in manually just to demo the widgets):"
				inputName="calculation"
				inputClass="calculation-input"
				inputValue={bmiScore}
				inputStep="0.01"
				minValue="0"
				maxValue="120"
				maxLength="3"
				required
				changeHandler={handleUserInput}
			/>

			<CatMeter bmiScore={bmiScore} />

			<ReactGauge {...gaugeOptions} arrowValue={bmiScore / 120} />
		</form>
	);
};

export default BmiForm;
