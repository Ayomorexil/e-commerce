import ProductCard from "../components/ProductCard";
import { products } from "../services/products";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="bg-pink-50">

      {/* HERO SECTION */}
      <section className="relative text-center py-28 px-8 overflow-hidden">

        {/* Background glow */}
        <div className="absolute w-[400px] h-[400px] bg-[#8C0649]/20 blur-3xl rounded-full top-10 left-10"></div>
        <div className="absolute w-[300px] h-[300px] bg-pink-300/30 blur-3xl rounded-full bottom-10 right-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#8C0649]">
            Isha's Creative <br />
            Premium Crochet Supplies
          </h1>

          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
            Shop quality yarns, blocking boards and crochet accessories for
            beginners and professionals.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-[#8C0649] text-white px-8 py-3 rounded-xl shadow-md"
          >
            Shop Now
          </motion.button>
        </motion.div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="px-8 py-14">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8"
        >
          Featured Products
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="px-8 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10 text-center"
        >
          Shop By Category
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            { title: "🧶 Yarns" },
            { title: "🧰 Accessories" },
            { title: "⭐ Best Sellers" },
          ].map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/40 backdrop-blur-xl border border-white/30 rounded-xl p-10 text-center shadow-sm cursor-pointer"
            >
              <h3 className="text-xl font-semibold">{cat.title}</h3>
            </motion.div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default Home;