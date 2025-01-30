import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const EquipCard = ({ sport }) => {
  const {_id, name, image, price, description, stock} = sport;
  // console.log(sport);
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={image}
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p>Price: ${price}</p>
        <p>Stock: {stock}</p>

        <div className="card-actions justify-start">
          <Link to={`/view-equip/${_id}`} className="btn btn-primary">View</Link>
        </div>
      </div>
    </div>
  );
};


EquipCard.propTypes = {
  sport: PropTypes.object,
};

export default EquipCard;