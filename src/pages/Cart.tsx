
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus, Trash2, ArrowRight, ShoppingBasket } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { products } from "@/data/products";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();
  const { toast } = useToast();
  const [promoCode, setPromoCode] = useState("");
  
  // Filter products to only those in the cart
  const cartProducts = products.filter(product => 
    items.some(item => item.productId === product.id)
  );
  
  const handlePromoCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Промокод не применён",
      description: "Такой промокод не существует или больше не действует",
      variant: "destructive"
    });
    setPromoCode("");
  };
  
  const handleCheckout = () => {
    toast({
      title: "Оформление заказа",
      description: "Функция оформления заказа находится в разработке",
    });
  };
  
  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-10">
          <div className="container max-w-5xl">
            <h1 className="text-2xl font-bold mb-6">Корзина</h1>
            <div className="bg-white rounded-lg shadow p-10 text-center">
              <ShoppingBasket className="mx-auto h-16 w-16 text-gray-400 mb-4" />
              <h2 className="text-xl font-medium mb-2">Ваша корзина пуста</h2>
              <p className="text-gray-600 mb-6">
                Добавьте товары в корзину, чтобы оформить заказ
              </p>
              <Link to="/catalog">
                <Button className="bg-orange-500 hover:bg-orange-600">
                  Перейти в каталог
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-10">
        <div className="container max-w-5xl">
          <h1 className="text-2xl font-bold mb-6">Корзина</h1>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {cartProducts.map(product => {
                const cartItem = items.find(item => item.productId === product.id)!;
                
                return (
                  <div 
                    key={product.id} 
                    className="flex flex-col sm:flex-row gap-4 p-4 bg-white rounded-lg shadow-sm mb-4"
                  >
                    <div className="w-full sm:w-32 h-32 bg-gray-100 rounded flex items-center justify-center">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="max-w-full max-h-full object-contain p-2" 
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row justify-between gap-2">
                        <Link to={`/product/${product.id}`} className="font-medium hover:text-orange-500">
                          {product.name}
                        </Link>
                        <div className="font-bold text-orange-600">
                          {new Intl.NumberFormat('ru-RU', {
                            style: 'currency',
                            currency: 'RUB',
                            maximumFractionDigits: 0,
                          }).format(product.price)}
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-600 mb-4">
                        {product.brand}, {product.specifications["Экран"] || product.specifications["Объём"] || product.specifications["Общий объем"] || ""}
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center border rounded">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8"
                            onClick={() => updateQuantity(product.id, cartItem.quantity - 1)}
                            disabled={cartItem.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <Input
                            className="w-12 h-8 border-0 text-center p-0"
                            type="number"
                            min="1"
                            value={cartItem.quantity}
                            onChange={(e) => updateQuantity(product.id, parseInt(e.target.value) || 1)}
                          />
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8"
                            onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="text-gray-500 hover:text-red-500"
                          onClick={() => removeFromCart(product.id)}
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
              
              <div className="flex justify-between mt-4">
                <Button 
                  variant="outline" 
                  className="text-gray-600"
                  onClick={clearCart}
                >
                  Очистить корзину
                </Button>
                <Link to="/catalog">
                  <Button variant="link" className="text-orange-500">
                    Продолжить покупки
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="font-bold text-lg mb-4">Сумма заказа</h2>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Товары ({items.reduce((acc, item) => acc + item.quantity, 0)} шт.)</span>
                  <span>
                    {new Intl.NumberFormat('ru-RU', {
                      style: 'currency',
                      currency: 'RUB',
                      maximumFractionDigits: 0,
                    }).format(getTotalPrice(products))}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Доставка</span>
                  <span>Бесплатно</span>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="flex justify-between font-bold mb-6">
                <span>Итого</span>
                <span className="text-xl text-orange-600">
                  {new Intl.NumberFormat('ru-RU', {
                    style: 'currency',
                    currency: 'RUB',
                    maximumFractionDigits: 0,
                  }).format(getTotalPrice(products))}
                </span>
              </div>
              
              <form onSubmit={handlePromoCodeSubmit} className="mb-4">
                <div className="flex items-stretch gap-2">
                  <Input
                    placeholder="Промокод"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <Button type="submit" className="shrink-0">
                    Применить
                  </Button>
                </div>
              </form>
              
              <Button 
                className="w-full bg-orange-500 hover:bg-orange-600"
                onClick={handleCheckout}
              >
                Оформить заказ <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
