
import { Link } from "react-router-dom";
import { 
  Tv, 
  Laptop, 
  Smartphone, 
  Refrigerator, 
  Microwave, 
  Thermometer
} from "lucide-react";
import { categories } from "@/data/categories";

const categoryIcons = {
  "tv": Tv,
  "laptop": Laptop,
  "smartphone": Smartphone,
  "refrigerator": Refrigerator,
  "microwave": Microwave,
  "thermometer": Thermometer
};

type IconName = keyof typeof categoryIcons;

const CategorySection = () => {
  return (
    <section className="py-10">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6">Категории товаров</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const IconComponent = categoryIcons[category.icon as IconName] || Tv;
            
            return (
              <Link 
                key={category.name} 
                to={`/catalog?category=${category.id}`}
                className="category-card group flex flex-col items-center p-4 rounded-lg border border-transparent hover:border-orange-200 hover:bg-orange-50 transition-colors text-center"
              >
                <div className="bg-orange-50 p-4 rounded-full mb-3 group-hover:bg-orange-100 transition-colors">
                  <IconComponent className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-medium">{category.name}</h3>
                <p className="text-sm text-gray-500 text-center">{category.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
