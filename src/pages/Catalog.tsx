
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductCard from "@/components/ProductCard";
import { Filter, Grid3X3, List } from "lucide-react";
import { useState } from "react";

// Sample products for the catalog page
const products = [
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
  },
  {
    id: 6,
    name: "Sony PlayStation 5 Digital Edition",
    price: 44990,
    originalPrice: 49990,
    image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&w=600&q=80",
    rating: 5,
    inStock: true
  },
  {
    id: 7,
    name: "Dyson V11 Absolute Беспроводной пылесос",
    price: 39990,
    originalPrice: 44990,
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=600&q=80",
    rating: 5,
    inStock: true
  },
  {
    id: 8,
    name: "Xiaomi Mi Robot Vacuum Mop Pro",
    price: 24990,
    originalPrice: 29990,
    image: "https://images.unsplash.com/photo-1593106410242-38caa68a1335?auto=format&fit=crop&w=600&q=80",
    rating: 4,
    inStock: true
  }
];

const Catalog = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [gridView, setGridView] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-6">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl md:text-3xl font-bold">Каталог товаров</h1>
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className={gridView ? "bg-orange-100" : ""}
                onClick={() => setGridView(true)}
              >
                <Grid3X3 className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={!gridView ? "bg-orange-100" : ""}
                onClick={() => setGridView(false)}
              >
                <List className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="md:hidden"
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              >
                <Filter className="h-4 w-4 mr-2" /> Фильтры
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters Sidebar - Hidden on mobile unless toggled */}
            <div className={`md:w-1/4 md:block ${mobileFiltersOpen ? 'block' : 'hidden'}`}>
              <div className="bg-white p-4 rounded-lg border shadow-sm">
                <h2 className="font-bold text-lg mb-4">Фильтры</h2>
                
                <div className="mb-4">
                  <h3 className="font-medium mb-2">Цена</h3>
                  <div className="space-y-4">
                    <Slider 
                      defaultValue={[0, 100000]} 
                      max={100000}
                      step={1000}
                      onValueChange={(value) => setPriceRange(value)}
                    />
                    <div className="flex space-x-2">
                      <Input type="number" placeholder="От" value={priceRange[0]} onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])} />
                      <Input type="number" placeholder="До" value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])} />
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="font-medium mb-2">Бренды</h3>
                  <div className="space-y-2">
                    {["Samsung", "LG", "Sony", "Apple", "Xiaomi", "Bosch"].map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox id={`brand-${brand}`} />
                        <label htmlFor={`brand-${brand}`} className="text-sm">{brand}</label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="font-medium mb-2">Наличие</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="in-stock" />
                      <label htmlFor="in-stock" className="text-sm">В наличии</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="discount" />
                      <label htmlFor="discount" className="text-sm">Со скидкой</label>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  Применить фильтры
                </Button>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-gray-500">
                  Найдено {products.length} товаров
                </div>
                <Select defaultValue="popular">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Сортировка" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">По популярности</SelectItem>
                    <SelectItem value="price-asc">По возрастанию цены</SelectItem>
                    <SelectItem value="price-desc">По убыванию цены</SelectItem>
                    <SelectItem value="rating">По рейтингу</SelectItem>
                    <SelectItem value="new">По новизне</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className={gridView ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" : "space-y-4"}>
                {products.map((product) => (
                  <div key={product.id}>
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex justify-center">
                <div className="flex space-x-1">
                  <Button variant="outline" className="h-9 w-9 p-0">1</Button>
                  <Button variant="outline" className="h-9 w-9 p-0">2</Button>
                  <Button variant="outline" className="h-9 w-9 p-0">3</Button>
                  <Button variant="outline" className="h-9 w-9 p-0">...</Button>
                  <Button variant="outline" className="h-9 w-9 p-0">10</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;
