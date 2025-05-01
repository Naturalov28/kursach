
import { Button } from "@/components/ui/button";
import { Grid3X3, List, Filter } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Category } from "@/types";

interface ViewToggleProps {
  gridView: boolean;
  setGridView: (value: boolean) => void;
  mobileFiltersOpen: boolean;
  setMobileFiltersOpen: (value: boolean) => void;
  currentCategory: number | null;
  setCurrentCategory: (value: number | null) => void;
  categories: Category[];
}

const ViewToggle = ({
  gridView,
  setGridView,
  mobileFiltersOpen,
  setMobileFiltersOpen,
  currentCategory,
  setCurrentCategory,
  categories
}: ViewToggleProps) => {
  return (
    <div className="flex flex-col space-y-4 w-full">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <Button
            variant="ghost"
            size="icon"
            className={gridView ? "bg-orange-100 text-orange-600" : ""}
            onClick={() => setGridView(true)}
            title="Отображение сеткой"
          >
            <Grid3X3 className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={!gridView ? "bg-orange-100 text-orange-600" : ""}
            onClick={() => setGridView(false)}
            title="Отображение списком"
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
      
      <div className="w-full overflow-x-auto">
        <Tabs 
          value={currentCategory ? currentCategory.toString() : "all"}
          onValueChange={(value) => setCurrentCategory(value === "all" ? null : Number(value))}
          className="w-full"
        >
          <TabsList className="w-full justify-start border-b">
            <TabsTrigger value="all" className="data-[state=active]:bg-orange-100 data-[state=active]:text-orange-600">
              Все товары
            </TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id.toString()}
                className="data-[state=active]:bg-orange-100 data-[state=active]:text-orange-600"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default ViewToggle;
