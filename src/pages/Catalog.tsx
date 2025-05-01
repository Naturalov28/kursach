
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Filter, Grid3X3, List, ChevronDown } from "lucide-react";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { Product } from "@/types";

const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [gridView, setGridView] = useState(true);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<number[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [discountOnly, setDiscountOnly] = useState(false);
  const [sortBy, setSortBy] = useState("popular");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const initialCategoryId = Number(searchParams.get('category')) || Number(searchParams.get('subcategory')) || 0;
  const [selectedCategory, setSelectedCategory] = useState<number>(initialCategoryId);
  
  // Get unique brands from products
  const availableBrands = [...new Set(products.map(product => product.brand))].sort();
  
  // Get unique release years from products
  const availableYears = [...new Set(products.map(product => product.releaseYear))].sort((a, b) => b - a);
  
  // Find min and max price across all products
  const minMaxPrice = products.reduce(
    (acc, product) => {
      if (product.price < acc[0]) acc[0] = product.price;
      if (product.price > acc[1]) acc[1] = product.price;
      return acc;
    },
    [Number.MAX_SAFE_INTEGER, 0]
  );
  
  // Initialize price range based on available products
  useEffect(() => {
    setPriceRange(minMaxPrice);
  }, []);
  
  // Filter products based on all criteria
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory > 0) {
      result = result.filter(product => product.categoryId === selectedCategory);
    }
    
    // Filter by price range
    result = result.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Filter by selected brands
    if (selectedBrands.length > 0) {
      result = result.filter(product => selectedBrands.includes(product.brand));
    }
    
    // Filter by selected years
    if (selectedYears.length > 0) {
      result = result.filter(product => selectedYears.includes(product.releaseYear));
    }
    
    // Filter by in stock status
    if (inStockOnly) {
      result = result.filter(product => product.inStock);
    }
    
    // Filter by discount
    if (discountOnly) {
      result = result.filter(product => product.originalPrice !== null);
    }
    
    // Sort products
    switch (sortBy) {
      case "popular":
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "new":
        result.sort((a, b) => b.releaseYear - a.releaseYear);
        break;
      default:
        break;
    }
    
    setFilteredProducts(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [selectedCategory, priceRange, selectedBrands, selectedYears, inStockOnly, discountOnly, sortBy]);
  
  // Handle category selection
  useEffect(() => {
    if (initialCategoryId > 0) {
      setSelectedCategory(initialCategoryId);
    }
  }, [initialCategoryId]);
  
  // Get products for current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  
  // Calculate page count
  const pageCount = Math.ceil(filteredProducts.length / productsPerPage);
  
  // Generate pages array for pagination
  const generatePages = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (pageCount <= maxVisiblePages) {
      for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      // Calculate range of pages around current page
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(pageCount - 1, currentPage + 1);
      
      // Adjust if at the beginning or end
      if (currentPage <= 2) {
        endPage = 3;
      } else if (currentPage >= pageCount - 1) {
        startPage = pageCount - 2;
      }
      
      // Add ellipsis if needed
      if (startPage > 2) {
        pages.push('ellipsis1');
      }
      
      // Add pages in the range
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      
      // Add ellipsis if needed
      if (endPage < pageCount - 1) {
        pages.push('ellipsis2');
      }
      
      // Always show last page
      if (pageCount > 1) {
        pages.push(pageCount);
      }
    }
    
    return pages;
  };
  
  // Toggle brand selection
  const toggleBrand = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };
  
  // Toggle year selection
  const toggleYear = (year: number) => {
    if (selectedYears.includes(year)) {
      setSelectedYears(selectedYears.filter(y => y !== year));
    } else {
      setSelectedYears([...selectedYears, year]);
    }
  };
  
  // Format price to Russian rubles
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0,
    }).format(price);
  };
  
  const handleResetFilters = () => {
    setPriceRange(minMaxPrice);
    setSelectedBrands([]);
    setSelectedYears([]);
    setInStockOnly(false);
    setDiscountOnly(false);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-6">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl md:text-3xl font-bold">
              {selectedCategory > 0 
                ? (categories
                    .flatMap(c => c.subcategories || [])
                    .find(c => c.id === selectedCategory)?.name || "Каталог товаров") 
                : "Каталог товаров"}
            </h1>
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
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-bold text-lg">Фильтры</h2>
                  <Button 
                    variant="link" 
                    className="text-sm p-0 h-auto text-orange-500"
                    onClick={handleResetFilters}
                  >
                    Сбросить всё
                  </Button>
                </div>
                
                {/* Categories filter */}
                <Collapsible defaultOpen className="mb-4">
                  <CollapsibleTrigger className="flex justify-between items-center w-full mb-2">
                    <h3 className="font-medium">Категории</h3>
                    <ChevronDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="space-y-2 ml-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="all-categories"
                          checked={selectedCategory === 0}
                          onCheckedChange={() => setSelectedCategory(0)}
                        />
                        <label htmlFor="all-categories" className="text-sm">Все категории</label>
                      </div>
                      
                      {categories.flatMap(c => c.subcategories || []).map((subcat) => (
                        <div key={subcat.id} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`category-${subcat.id}`}
                            checked={selectedCategory === subcat.id}
                            onCheckedChange={() => setSelectedCategory(subcat.id)}
                          />
                          <label htmlFor={`category-${subcat.id}`} className="text-sm">{subcat.name}</label>
                        </div>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
                
                {/* Price filter */}
                <Collapsible defaultOpen className="mb-4">
                  <CollapsibleTrigger className="flex justify-between items-center w-full mb-2">
                    <h3 className="font-medium">Цена</h3>
                    <ChevronDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="space-y-4">
                      <Slider 
                        defaultValue={[minMaxPrice[0], minMaxPrice[1]]} 
                        min={minMaxPrice[0]}
                        max={minMaxPrice[1]}
                        step={1000}
                        value={[priceRange[0], priceRange[1]]}
                        onValueChange={(value) => setPriceRange([value[0], value[1]])}
                      />
                      <div className="flex space-x-2">
                        <Input 
                          type="number" 
                          placeholder="От" 
                          value={priceRange[0]} 
                          onChange={(e) => setPriceRange([parseInt(e.target.value) || minMaxPrice[0], priceRange[1]])} 
                        />
                        <Input 
                          type="number" 
                          placeholder="До" 
                          value={priceRange[1]} 
                          onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || minMaxPrice[1]])} 
                        />
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
                
                {/* Brands filter */}
                <Collapsible defaultOpen className="mb-4">
                  <CollapsibleTrigger className="flex justify-between items-center w-full mb-2">
                    <h3 className="font-medium">Бренды</h3>
                    <ChevronDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="space-y-2">
                      {availableBrands.map((brand) => (
                        <div key={brand} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`brand-${brand}`}
                            checked={selectedBrands.includes(brand)}
                            onCheckedChange={() => toggleBrand(brand)}
                          />
                          <label htmlFor={`brand-${brand}`} className="text-sm">{brand}</label>
                        </div>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
                
                {/* Years filter */}
                <Collapsible defaultOpen className="mb-4">
                  <CollapsibleTrigger className="flex justify-between items-center w-full mb-2">
                    <h3 className="font-medium">Год выпуска</h3>
                    <ChevronDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="space-y-2">
                      {availableYears.map((year) => (
                        <div key={year} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`year-${year}`}
                            checked={selectedYears.includes(year)}
                            onCheckedChange={() => toggleYear(year)}
                          />
                          <label htmlFor={`year-${year}`} className="text-sm">{year}</label>
                        </div>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
                
                {/* Availability filter */}
                <Collapsible defaultOpen className="mb-4">
                  <CollapsibleTrigger className="flex justify-between items-center w-full mb-2">
                    <h3 className="font-medium">Наличие</h3>
                    <ChevronDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="in-stock"
                          checked={inStockOnly}
                          onCheckedChange={() => setInStockOnly(!inStockOnly)}
                        />
                        <label htmlFor="in-stock" className="text-sm">В наличии</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="discount"
                          checked={discountOnly}
                          onCheckedChange={() => setDiscountOnly(!discountOnly)}
                        />
                        <label htmlFor="discount" className="text-sm">Со скидкой</label>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-gray-500">
                  Найдено {filteredProducts.length} товаров
                </div>
                <Select 
                  value={sortBy}
                  onValueChange={(value) => setSortBy(value)}
                >
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
              
              {filteredProducts.length === 0 ? (
                <div className="bg-white p-10 rounded-lg text-center">
                  <h3 className="text-lg font-medium mb-2">По вашему запросу ничего не найдено</h3>
                  <p className="text-gray-600 mb-4">Попробуйте изменить параметры фильтрации</p>
                  <Button 
                    onClick={handleResetFilters}
                    className="bg-orange-500 hover:bg-orange-600"
                  >
                    Сбросить все фильтры
                  </Button>
                </div>
              ) : (
                <div className={gridView ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" : "space-y-4"}>
                  {currentProducts.map((product) => (
                    <div key={product.id} className={!gridView ? "w-full" : ""}>
                      <ProductCard 
                        {...product} 
                        link={`/product/${product.id}`}
                      />
                    </div>
                  ))}
                </div>
              )}
              
              {/* Pagination */}
              {filteredProducts.length > 0 && (
                <div className="mt-8 flex justify-center">
                  <div className="flex space-x-1">
                    {generatePages().map((page, index) => (
                      page === 'ellipsis1' || page === 'ellipsis2' ? (
                        <Button key={`${page}-${index}`} variant="outline" className="h-9 w-9 p-0" disabled>
                          ...
                        </Button>
                      ) : (
                        <Button
                          key={`page-${page}`}
                          variant={currentPage === page ? "default" : "outline"}
                          className={`h-9 w-9 p-0 ${currentPage === page ? "bg-orange-500 hover:bg-orange-600" : ""}`}
                          onClick={() => setCurrentPage(page as number)}
                        >
                          {page}
                        </Button>
                      )
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;
