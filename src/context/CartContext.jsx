import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };
const removeFromCart = (indexToRemove) => {
  setCartItems((prev) =>
    prev.filter((_, index) => index !== indexToRemove)
  );
};
  return (
    <CartContext.Provider
     value={{
  cartItems,
  addToCart,
  removeFromCart,
}}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
