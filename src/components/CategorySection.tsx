
import { 
  Tv, 
  Laptop, 
  Smartphone, 
  Refrigerator, 
  Microwave, 
  Headphones
} from "lucide-react";

const categoryItems = [
  {
    name: "Телевизоры",
    icon: Tv,
    description: "Smart TV, LED, OLED"
  },
  {
    name: "Ноутбуки",
    icon: Laptop,
    description: "Игровые, офисные, ультрабуки"
  },
  {
    name: "Смартфоны",
    icon: Smartphone,
    description: "Apple, Samsung, Xiaomi"
  },
  {
    name: "Холодильники",
    icon: Refrigerator,
    description: "1-, 2-камерные, Side-by-side"
  },
  {
    name: "Микроволновки",
    icon: Microwave,
    description: "С грилем, соло, встраиваемые"
  },
  {
    name: "Аудиотехника",
    icon: Headphones,
    description: "Наушники, колонки, саундбары"
  }
];

const CategorySection = () => {
  return (
    <section className="py-10">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6">Категории товаров</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categoryItems.map((category) => (
            <a 
              key={category.name} 
              href="#" 
              className="category-card group"
            >
              <div className="bg-orange-50 p-4 rounded-full mb-3 group-hover:bg-orange-100 transition-colors">
                <category.icon className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="font-medium">{category.name}</h3>
              <p className="text-sm text-gray-500 text-center">{category.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
