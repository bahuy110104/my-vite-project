import PropTypes from 'prop-types';
import './style.css';

const Movie = (props) => {
  const { movieName, image, episode } = props.info;

  return (
    <div className="information">
      <div className="image-container" >
        <img src={image} alt={movieName} />
        <div className='movie-info'>
          <p className="episode">Episode: {episode}</p>
          <h3 className='movie-name'>{movieName}</h3>
        </div>
      </div>
    </div>
  );
};

// Define prop types
Movie.propTypes = {
  info: PropTypes.shape({
    movieName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    episode: PropTypes.string.isRequired,
  }).isRequired,
};

export default Movie;
