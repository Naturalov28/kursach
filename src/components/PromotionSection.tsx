
import { Card, CardContent } from "@/components/ui/card";

const promotions = [
  {
    id: 1,
    title: "Скидка 20% на все холодильники",
    description: "Только до конца месяца!",
    bgColor: "bg-orange-500",
    textColor: "text-white"
  },
  {
    id: 2,
    title: "Рассрочка 0-0-24",
    description: "На всю крупную бытовую технику",
    bgColor: "bg-blue-500",
    textColor: "text-white"
  },
  {
    id: 3,
    title: "Подарок к покупке",
    description: "При заказе от 5000₽",
    bgColor: "bg-green-500",
    textColor: "text-white"
  }
];

const PromotionSection = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6">Акции и предложения</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {promotions.map((promo) => (
            <Card
              key={promo.id}
              className={`${promo.bgColor} shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-40`}
            >
              <CardContent className="flex flex-col justify-center h-full p-6">
                <h3 className={`${promo.textColor} text-xl font-bold mb-2`}>
                  {promo.title}
                </h3>
                <p className={`${promo.textColor} opacity-90`}>{promo.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;
