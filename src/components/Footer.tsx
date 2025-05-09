
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">ТехноМир</h3>
            <p className="text-gray-300 mb-4">
              Ваш надежный магазин бытовой техники и электроники
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z" opacity="0.2" />
                  <path d="M15.6 12C15.6 13.985 13.985 15.6 12 15.6C10.015 15.6 8.4 13.985 8.4 12C8.4 10.015 10.015 8.4 12 8.4C13.985 8.4 15.6 10.015 15.6 12Z" />
                  <path d="M16.8 8.222C16.8 8.779 16.356 9.222 15.8 9.222C15.243 9.222 14.8 8.779 14.8 8.222C14.8 7.664 15.243 7.222 15.8 7.222C16.356 7.222 16.8 7.664 16.8 8.222Z" />
                  <path d="M12 6C10.61 6 10.392 6.006 9.797 6.045C9.204 6.084 8.788 6.189 8.427 6.347C8.053 6.51 7.742 6.73 7.433 7.039C7.124 7.348 6.906 7.658 6.742 8.033C6.583 8.394 6.479 8.81 6.44 9.402C6.402 9.998 6.397 10.216 6.397 11.606C6.397 12.996 6.403 13.214 6.442 13.809C6.481 14.402 6.586 14.819 6.744 15.179C6.908 15.553 7.127 15.864 7.436 16.173C7.745 16.482 8.056 16.7 8.43 16.864C8.791 17.023 9.208 17.127 9.8 17.166C10.395 17.204 10.614 17.209 12.003 17.209C13.393 17.209 13.611 17.203 14.206 17.164C14.798 17.125 15.215 17.021 15.576 16.862C15.95 16.699 16.261 16.479 16.57 16.17C16.879 15.861 17.098 15.55 17.261 15.176C17.42 14.814 17.524 14.398 17.563 13.806C17.601 13.211 17.606 12.992 17.606 11.603C17.606 10.213 17.6 9.994 17.562 9.399C17.523 8.807 17.418 8.39 17.26 8.029C17.097 7.655 16.877 7.344 16.568 7.035C16.259 6.726 15.949 6.508 15.574 6.344C15.213 6.185 14.796 6.081 14.204 6.042C13.608 6.004 13.39 6 12 6ZM12 7.378C13.366 7.378 13.57 7.384 14.155 7.422C14.694 7.458 14.977 7.557 15.168 7.638C15.418 7.747 15.598 7.878 15.785 8.065C15.972 8.253 16.102 8.432 16.212 8.682C16.293 8.873 16.393 9.156 16.428 9.695C16.466 10.28 16.471 10.483 16.471 11.85C16.471 13.217 16.465 13.42 16.427 14.005C16.392 14.544 16.292 14.827 16.211 15.018C16.102 15.268 15.971 15.448 15.784 15.636C15.598 15.822 15.418 15.953 15.168 16.062C14.977 16.143 14.694 16.243 14.155 16.278C13.57 16.316 13.367 16.322 12 16.322C10.632 16.322 10.429 16.316 9.844 16.278C9.305 16.243 9.022 16.143 8.832 16.062C8.582 15.953 8.402 15.822 8.215 15.635C8.028 15.448 7.898 15.268 7.788 15.018C7.707 14.827 7.607 14.544 7.572 14.005C7.534 13.42 7.528 13.217 7.528 11.85C7.528 10.483 7.534 10.28 7.572 9.695C7.608 9.156 7.708 8.873 7.789 8.682C7.898 8.432 8.028 8.252 8.215 8.065C8.402 7.878 8.582 7.747 8.832 7.638C9.022 7.557 9.306 7.457 9.844 7.422C10.429 7.384 10.632 7.378 12 7.378Z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z" opacity="0.2" />
                  <path d="M13.698 17.098V12.698H15.004L15.174 11.132H13.698V10.094C13.698 9.657 13.821 9.347 14.472 9.347H15.198V7.946C14.825 7.911 14.451 7.893 14.076 7.894C12.95 7.894 12.157 8.586 12.157 9.941V11.133H10.848V12.699H12.157V17.098H13.698Z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z" opacity="0.2" />
                  <path d="M17.24 14.755C16.835 16.164 14.018 19.139 9.897 14.764C9.897 14.764 8.957 16.129 8.448 16.25C8.206 16.302 8 16.302 8 16.093C8 15.78 8 12.843 8 12.843C8 12.606 8.168 12.5 8.379 12.553C8.71 12.632 8.887 13.318 8.887 13.318C8.887 13.318 9.445 11.468 10.644 9.783C11.729 8.253 12.7 8 12.929 8C13.158 8 13.283 8.113 13.283 8.55C13.283 9.522 12.155 11.791 12.155 11.791C12.155 11.791 12.092 12.147 12.406 12.147C12.721 12.147 13.733 11.236 14.312 10.353C14.785 9.641 14.945 9 15.384 9C15.823 9 15.948 9.226 15.948 9.904C15.948 10.8 15.447 11.389 15.447 11.389C15.447 11.389 16.814 11.429 16.814 12.519C16.814 13.318 15.698 14.057 15.698 14.057C15.698 14.057 17.526 13.874 17.24 14.755Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Каталог товаров</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-400">Телевизоры и аудио</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400">Компьютеры и ноутбуки</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400">Смартфоны и планшеты</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400">Крупная бытовая техника</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400">Техника для кухни</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400">Аксессуары и периферия</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-400">О компании</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400">Доставка и оплата</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400">Гарантия и возврат</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400">Сервисный центр</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400">Контакты</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400">Политика конфиденциальности</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-orange-400 mt-0.5" />
                <div>
                  <p className="font-bold">8-800-123-4567</p>
                  <p className="text-sm text-gray-300">Бесплатно по России</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-orange-400" />
                <a href="mailto:info@technomir.ru" className="text-gray-300 hover:text-orange-400">
                  info@technomir.ru
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-orange-400 mt-0.5" />
                <p className="text-gray-300">
                  г. Москва, ул. Техническая, д. 42
                </p>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-2 text-orange-400 mt-0.5" />
                <p className="text-gray-300">
                  Пн-Вс: 10:00 - 22:00
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <p className="text-center text-gray-400">
            © {currentYear} ТехноМир. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
