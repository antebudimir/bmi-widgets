const LinearMeter = () => {
	return (
		<section id="linear-meter">
			<h2 className="hidden-visually">Linear meter</h2>

			<span className="underweight"></span>
			<span className="appropriate"></span>
			<span className="overweight"></span>

			<div className="category-container">
				<span className="category">Underweight</span>
				<span className="category normal-category">Normal</span>
				<span className="category">Overweight</span>
			</div>
		</section>
	);
};

export default LinearMeter;
