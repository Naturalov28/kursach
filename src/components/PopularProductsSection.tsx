
import ProductCard from "./ProductCard";

const popularProducts = [
  {
    id: 1,
    name: "Samsung Crystal UHD 4K Smart TV 55\"",
    price: 49990,
    originalPrice: 59990,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
    rating: 4,
    inStock: true
  },
  {
    id: 2,
    name: "Apple iPhone 14 Pro 128GB",
    price: 89990,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1592750475351-4c9242c8f9cf?auto=format&fit=crop&w=600&q=80",
    rating: 5,
    inStock: true
  },
  {
    id: 3,
    name: "LG Стиральная машина AI DD 10.5 кг",
    price: 54990,
    originalPrice: 64990,
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=600&q=80",
    rating: 4,
    inStock: true
  },
  {
    id: 4,
    name: "ASUS TUF Gaming F15 Laptop",
    price: 79990,
    originalPrice: 89990,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80",
    rating: 4,
    inStock: true
  },
  {
    id: 5,
    name: "Bosch Микроволновая печь с грилем",
    price: 16990,
    originalPrice: 19990,
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=600&q=80",
    rating: 4,
    inStock: false
  }
];

const PopularProductsSection = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Популярные товары</h2>
          <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">
            Смотреть все
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {popularProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProductsSection;
