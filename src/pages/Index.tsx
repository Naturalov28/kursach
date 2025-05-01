
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import CategorySection from "@/components/CategorySection";
import PromotionSection from "@/components/PromotionSection";
import PopularProductsSection from "@/components/PopularProductsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroBanner />
        <CategorySection />
        <PromotionSection />
        <PopularProductsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
