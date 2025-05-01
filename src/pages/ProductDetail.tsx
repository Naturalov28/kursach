
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Heart, ShoppingCart, Check, Star } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { useToast } from "@/hooks/use-toast";
import { Review } from "@/types";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const { addToCart } = useCart();
  const { currentUser, isAuthenticated } = useAuth();
  
  const [quantity, setQuantity] = useState(1);
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(5);
  
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-10">
          <div className="container text-center py-16">
            <h1 className="text-3xl font-bold mb-4">Товар не найден</h1>
            <p className="mb-8">Запрашиваемый товар не существует или был удален</p>
            <Link to="/catalog">
              <Button className="bg-orange-500 hover:bg-orange-600">
                Вернуться в каталог
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const category = categories.flatMap(c => c.subcategories || []).find(s => s.id === product.categoryId);
  const parentCategory = categories.find(c => c.subcategories?.some(s => s.id === product.categoryId));
  
  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      toast({
        title: "Требуется авторизация",
        description: "Для добавления отзыва необходимо войти в аккаунт",
        variant: "destructive"
      });
      return;
    }
    
    if (!reviewText.trim()) {
      toast({
        title: "Ошибка",
        description: "Текст отзыва не может быть пустым",
        variant: "destructive"
      });
      return;
    }
    
    // In a real application, we would send this to an API
    const newReview: Review = {
      id: Date.now(),
      productId: product.id,
      userId: currentUser!.id,
      userName: currentUser!.name,
      rating: reviewRating,
      comment: reviewText,
      date: new Date().toISOString()
    };
    
    // Add the review to the product's reviews array
    if (!product.reviews) {
      product.reviews = [];
    }
    product.reviews.unshift(newReview);
    
    // Update the product's rating
    const totalRating = product.reviews.reduce((sum, review) => sum + review.rating, 0);
    product.rating = Math.round((totalRating / product.reviews.length) * 10) / 10;
    
    toast({
      title: "Отзыв добавлен",
      description: "Спасибо за ваш отзыв о товаре"
    });
    
    setReviewText("");
    setReviewRating(5);
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0,
    }).format(price);
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-6">
        <div className="container max-w-7xl">
          {/* Breadcrumbs */}
          <div className="text-sm text-gray-500 mb-6">
            <Link to="/" className="hover:text-orange-500">Главная</Link> {" / "}
            <Link to="/catalog" className="hover:text-orange-500">Каталог</Link> {" / "}
            {parentCategory && (
              <>
                <Link to={`/catalog?category=${parentCategory.id}`} className="hover:text-orange-500">
                  {parentCategory.name}
                </Link> {" / "}
              </>
            )}
            {category && (
              <Link to={`/catalog?subcategory=${category.id}`} className="hover:text-orange-500">
                {category.name}
              </Link>
            )}
          </div>
          
          {/* Product Main Info */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-lg p-6 flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.name} 
                className="max-w-full max-h-96 object-contain" 
              />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">{product.name}</h1>
              
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-300"}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  {product.rating} ({product.reviewCount} отзывов)
                </span>
              </div>
              
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-bold text-orange-600">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-md">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${product.inStock ? "bg-green-500" : "bg-red-500"}`}></div>
                <span className={product.inStock ? "text-green-700" : "text-red-700"}>
                  {product.inStock ? "В наличии" : "Нет в наличии"}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-4 py-2">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-stretch gap-4 py-4">
                <div className="w-24">
                  <Input
                    type="number"
                    min="1"
                    max="99"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="h-full"
                  />
                </div>
                <Button 
                  className="flex-1 bg-orange-500 hover:bg-orange-600"
                  disabled={!product.inStock}
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" /> В корзину
                </Button>
                <Button variant="outline" className="px-4">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="text-sm space-y-2 pt-2">
                <p><span className="font-medium">Бренд:</span> {product.brand}</p>
                <p><span className="font-medium">Год выпуска:</span> {product.releaseYear}</p>
              </div>
            </div>
          </div>
          
          {/* Product Details Tabs */}
          <Tabs defaultValue="description">
            <TabsList className="bg-gray-100">
              <TabsTrigger value="description">Описание</TabsTrigger>
              <TabsTrigger value="specifications">Характеристики</TabsTrigger>
              <TabsTrigger value="reviews">Отзывы ({product.reviews?.length || 0})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="p-6 bg-white rounded-b-lg min-h-40">
              <p>{product.description}</p>
            </TabsContent>
            
            <TabsContent value="specifications" className="p-6 bg-white rounded-b-lg min-h-40">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="border-b pb-2">
                    <span className="text-gray-600">{key}: </span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="p-6 bg-white rounded-b-lg min-h-40">
              {/* Write a review section */}
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Оставить отзыв</h3>
                {isAuthenticated ? (
                  <form onSubmit={handleAddReview}>
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <label className="font-medium">Оценка:</label>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((rating) => (
                            <Star
                              key={rating}
                              className={`h-6 w-6 cursor-pointer ${
                                reviewRating >= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                              }`}
                              onClick={() => setReviewRating(rating)}
                            />
                          ))}
                        </div>
                      </div>
                      <Textarea
                        placeholder="Поделитесь своими впечатлениями о товаре..."
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        className="min-h-32"
                        required
                      />
                    </div>
                    <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
                      Опубликовать отзыв
                    </Button>
                  </form>
                ) : (
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="mb-4">Чтобы оставить отзыв, необходимо войти в аккаунт</p>
                    <Link to="/login">
                      <Button className="bg-orange-500 hover:bg-orange-600">
                        Войти
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Reviews list */}
              <div className="space-y-6">
                <h3 className="text-lg font-medium">Отзывы покупателей</h3>
                
                {(!product.reviews || product.reviews.length === 0) && (
                  <div className="text-center py-8 text-gray-500">
                    Этот товар еще не имеет отзывов. Будьте первым, кто оставит отзыв!
                  </div>
                )}
                
                {product.reviews?.map((review) => (
                  <div key={review.id} className="border-b pb-4">
                    <div className="flex justify-between mb-2">
                      <div className="font-medium">{review.userName}</div>
                      <div className="text-sm text-gray-500">
                        {new Date(review.date).toLocaleDateString('ru-RU')}
                      </div>
                    </div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < review.rating ? "text-yellow-500" : "text-gray-300"}>
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
