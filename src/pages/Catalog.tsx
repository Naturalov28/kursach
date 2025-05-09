
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { Product } from "@/types";
import FilterSidebar from "@/components/catalog/FilterSidebar";
import ProductGrid from "@/components/catalog/ProductGrid";
import ViewToggle from "@/components/catalog/ViewToggle";

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
  const productsPerPage = 12; // Increased to show more products per page

  // Initialize with no selected category to show all products by default
  const initialCategoryId = Number(searchParams.get('category')) || Number(searchParams.get('subcategory')) || 0;
  const [selectedCategory, setSelectedCategory] = useState<number>(0); // Default to 0 (all products)
  
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
  ) as [number, number];
  
  // Initialize price range based on available products
  useEffect(() => {
    setPriceRange(minMaxPrice);
  }, []);
  
  // Filter products based on all criteria
  useEffect(() => {
    let result = [...products];
    
    // Filter by category (but only if a category is selected)
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
      result = result.filter(product => product.originalPrice !== undefined);
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
  
  // Handle category selection from URL parameters
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
  
  // Handle price range updates
  const handlePriceRangeChange = (newRange: [number, number]) => {
    setPriceRange(newRange);
  };
  
  const handleResetFilters = () => {
    setPriceRange(minMaxPrice);
    setSelectedBrands([]);
    setSelectedYears([]);
    setInStockOnly(false);
    setDiscountOnly(false);
    setSelectedCategory(0); // Reset to show all products
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
            <ViewToggle 
              gridView={gridView}
              setGridView={setGridView}
              mobileFiltersOpen={mobileFiltersOpen}
              setMobileFiltersOpen={setMobileFiltersOpen}
            />
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters Sidebar - Hidden on mobile unless toggled */}
            <div className={`md:w-1/4 md:block ${mobileFiltersOpen ? 'block' : 'hidden'}`}>
              <FilterSidebar 
                minMaxPrice={minMaxPrice}
                priceRange={priceRange}
                setPriceRange={handlePriceRangeChange}
                availableBrands={availableBrands}
                selectedBrands={selectedBrands}
                toggleBrand={toggleBrand}
                availableYears={availableYears}
                selectedYears={selectedYears}
                toggleYear={toggleYear}
                inStockOnly={inStockOnly}
                setInStockOnly={setInStockOnly}
                discountOnly={discountOnly}
                setDiscountOnly={setDiscountOnly}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                categories={categories}
                handleResetFilters={handleResetFilters}
              />
            </div>
            
            {/* Products Grid */}
            <ProductGrid 
              gridView={gridView}
              setGridView={setGridView}
              sortBy={sortBy}
              setSortBy={setSortBy}
              filteredProducts={filteredProducts}
              currentProducts={currentProducts}
              handleResetFilters={handleResetFilters}
              pageCount={pageCount}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;
