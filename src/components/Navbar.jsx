import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import logoicon from "../assets/logoicon.png";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const { cartItems = [] } = useContext(CartContext);

  const [animate, setAnimate] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Scroll effect (glass navbar)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Cart animation
  useEffect(() => {
    if (cartItems.length > 0) {
      setAnimate(true);

      const timer = setTimeout(() => {
        setAnimate(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [cartItems.length]);

  return (
    <nav
      className={`flex justify-between items-center px-8 py-4 sticky top-0 z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-pink-50 backdrop-blur-md shadow-md border-b border-pink-100"
          : "bg-pink-50 backdrop-blur-sm"
      }`}
    >
      {/* LOGO */}
      <Link to="/" className="flex items-center">
        <img src={logoicon} alt="logo" className="h-14 w-auto object-contain" />
      </Link>

      {/* DESKTOP LINKS */}
      <div className="hidden md:flex gap-8 text-gray-700 font-medium items-center">
        <Link className="hover:text-[#8C0649]" to="/">Home</Link>
        <Link className="hover:text-[#8C0649]" to="/products">Products</Link>

        {/* CART */}
        <Link className="relative flex items-center gap-1 hover:text-[#8C0649]" to="/cart">
          <ShoppingCartIcon className="h-6 w-6" />

          <span
            className={`absolute -top-2 -right-3 bg-[#8C0649] text-white text-xs rounded-full px-2
            transition-all duration-300
            ${animate ? "scale-125 animate-bounce" : "scale-100"}`}
          >
            {cartItems.length}
          </span>
        </Link>

        <Link className="hover:text-[#8C0649]" to="/login">
          Login
        </Link>
      </div>

      {/* HAMBURGER (MOBILE) */}
      <button
        className="md:hidden text-[#8C0649] text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* MOBILE GLASS MENU */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-pink-50/70 backdrop-blur-xl border-b border-pink-100 shadow-lg md:hidden">
          <div className="flex flex-col items-center gap-6 py-6 text-[#8C0649] font-medium">
            <Link onClick={() => setMenuOpen(false)} to="/">Home</Link>
            <Link onClick={() => setMenuOpen(false)} to="/products">Products</Link>
            <Link onClick={() => setMenuOpen(false)} to="/cart">
              Cart ({cartItems.length})
            </Link>
            <Link onClick={() => setMenuOpen(false)} to="/login">Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;