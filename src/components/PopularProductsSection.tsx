
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

const PopularProductsSection = () => {
  const [popularProducts, setPopularProducts] = useState(products.slice(0, 5));
  
  // Shuffle products every 60 seconds to simulate rotation
  useEffect(() => {
    // Initial shuffle
    shuffleProducts();
    
    const interval = setInterval(() => {
      shuffleProducts();
    }, 60000); // Every minute
    
    return () => clearInterval(interval);
  }, []);
  
  const shuffleProducts = () => {
    // Create a shuffled copy of products
    const shuffled = [...products]
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);
    
    setPopularProducts(shuffled);
  };
  
  return (
    <section className="py-10">
      <div className="container">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Популярные товары</h2>
          <Link to="/catalog" className="text-orange-500 hover:text-orange-600 font-medium">
            Смотреть все
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {popularProducts.map(product => (
            <ProductCard 
              key={product.id} 
              {...product} 
              link={`/product/${product.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProductsSection;
