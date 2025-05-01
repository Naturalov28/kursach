
import { Product } from '@/types';

export const products: Product[] = [
  // Телевизоры (categoryId: 11)
  {
    id: 101,
    name: "Samsung QLED 4K Q70A 55\"",
    description: "Телевизор QLED с технологией квантовых точек, разрешением 4K и функцией Smart TV.",
    price: 69990,
    originalPrice: 79990,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    reviewCount: 156,
    inStock: true,
    categoryId: 11,
    brand: "Samsung",
    releaseYear: 2023,
    features: ["4K UHD", "QLED", "Smart TV", "HDR10+", "Wi-Fi", "Bluetooth"],
    specifications: {
      "Диагональ": "55 дюймов",
      "Разрешение": "3840x2160",
      "Частота обновления": "120 Гц",
      "Smart TV": "Tizen",
      "HDR": "HDR10+",
      "Интерфейсы": "HDMI x4, USB x2, Wi-Fi, Bluetooth"
    }
  },
  {
    id: 102,
    name: "LG OLED C1 65\"",
    description: "Телевизор OLED с самоподсвечивающимися пикселями для идеального черного цвета и контрастности.",
    price: 129990,
    originalPrice: 149990,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    reviewCount: 203,
    inStock: true,
    categoryId: 11,
    brand: "LG",
    releaseYear: 2022,
    features: ["OLED", "4K UHD", "Smart TV", "Dolby Vision", "Dolby Atmos"],
    specifications: {
      "Диагональ": "65 дюймов",
      "Разрешение": "3840x2160",
      "Частота обновления": "120 Гц",
      "Smart TV": "webOS",
      "HDR": "Dolby Vision, HDR10",
      "Интерфейсы": "HDMI 2.1 x4, USB x3, Wi-Fi, Bluetooth"
    }
  },
  // Добавляем еще 18 телевизоров по аналогии с разными характеристиками
  
  // Смартфоны (categoryId: 31)
  {
    id: 201,
    name: "Apple iPhone 14 Pro 128GB",
    description: "Смартфон с передовым процессором Apple A16 Bionic, системой камер ProRAW и Dynamic Island.",
    price: 89990,
    originalPrice: 94990,
    image: "https://images.unsplash.com/photo-1592750475351-4c9242c8f9cf?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    reviewCount: 312,
    inStock: true,
    categoryId: 31,
    brand: "Apple",
    releaseYear: 2022,
    features: ["A16 Bionic", "6,1\" OLED", "48MP камера", "Dynamic Island"],
    specifications: {
      "Экран": "6,1\" OLED Super Retina XDR",
      "Процессор": "Apple A16 Bionic",
      "Память": "128 ГБ",
      "Камера": "48 МП (основная) + 12 МП (сверхширокоугольная) + 12 МП (телефото)",
      "Батарея": "3200 мАч",
      "ОС": "iOS 16"
    }
  },
  {
    id: 202,
    name: "Samsung Galaxy S23 Ultra 256GB",
    description: "Флагманский смартфон с 200 МП камерой, стилусом S Pen и мощным процессором Snapdragon 8 Gen 2.",
    price: 99990,
    originalPrice: 109990,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    reviewCount: 245,
    inStock: true,
    categoryId: 31,
    brand: "Samsung",
    releaseYear: 2023,
    features: ["Snapdragon 8 Gen 2", "6,8\" AMOLED", "200MP камера", "S Pen"],
    specifications: {
      "Экран": "6,8\" Dynamic AMOLED 2X",
      "Процессор": "Snapdragon 8 Gen 2",
      "Память": "256 ГБ",
      "Камера": "200 МП (основная) + 12 МП (сверхширокоугольная) + 10 МП (телефото) + 10 МП (перископ)",
      "Батарея": "5000 мАч",
      "ОС": "Android 13"
    }
  },
  // Добавляем еще 18 смартфонов по аналогии с разными характеристиками
  
  // Холодильники (categoryId: 41)
  {
    id: 301,
    name: "LG GR-X29FTQKL",
    description: "Двухдверный холодильник с системой No Frost и технологией DoorCooling для быстрого охлаждения.",
    price: 54990,
    originalPrice: 64990,
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    reviewCount: 126,
    inStock: true,
    categoryId: 41,
    brand: "LG",
    releaseYear: 2022,
    features: ["No Frost", "DoorCooling+", "Инверторный компрессор", "Многопоточная система охлаждения"],
    specifications: {
      "Тип": "Двухкамерный",
      "Общий объем": "384 л",
      "Объем холодильной камеры": "277 л",
      "Объем морозильной камеры": "107 л",
      "Класс энергопотребления": "A++",
      "Размеры (ВxШxГ)": "186x59x68 см"
    }
  },
  {
    id: 302,
    name: "Samsung RB37A52N0SA",
    description: "Холодильник с нижней морозильной камерой, системой NoFrost и зоной свежести.",
    price: 49990,
    originalPrice: 54990,
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=80",
    rating: 4.6,
    reviewCount: 98,
    inStock: true,
    categoryId: 41,
    brand: "Samsung",
    releaseYear: 2023,
    features: ["No Frost", "Зона свежести", "Инверторный компрессор", "Режим отпуска"],
    specifications: {
      "Тип": "Двухкамерный с нижней морозилкой",
      "Общий объем": "367 л",
      "Объем холодильной камеры": "269 л",
      "Объем морозильной камеры": "98 л",
      "Класс энергопотребления": "A+",
      "Размеры (ВxШxГ)": "201x59.5x65.8 см"
    }
  },
  // Добавляем еще 18 холодильников по аналогии с разными характеристиками
  
  // Ноутбуки (categoryId: 21)
  {
    id: 401,
    name: "ASUS TUF Gaming F15",
    description: "Игровой ноутбук с процессором Intel Core i7, видеокартой NVIDIA GeForce RTX 3060 и 144Гц экраном.",
    price: 79990,
    originalPrice: 89990,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    reviewCount: 183,
    inStock: true,
    categoryId: 21,
    brand: "ASUS",
    releaseYear: 2022,
    features: ["Intel Core i7", "NVIDIA RTX 3060", "16GB RAM", "512GB SSD", "144Hz"],
    specifications: {
      "Процессор": "Intel Core i7-12700H",
      "Видеокарта": "NVIDIA GeForce RTX 3060 6GB",
      "Оперативная память": "16 ГБ DDR5",
      "Накопитель": "512 ГБ SSD",
      "Дисплей": "15,6\" IPS 144Гц 1920x1080",
      "Вес": "2.3 кг"
    }
  },
  {
    id: 402,
    name: "Apple MacBook Pro 14 M2 Pro",
    description: "Профессиональный ноутбук с чипом M2 Pro, Retina-дисплеем и длительным временем работы от аккумулятора.",
    price: 189990,
    originalPrice: 199990,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    reviewCount: 156,
    inStock: true,
    categoryId: 21,
    brand: "Apple",
    releaseYear: 2023,
    features: ["Apple M2 Pro", "16GB RAM", "512GB SSD", "14\" Retina XDR"],
    specifications: {
      "Процессор": "Apple M2 Pro 10-core",
      "Видеокарта": "Встроенная 16-core",
      "Оперативная память": "16 ГБ",
      "Накопитель": "512 ГБ SSD",
      "Дисплей": "14\" Liquid Retina XDR 3024x1964",
      "Вес": "1.6 кг"
    }
  },
  // Добавляем еще 18 ноутбуков по аналогии с разными характеристиками
  
  // Микроволновки (categoryId: 51)
  {
    id: 501,
    name: "Bosch Serie 4 HMT84G451",
    description: "Микроволновая печь с грилем, электронным управлением и автоматическими программами приготовления.",
    price: 16990,
    originalPrice: 19990,
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=600&q=80",
    rating: 4.6,
    reviewCount: 87,
    inStock: true,
    categoryId: 51,
    brand: "Bosch",
    releaseYear: 2022,
    features: ["Гриль", "Автопрограммы", "25 л объем", "900 Вт"],
    specifications: {
      "Тип управления": "Электронное",
      "Объём": "25 л",
      "Мощность микроволн": "900 Вт",
      "Мощность гриля": "1200 Вт",
      "Количество режимов": "8",
      "Размеры (ВxШxГ)": "29x46x37 см"
    }
  },
  {
    id: 502,
    name: "Samsung MS23F302TAS",
    description: "Компактная микроволновая печь с керамическим покрытием и функцией разморозки.",
    price: 12990,
    originalPrice: 13990,
    image: "https://images.unsplash.com/photo-1585659722983-3a582a9cdc0b?auto=format&fit=crop&w=600&q=80",
    rating: 4.5,
    reviewCount: 65,
    inStock: true,
    categoryId: 51,
    brand: "Samsung",
    releaseYear: 2023,
    features: ["Керамическое покрытие", "Быстрый разогрев", "23 л объем", "800 Вт"],
    specifications: {
      "Тип управления": "Электронное",
      "Объём": "23 л",
      "Мощность микроволн": "800 Вт",
      "Внутреннее покрытие": "Керамическое",
      "Количество режимов": "6",
      "Размеры (ВxШxГ)": "27.5x48.9x37.4 см"
    }
  }
  // Добавляем еще 18 микроволновок по аналогии с разными характеристиками
];
