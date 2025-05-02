
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Category } from "@/types";

interface FilterSidebarProps {
  minMaxPrice: [number, number];
  priceRange: [number, number];
  setPriceRange: (value: [number, number]) => void;
  availableBrands: string[];
  selectedBrands: string[];
  toggleBrand: (brand: string) => void;
  availableYears: number[];
  selectedYears: number[];
  toggleYear: (year: number) => void;
  inStockOnly: boolean;
  setInStockOnly: (value: boolean) => void;
  discountOnly: boolean;
  setDiscountOnly: (value: boolean) => void;
  selectedCategory: number;
  setSelectedCategory: (id: number) => void;
  categories: Category[];
  handleResetFilters: () => void;
}

const FilterSidebar = ({
  minMaxPrice,
  priceRange,
  setPriceRange,
  availableBrands,
  selectedBrands,
  toggleBrand,
  availableYears,
  selectedYears,
  toggleYear,
  inStockOnly,
  setInStockOnly,
  discountOnly,
  setDiscountOnly,
  selectedCategory,
  setSelectedCategory,
  categories,
  handleResetFilters,
}: FilterSidebarProps) => {
  // Get all subcategories for filtering
  const allSubcategories = categories ? 
    categories.flatMap(c => c.subcategories || []) : 
    [];

  return (
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
            
            {allSubcategories.map((subcat) => (
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
  );
};

export default FilterSidebar;
