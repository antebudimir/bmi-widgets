import { useState } from 'react';
import BmiScore from 'components/BmiWidget/BmiScore';
import BmiForm from 'components/BmiWidget/BmiForm';
import Image from 'components/Elements/Image';
import garfield from 'assets/img/liar.jpg';

const Main = () => {
	const [bmiScore, setBmiScore] = useState(0);

	return (
		<main>
			<BmiScore bmiScore={bmiScore} />

			<BmiForm bmiScore={bmiScore} setBmiScore={setBmiScore} />

			<Image source={garfield} altText="Garfield on a scale" />
		</main>
	);
};

export default Main;
