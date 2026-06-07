import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  console.log("CHECKOUT PAGE LOADED");

  const { cartItems, clearCart } = useContext(CartContext);

  const navigate = useNavigate();

  const itemsTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const deliveryFee = 3000;

  const grandTotal = itemsTotal + deliveryFee;

  const handlePlaceOrder = () => {
    clearCart();
    navigate("/order-success");
  };

  console.log("Cart Items:", cartItems);
  console.log("Items Total:", itemsTotal);
  console.log("Grand Total:", grandTotal);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-[#8C0649] mb-8">Checkout</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Customer Information */}
        <div className="border rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Customer Information</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border p-3 rounded-lg"
            />

            <textarea
              placeholder="Delivery Address"
              rows="4"
              className="w-full border p-3 rounded-lg"
            ></textarea>
          </form>
        </div>

        {/* Order Summary */}
        {/* <div className="border rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

          <div className="mb-6">
            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between mb-2">
                <span>{item.name}</span>

                <span>₦{item.price.toLocaleString()}</span>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Items Total</span>
              <span>₦{itemsTotal.toLocaleString()}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>₦{deliveryFee.toLocaleString()}</span>
            </div>

            <hr />

            <div className="flex justify-between font-bold text-xl">
              <span>Total</span>

              <span className="text-[#8C0649]">
                ₦{grandTotal.toLocaleString()}
              </span>
            </div>
          </div>
          <button
            onClick={handlePlaceOrder}
            className="w-full mt-8 bg-[#8C0649] text-white py-3 rounded-lg hover:opacity-90 transition"
>
  Place Order
</button>
          
        </div> */}

        <div className="border rounded-lg p-6 shadow-sm bg-white">
          <h2 className="text-2xl font-semibold mb-6">Invoice Summary</h2>

          {/* Invoice Items */}
          <div className="space-y-3 mb-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-start border-b pb-2"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    ₦{item.price.toLocaleString()} × {item.quantity}
                  </p>
                </div>

                <p className="font-medium">
                  ₦{(item.price * item.quantity).toLocaleString()}
                </p>
              </div>
            ))}
          </div>

          {/* Calculations */}
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span>₦{itemsTotal.toLocaleString()}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Delivery Fee</span>
              <span>₦{deliveryFee.toLocaleString()}</span>
            </div>

            {/* Optional TAX (very realistic for invoices) */}
            <div className="flex justify-between">
              <span className="text-gray-600">Tax (5%)</span>
              <span>₦{Math.round(itemsTotal * 0.05).toLocaleString()}</span>
            </div>

            <hr />

            <div className="flex justify-between font-bold text-xl">
              <span>Total</span>
              <span className="text-[#8C0649]">
                ₦
                {(
                  itemsTotal +
                  deliveryFee +
                  itemsTotal * 0.05
                ).toLocaleString()}
              </span>
            </div>
          </div>

          {/* Place Order Button */}
          <button
            onClick={handlePlaceOrder}
            className="w-full mt-8 bg-[#8C0649] text-white py-3 rounded-lg hover:opacity-90 transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
