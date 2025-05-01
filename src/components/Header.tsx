
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  User,
  Search,
  Menu,
  X,
  Heart,
  Package,
  LogOut,
  UserCircle
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { categories } from "@/data/categories";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const { getTotalItems } = useCart();
  const { currentUser, isAuthenticated, logout } = useAuth();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/catalog?search=${encodeURIComponent(searchQuery)}`);
    }
  };
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      {/* Top Header */}
      <div className="container flex items-center justify-between py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-orange-500">Амурский Быт</span>
        </Link>

        {/* Search Box - Hidden on Mobile */}
        {!isMobile && (
          <div className="flex-1 mx-8">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Поиск товаров..."
                className="w-full pl-3 pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                type="submit"
                className="absolute right-0 top-0 h-full px-3 bg-orange-500 hover:bg-orange-600" 
                variant="default"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>
        )}

        {/* Right Side Icons */}
        <div className="flex items-center space-x-3">
          {!isMobile && (
            <>
              <Button variant="ghost" size="icon" className="nav-link">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="nav-link">
                <Package className="h-5 w-5" />
              </Button>
            </>
          )}
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="nav-link">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {isAuthenticated ? (
                <>
                  <DropdownMenuLabel className="flex items-center gap-2">
                    <UserCircle className="h-5 w-5" />
                    <span>{currentUser?.name}</span>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile">Профиль</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/orders">Мои заказы</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/wishlist">Избранное</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-500" onClick={logout}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Выйти
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuLabel>Аккаунт</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/login">Войти</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/register">Зарегистрироваться</Link>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative nav-link">
              <ShoppingCart className="h-5 w-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Button>
          </Link>
          
          {isMobile && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="nav-link"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          )}
        </div>
      </div>

      {/* Main Navigation - Hidden on Mobile when menu is closed */}
      {(!isMobile || showMobileMenu) && (
        <nav className="bg-gray-50 py-2">
          <div className="container">
            <ul className={`flex ${isMobile ? 'flex-col space-y-2' : 'flex-row space-x-6'}`}>
              {categories.map((category) => (
                <li key={category.name}>
                  <Link 
                    to={`/catalog?category=${category.id}`} 
                    className="nav-link font-medium"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
      
      {/* Mobile Search - Only shown on mobile */}
      {isMobile && showMobileMenu && (
        <div className="container py-3 bg-white">
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="text"
              placeholder="Поиск товаров..."
              className="w-full pl-3 pr-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button 
              type="submit"
              className="absolute right-0 top-0 h-full px-3 bg-orange-500 hover:bg-orange-600" 
              variant="default"
            >
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;
