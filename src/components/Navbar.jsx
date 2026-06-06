import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="flex justify-between items-center px-8 py-4">
      <h1 className="text-2xl font-bold text-[#8C0649]">Isha's Creative</h1>

      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>

        <Link to="/cart">Cart ({cartItems.length})</Link>

        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
