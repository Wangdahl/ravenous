import PropTypes from 'prop-types';
import './Business.css'

const Business = (props) => {
    //Arranging search querys into Google maps link
    const query = `${props.business.name} ${props.business.address}, ${props.business.city}, ${props.business.state} ${props.business.zipCode}`;
    const encodedQuery = encodeURIComponent(query);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;


    //Function for turning business card into clickable link
    const handleCardClick = () => {
        window.open(googleMapsUrl, '_blank', 'noopener', 'noreferrer');
    }
    return (
        <div className='Business' onClick={handleCardClick}>
            <img src={props.business.imageSrc} alt={props.business.name} />
            <h2>{props.business.name}</h2>
            <div className='restaurant-info'>
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
                        <li>{props.business.rating} stars</li>
                        <li>{props.business.reviewCount} reviews</li>
                    </ul>
                </div>
            </div>
        </div>
)};

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