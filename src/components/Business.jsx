import PropTypes from 'prop-types';

const Business = (props) => (
    <div className='Business'>
        <img src={props.business.imageSrc} alt={props.business.name} />
        <h2>{props.business.name}</h2>
        <div>
            <ul>
                <li>{props.business.address}</li>
                <li>{props.business.city}</li>
                <li>{props.business.state}</li>
                <li>{props.business.zipCode}</li>
            </ul>
        </div>
        <div>
            <h3>{props.business.category}</h3>
            <ul>
                <li>{props.business.rating}</li>
                <li>{props.business.reviewCount}</li>
            </ul>
        </div>
    </div>
);

Business.propTypes = {
    business: PropTypes.shape({
      imageSrc: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      address: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      zipCode: PropTypes.string,
      category: PropTypes.string,
      rating: PropTypes.number,
      reviewCount: PropTypes.number,
    }).isRequired
  };

export default Business;