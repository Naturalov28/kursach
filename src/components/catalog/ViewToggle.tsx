
import { Button } from "@/components/ui/button";
import { Grid3X3, List, Filter } from "lucide-react";

interface ViewToggleProps {
  gridView: boolean;
  setGridView: (value: boolean) => void;
  mobileFiltersOpen: boolean;
  setMobileFiltersOpen: (value: boolean) => void;
}

const ViewToggle = ({
  gridView,
  setGridView,
  mobileFiltersOpen,
  setMobileFiltersOpen
}: ViewToggleProps) => {
  return (
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
  );
};

export default ViewToggle;
