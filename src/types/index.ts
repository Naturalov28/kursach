
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  categoryId: number;
  brand: string;
  releaseYear: number;
  features: string[];
  specifications: Record<string, string>;
  reviews?: Review[];
}

export interface Category {
  id: number;
  name: string;
  icon: string;
  description: string;
  subcategories?: Category[];
}

export interface Review {
  id: number;
  productId: number;
  userId: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  wishlist: number[];
}

export interface CartItem {
  productId: number;
  quantity: number;
}
