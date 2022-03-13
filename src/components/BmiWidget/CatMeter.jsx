import Image from 'components/Elements/Image';
import skinnyCat from 'assets/img/skinny-cat.jpg';
import happyCat from 'assets/img/happy-cat.jpg';
import fatCat from 'assets/img/fat-cat.jpg';

const CatMeter = ({ bmiScore }) => {
	return (
		<section id="cat-meter">
			<h2 className="hidden-visually">Cat meter</h2>

			<div className="image-wrapper">
				<Image
					source={skinnyCat}
					altText="skinny cat"
					imageClass={`illustration ${
						bmiScore === 0 || bmiScore > 40 ? 'blurred' : ''
					}`}
				/>
				<p className={bmiScore === 0 || bmiScore > 40 ? 'blurred' : ''}>
					Help me!
				</p>
			</div>

			<div className="image-wrapper">
				<Image
					source={happyCat}
					altText="happy healthy cat"
					imageClass={`illustration ${
						bmiScore < 41 || bmiScore > 80 ? 'blurred' : ''
					}`}
				/>
				<p className={bmiScore < 41 || bmiScore > 80 ? 'blurred' : ''}>
					Life is good.
				</p>
			</div>

			<div className="image-wrapper">
				<Image
					source={fatCat}
					altText="fat cat"
					imageClass={`illustration ${bmiScore < 81 ? 'blurred' : ''}`}
				/>
				<p className={bmiScore < 81 ? 'blurred' : ''}>
					I can't take it anymore.
				</p>
			</div>
		</section>
	);
};

export default CatMeter;
