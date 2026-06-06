import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <Link to={`/product/${product.id}`}>
      <div className="border rounded-lg p-4">
        <div className="h-48 bg-gray-200 rounded"></div>

        <h2 className="font-semibold mt-3">{product.name}</h2>

        <p>{product.category}</p>

        <p className="font-bold text-[#8C0649]">
          ₦{product.price.toLocaleString()}
        </p>

        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className="mt-3 px-4 py-2 bg-[#8C0649] text-white rounded"
        >
          Add To Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
