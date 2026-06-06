import { useParams } from "react-router-dom";
import { products } from "../services/products";

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image Placeholder */}
        <div className="h-96 bg-gray-200 rounded-lg"></div>

        {/* Product Info */}
        <div>
          <h1 className="text-4xl font-bold">{product.name}</h1>

          <p className="mt-4 text-gray-600">Category: {product.category}</p>

          <p className="mt-4 text-2xl font-bold text-[#8C0649]">
            ₦{product.price.toLocaleString()}
          </p>

          <button className="mt-6 px-6 py-3 bg-[#8C0649] text-white rounded-lg">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
