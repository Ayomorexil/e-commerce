import { products } from "../services/products";
import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Crochet Supplies</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
