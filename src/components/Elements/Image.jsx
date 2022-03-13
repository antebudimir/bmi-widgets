import PropTypes from 'prop-types';

const Image = ({ source, altText, imageClass }) => {
	return <img src={source} alt={altText} className={imageClass} />;
};

Image.propTypes = {
	source: PropTypes.string.isRequired,
	altText: PropTypes.string.isRequired,
	imageClass: PropTypes.string,
};

export default Image;
