
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ViewToggle from "@/components/catalog/ViewToggle";
import FilterSidebar from "@/components/catalog/FilterSidebar";
import ProductGrid from "@/components/catalog/ProductGrid";
import { Product } from "@/types";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [gridView, setGridView] = useState(true);
  const [sortBy, setSortBy] = useState("popular");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<number | null>(null);
  
  // Filter states
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<number[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const productsPerPage = 12;

  // Parse URL search parameters
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    const searchParam = searchParams.get("search");
    const brandParam = searchParams.get("brand");
    const yearParam = searchParams.get("year");
    const minPriceParam = searchParams.get("minPrice");
    const maxPriceParam = searchParams.get("maxPrice");
    const inStockParam = searchParams.get("inStock");
    const sortParam = searchParams.get("sort");
    const pageParam = searchParams.get("page");
    
    if (categoryParam) {
      setCurrentCategory(parseInt(categoryParam));
    }
    
    if (searchParam) {
      setSearchQuery(searchParam);
    }
    
    if (brandParam) {
      setSelectedBrands(brandParam.split(","));
    }
    
    if (yearParam) {
      setSelectedYears(yearParam.split(",").map(y => parseInt(y)));
    }
    
    if (minPriceParam && maxPriceParam) {
      setPriceRange([parseInt(minPriceParam), parseInt(maxPriceParam)]);
    }
    
    if (inStockParam === "true") {
      setInStockOnly(true);
    }
    
    if (sortParam) {
      setSortBy(sortParam);
    }
    
    if (pageParam) {
      setCurrentPage(parseInt(pageParam));
    }
  }, [searchParams]);

  // Apply filters and update URL
  useEffect(() => {
    let filtered = [...products];
    
    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Filter by category
    if (currentCategory !== null) {
      filtered = filtered.filter(product => product.categoryId === currentCategory);
    }
    
    // Filter by price range
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Filter by brands
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product => selectedBrands.includes(product.brand));
    }
    
    // Filter by years
    if (selectedYears.length > 0) {
      filtered = filtered.filter(product => selectedYears.includes(product.releaseYear));
    }
    
    // Filter by availability
    if (inStockOnly) {
      filtered = filtered.filter(product => product.inStock);
    }
    
    // Apply sorting
    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "new":
        filtered.sort((a, b) => b.releaseYear - a.releaseYear);
        break;
      case "popular":
      default:
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
    }
    
    setFilteredProducts(filtered);
    
    // Reset to first page if filters change
    if (currentPage !== 1) {
      setCurrentPage(1);
    }
    
    // Update URL with filter parameters
    const params = new URLSearchParams();
    
    if (currentCategory !== null) {
      params.set("category", currentCategory.toString());
    }
    
    if (searchQuery) {
      params.set("search", searchQuery);
    }
    
    if (selectedBrands.length > 0) {
      params.set("brand", selectedBrands.join(","));
    }
    
    if (selectedYears.length > 0) {
      params.set("year", selectedYears.join(","));
    }
    
    if (priceRange[0] > 0 || priceRange[1] < 200000) {
      params.set("minPrice", priceRange[0].toString());
      params.set("maxPrice", priceRange[1].toString());
    }
    
    if (inStockOnly) {
      params.set("inStock", "true");
    }
    
    if (sortBy !== "popular") {
      params.set("sort", sortBy);
    }
    
    if (currentPage > 1) {
      params.set("page", currentPage.toString());
    }
    
    setSearchParams(params);
  }, [currentCategory, priceRange, selectedBrands, selectedYears, inStockOnly, searchQuery, sortBy, setSearchParams]);
  
  // Calculate pagination
  const pageCount = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);
  
  // Get unique brands and years for filters
  const uniqueBrands = Array.from(new Set(products.map(product => product.brand)));
  const uniqueYears = Array.from(new Set(products.map(product => product.releaseYear))).sort((a, b) => b - a);
  
  // Price range
  const minPrice = Math.min(...products.map(product => product.price));
  const maxPrice = Math.max(...products.map(product => product.price));
  
  // Reset filters
  const handleResetFilters = () => {
    setPriceRange([minPrice, maxPrice]);
    setSelectedBrands([]);
    setSelectedYears([]);
    setInStockOnly(false);
    setSearchQuery("");
    setCurrentCategory(null);
    setSortBy("popular");
    setCurrentPage(1);
  };
  
  // Update filters
  const handleUpdateFilters = (
    newPriceRange: [number, number],
    newSelectedBrands: string[],
    newSelectedYears: number[],
    newInStockOnly: boolean
  ) => {
    setPriceRange(newPriceRange);
    setSelectedBrands(newSelectedBrands);
    setSelectedYears(newSelectedYears);
    setInStockOnly(newInStockOnly);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container py-6">
        <h1 className="text-2xl font-bold mb-6">Каталог товаров</h1>
        
        <div className="mb-6">
          <ViewToggle 
            gridView={gridView}
            setGridView={setGridView}
            mobileFiltersOpen={mobileFiltersOpen}
            setMobileFiltersOpen={setMobileFiltersOpen}
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
            categories={categories}
          />
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          <FilterSidebar
            mobileFiltersOpen={mobileFiltersOpen}
            setMobileFiltersOpen={setMobileFiltersOpen}
            priceRange={priceRange}
            selectedBrands={selectedBrands}
            selectedYears={selectedYears}
            inStockOnly={inStockOnly}
            uniqueBrands={uniqueBrands}
            uniqueYears={uniqueYears}
            minPrice={minPrice}
            maxPrice={maxPrice}
            onUpdateFilters={handleUpdateFilters}
            onResetFilters={handleResetFilters}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          
          <ProductGrid
            gridView={gridView}
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Catalog;
