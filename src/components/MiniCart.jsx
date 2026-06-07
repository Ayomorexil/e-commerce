import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function MiniCart() {
  const { cartItems, isCartOpen, toggleCart, removeFromCart } =
    useContext(CartContext);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={toggleCart}
        className={`fixed inset-0 bg-black/40 transition-opacity ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Cart Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300
        ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <button onClick={toggleCart}>✕</button>
        </div>

        <div className="p-4 space-y-3 overflow-y-auto h-[calc(100%-60px)]">
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border p-2 rounded"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">₦{item.price}</p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}