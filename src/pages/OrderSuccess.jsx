import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center text-center p-8">
      <div className="text-6xl mb-4">🎉</div>

      <h1 className="text-4xl font-bold text-[#8C0649] mb-4">
        Thank You For Your Order!
      </h1>

      <p className="text-gray-600 mb-8">
        Your order has been received successfully.
      </p>

      <Link
        to="/products"
        className="bg-[#8C0649] text-white px-6 py-3 rounded-lg"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderSuccess;