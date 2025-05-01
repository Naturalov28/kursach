
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart, Heart } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  inStock: boolean;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  inStock
}: ProductCardProps) => {
  
  // Format price to Russian rubles
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0,
    }).format(price);
  };
  
  const discount = originalPrice 
    ? Math.round(((originalPrice - price) / originalPrice) * 100) 
    : 0;

  return (
    <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
      {/* Product Image */}
      <div className="relative h-48 bg-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain p-4"
        />
        {discount > 0 && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md">
            -{discount}%
          </span>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full p-1.5"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      <CardContent className="pt-4 pb-0">
        <div className="flex items-center mb-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < rating ? "text-yellow-500" : "text-gray-300"}>
              ★
            </span>
          ))}
        </div>
        <h3 className="font-medium line-clamp-2 mb-2 h-12">{name}</h3>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-lg font-bold text-orange-600">{formatPrice(price)}</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-4">
        <Button 
          className="w-full bg-orange-500 hover:bg-orange-600"
          disabled={!inStock}
        >
          {inStock ? (
            <>
              <ShoppingCart className="h-4 w-4 mr-2" /> В корзину
            </>
          ) : "Нет в наличии"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
