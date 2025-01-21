import Business from "./Business";
import PropTypes from "prop-types";


const BusinessList = ({businesses}) => (
    <div className="BusinessList">
        {businesses.map((business, index) => {
            return <Business key={index} business={business} />;
        })}
    </div>
);

BusinessList.propTypes = {
    businesses: PropTypes.arrayOf(
      PropTypes.shape({
        imageSrc: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        address: PropTypes.string,
        city: PropTypes.string,
        state: PropTypes.string,
        zipCode: PropTypes.string,
        category: PropTypes.string,
        rating: PropTypes.number,
        reviewCount: PropTypes.number,
      })
    ).isRequired,
  };

export default BusinessList;