import PropTypes from 'prop-types';
import logo from 'assets/img/bmi-logo.jpg';

const Header = ({ headingClass, title, source, altText, imageClass }) => {
	return (
		<header>
			<h1 className={headingClass}>{title}</h1>
			<img src={source} alt={altText} className={imageClass} />
		</header>
	);
};

Header.propTypes = {
	headingClass: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	source: PropTypes.string.isRequired,
	altText: PropTypes.string.isRequired,
	imageClass: PropTypes.string,
};

Header.defaultProps = {
	headingClass: 'hidden-visually',
	title: 'BMI widget',
	source: logo,
	altText: 'BMI logo',
};

export default Header;
