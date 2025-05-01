
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  User,
  Search,
  Menu,
  X,
  Heart,
  Package
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

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const isMobile = useIsMobile();

  const categories = [
    { name: "Телевизоры и аудио", link: "#" },
    { name: "Компьютеры и ноутбуки", link: "#" },
    { name: "Смартфоны и планшеты", link: "#" },
    { name: "Бытовая техника", link: "#" },
    { name: "Кухонная техника", link: "#" },
    { name: "Аксессуары", link: "#" },
  ];
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      {/* Top Header */}
      <div className="container flex items-center justify-between py-2">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <span className="text-2xl font-bold text-orange-500">ТехноМир</span>
        </a>

        {/* Search Box - Hidden on Mobile */}
        {!isMobile && (
          <div className="flex-1 mx-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="Поиск товаров..."
                className="w-full pl-3 pr-10"
              />
              <Button 
                className="absolute right-0 top-0 h-full px-3 bg-orange-500 hover:bg-orange-600" 
                variant="default"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
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
              <DropdownMenuLabel>Аккаунт</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Войти</DropdownMenuItem>
              <DropdownMenuItem>Зарегистрироваться</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Мои заказы</DropdownMenuItem>
              <DropdownMenuItem>Настройки профиля</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="ghost" size="icon" className="relative nav-link">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </Button>
          
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
                  <a href={category.link} className="nav-link font-medium">
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
      
      {/* Mobile Search - Only shown on mobile */}
      {isMobile && showMobileMenu && (
        <div className="container py-3 bg-white">
          <div className="relative">
            <Input
              type="text"
              placeholder="Поиск товаров..."
              className="w-full pl-3 pr-10"
            />
            <Button 
              className="absolute right-0 top-0 h-full px-3 bg-orange-500 hover:bg-orange-600" 
              variant="default"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
