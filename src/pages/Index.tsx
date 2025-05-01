
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import CategorySection from "@/components/CategorySection";
import PromotionSection from "@/components/PromotionSection";
import PopularProductsSection from "@/components/PopularProductsSection";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/catalog?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroBanner />
        
        {/* Search bar section */}
        <div className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-4">Найдите необходимую бытовую технику</h2>
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="text"
                  placeholder="Введите название товара..."
                  className="w-full pl-4 pr-12 py-3 text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button 
                  type="submit"
                  className="absolute right-0 top-0 h-full px-4 bg-orange-500 hover:bg-orange-600" 
                  variant="default"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        <CategorySection />
        <PromotionSection />
        <PopularProductsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
