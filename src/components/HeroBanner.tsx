
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <div className="bg-gradient-to-r from-orange-50 to-orange-100">
      <div className="container py-12 md:py-16 px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              Техника для <span className="text-orange-500">современного дома</span>
            </h1>
            <p className="text-lg text-gray-600">
              Высококачественная бытовая техника по выгодным ценам с доставкой по всей России
            </p>
            <div className="flex gap-4">
              <Link to="/catalog">
                <Button className="bg-orange-500 hover:bg-orange-600">
                  Смотреть каталог
                </Button>
              </Link>
              <Link to="/catalog?discount=true">
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                  Акции месяца
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-64 md:h-80 overflow-hidden rounded-lg shadow-lg animate-slide-in">
            <img
              src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&q=80"
              alt="Modern kitchen appliances"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
