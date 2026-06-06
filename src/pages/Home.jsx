import ProductCard from "../components/ProductCard";
import { products } from "../services/products";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-24 px-8 bg-pink-50">
        <h1 className="text-5xl font-bold text-[#8C0649]">
          Premium Crochet Supplies
        </h1>

        <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
          Shop quality yarns, blocking boards and crochet accessories for
          beginners and professionals.
        </p>

        <button className="mt-8 bg-[#8C0649] text-white px-8 py-3 rounded-lg">
          Shop Now
        </button>
      </section>

      {/* Featured Products */}
      <section className="px-8 py-10">
        <h2 className="text-3xl font-bold mb-6">Featured Products</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="px-8 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Shop By Category
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold">🧶 Yarns</h3>
          </div>

          <div className="border rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold">🧰 Accessories</h3>
          </div>

          <div className="border rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold">⭐ Best Sellers</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
