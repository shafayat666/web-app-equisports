import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../layout/Root";

const ViewEquip = () => {
  const { id } = useParams();
  const { data } = useContext(DataContext);

  const product = data.find((equip) => equip._id === id);

  if (!product) {
    return <div className="p-8 text-red-500">Product not found</div>;
  }

  const { name, image, category, price, description, stock } = product;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="p-6 rounded-lg shadow-lg">
          <img
            src={image}
            alt={name}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Details Section */}
        <div className="space-y-6">
          <div>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
              {category}
            </span>
          </div>

          <h1 className="text-4xl font-bold">{name}</h1>

          <div className="text-3xl font-semibold">
            ${price}
          </div>

          <p className="text-gray-200 leading-relaxed">
            {description}
          </p>

          <div className="flex items-center space-x-2">
            <span className={`text-sm font-medium ${stock > 0 ? 'text-green-600' : 'text-red-600'
              }`}>
              {stock > 0 ? 'In Stock' : 'Out of Stock'}
            </span>
            {stock > 0 && (
              <span className="text-gray-500 text-sm">{stock} remaining</span>
            )}
          </div>

          <button
            disabled={stock === 0}
            className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${stock > 0
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
          >
            {stock > 0 ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewEquip;