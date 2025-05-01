
import { Product } from "@/types";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Grid3X3, List } from "lucide-react";

interface ProductGridProps {
  gridView: boolean;
  setGridView: (value: boolean) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
  filteredProducts: Product[];
  currentProducts: Product[];
  handleResetFilters: () => void;
  pageCount: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const ProductGrid = ({
  gridView,
  setGridView,
  sortBy,
  setSortBy,
  filteredProducts,
  currentProducts,
  handleResetFilters,
  pageCount,
  currentPage,
  setCurrentPage
}: ProductGridProps) => {
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

  return (
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
  );
};

export default ProductGrid;
