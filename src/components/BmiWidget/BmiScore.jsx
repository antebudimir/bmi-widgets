const BmiScore = ({ bmiScore }) => {
	return (
		<>
			<h2>Your pet's BMI is</h2>

			<div className="bmi-score">{bmiScore.length > 0 ? bmiScore : 0}</div>
		</>
	);
};

export default BmiScore;
