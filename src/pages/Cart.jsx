import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  console.log(total);
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="border p-4 rounded mb-4">
              <h2 className="font-semibold">{item.name}</h2>

              <p>{item.category}</p>

              <p className="text-[#8C0649] font-bold">
                ₦{item.price.toLocaleString()}
              </p>
            </div>
          ))}

          <div className="mt-8 border-t pt-4 bg-gray-300">
            <h2 className="text-2xl font-bold">
              Total: ₦{total.toLocaleString()}
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
