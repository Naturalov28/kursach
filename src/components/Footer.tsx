
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Амурский Быт</h3>
            <p className="text-gray-600 mb-2">
              Магазин бытовой техники и электроники
            </p>
            <p className="text-gray-600">
              г. Благовещенск, АМГУ
            </p>
            <p className="text-gray-600 mt-2">
              Телефон: +7 (4162) 12-34-56
            </p>
            <p className="text-gray-600">
              Email: info@amurskybyt.ru
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Каталог</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog?category=11" className="text-gray-600 hover:text-orange-500">
                  Телевизоры
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=21" className="text-gray-600 hover:text-orange-500">
                  Ноутбуки
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=31" className="text-gray-600 hover:text-orange-500">
                  Смартфоны
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=41" className="text-gray-600 hover:text-orange-500">
                  Холодильники
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=51" className="text-gray-600 hover:text-orange-500">
                  Микроволновки
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Сервис</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/delivery" className="text-gray-600 hover:text-orange-500">
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-gray-600 hover:text-orange-500">
                  Гарантия и сервис
                </Link>
              </li>
              <li>
                <Link to="/return" className="text-gray-600 hover:text-orange-500">
                  Возврат и обмен
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-600 hover:text-orange-500">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Амурский Быт. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
