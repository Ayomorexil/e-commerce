import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../services/products";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
const [sortOption, setSortOption] = useState("default");
const filteredProducts = products.filter((product) => {
  const matchesSearch = product.name
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  const matchesCategory =
    selectedCategory === "All" ||
    product.category === selectedCategory;

  return matchesSearch && matchesCategory;
});
const sortedProducts = [...filteredProducts];

if (sortOption === "low-high") {
  sortedProducts.sort((a, b) => a.price - b.price);
}

if (sortOption === "high-low") {
  sortedProducts.sort((a, b) => b.price - a.price);
}

if (sortOption === "a-z") {
  sortedProducts.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
}
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Crochet Supplies
      </h1>

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-3 rounded w-full mb-6"
      />
      <div className="flex gap-4 mb-6">
  <button
    onClick={() => setSelectedCategory("All")}
    className={`px-4 py-2 rounded-lg transition ${
      selectedCategory === "All"
        ? "bg-[#8C0649] text-white"
        : "bg-gray-100 hover:bg-gray-200"
    }`}
  >
    All
  </button>

  <button
    onClick={() => setSelectedCategory("Yarns")}
    className={`px-4 py-2 rounded-lg transition ${
      selectedCategory === "Yarns"
        ? "bg-[#8C0649] text-white"
        : "bg-pink-100 hover:bg-pink-200"
    }`}
  >
    🧶 Yarns
  </button>

  <button
    onClick={() => setSelectedCategory("Accessories")}
    className={`px-4 py-2 rounded-lg transition ${
      selectedCategory === "Accessories"
        ? "bg-[#8C0649] text-white"
        : "bg-purple-100 hover:bg-purple-200"
    }`}
  >
    🧰 Accessories
  </button>
</div>

<div className="flex justify-between items-center mb-6">
  <p className="text-gray-600">
    Showing {filteredProducts.length} product
    {filteredProducts.length !== 1 ? "s" : ""}
  </p>

  
</div>


<div className="mb-6">
  <select
    value={sortOption}
    onChange={(e) => setSortOption(e.target.value)}
    className="border rounded-lg p-2"
  >
    <option value="default">Sort Products</option>
    <option value="low-high">Price: Low to High</option>
    <option value="high-low">Price: High to Low</option>
    <option value="a-z">Name: A-Z</option>
  </select>
</div>

      <div className="grid md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;