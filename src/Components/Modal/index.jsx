import PropTypes from 'prop-types';
import Close from '../../../public';
import './style.css';

const Modal = (props) => {
  return (
    <div className='Modal'>
      <div className="contentModal">
        <div className="header">
          <button className='btnClose' onClick={props.onClose}> <Close /> </button>
        </div>
        <div className="content">
          <img src={props.currentInfo.image} alt="" className='boruto-img' />
          <div className='infomation'>
            <p>Type: {props.currentInfo.type}</p>
            <p>Status: {props.currentInfo.status}</p>
            <p>Studio: {props.currentInfo.studio}</p>
            <p>Duration: {props.currentInfo.duration}</p>
            <p>Genres: {props.currentInfo.genres}</p>
          </div>
        </div>
        <div className='decription'>
          <p className='sypnosis'>{props.currentInfo.description}</p>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  currentInfo: PropTypes.shape({
    image: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    studio: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Modal;
