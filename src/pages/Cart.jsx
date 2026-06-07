import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    addToCart,
    decreaseQuantity,
    removeFromCart,
  } = useContext(CartContext);

  // ✅ correct total (includes quantity)
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-[#8C0649]">
        Shopping Cart
      </h1>

      {/* EMPTY CART */}
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          {/* CART ITEMS */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4 border-b pb-3"
            >
              {/* PRODUCT INFO */}
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-gray-600">
                  ₦{item.price.toLocaleString()}
                </p>
              </div>

              {/* QUANTITY CONTROLS */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>

                <span className="font-semibold">
                  {item.quantity}
                </span>

                <button
                  onClick={() => addToCart(item)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              {/* REMOVE BUTTON */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline ml-4"
              >
                Remove
              </button>
            </div>
          ))}

          {/* TOTAL SECTION */}
          <div className="mt-8 border-t pt-4">
            <h2 className="text-2xl font-bold">
              Total: ₦{total.toLocaleString()}
            </h2>
          </div>

          {/* CHECKOUT BUTTON */}
          <Link
            to="/checkout"
            className="inline-block mt-6 bg-[#8C0649] text-white px-6 py-3 rounded-lg hover:opacity-90"
          >
            Proceed to Checkout
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;