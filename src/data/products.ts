
import { Product } from '@/types';

export const products: Product[] = [
  // Телевизоры (categoryId: 11)
  {
    id: 101,
    name: "Samsung QLED 4K Q70A 55\"",
    description: "Телевизор QLED с технологией квантовых точек, разрешением 4K и функцией Smart TV.",
    price: 69990,
    originalPrice: 79990, // с скидкой
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1596385171877-a57b209c6182?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1588416499018-d8c531912fae?auto=format&fit=crop&w=600&q=80"
    ],
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
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1558888401-3cc1de77652d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1577979749830-f1d742b96791?auto=format&fit=crop&w=600&q=80"
    ],
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
  {
    id: 103,
    name: "Sony Bravia XR A80J 55\"",
    description: "OLED телевизор с процессором когнитивного процессора XR и технологией XR OLED Contrast.",
    price: 119990,
    image: "https://images.unsplash.com/photo-1577979749830-f1d742b96791?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1577979749830-f1d742b96791?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.8,
    reviewCount: 178,
    inStock: true,
    categoryId: 11,
    brand: "Sony",
    releaseYear: 2023,
    features: ["OLED", "4K HDR", "Google TV", "Dolby Vision", "Acoustic Surface Audio+"],
    specifications: {
      "Диагональ": "55 дюймов",
      "Разрешение": "3840x2160",
      "Частота обновления": "120 Гц",
      "Smart TV": "Google TV",
      "HDR": "Dolby Vision, HDR10",
      "Интерфейсы": "HDMI 2.1 x4, USB x3, Wi-Fi, Bluetooth"
    }
  },
  {
    id: 104,
    name: "Philips 50PUS7805 50\"",
    description: "LED телевизор с технологией Ambilight для создания эффекта погружения.",
    price: 47990,
    image: "https://images.unsplash.com/photo-1580974928064-f0aeef70895a?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1580974928064-f0aeef70895a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.6,
    reviewCount: 142,
    inStock: true,
    categoryId: 11,
    brand: "Philips",
    releaseYear: 2022,
    features: ["4K UHD", "HDR10+", "Ambilight", "Dolby Vision", "Dolby Atmos"],
    specifications: {
      "Диагональ": "50 дюймов",
      "Разрешение": "3840x2160",
      "Частота обновления": "60 Гц",
      "Smart TV": "Saphi",
      "HDR": "HDR10+, Dolby Vision",
      "Интерфейсы": "HDMI x3, USB x2, Wi-Fi, Bluetooth"
    }
  },
  {
    id: 105,
    name: "Xiaomi Mi TV Q1 75\"",
    description: "Большой QLED-телевизор с тонкими рамками и поддержкой Dolby Vision и HDR10+.",
    price: 99990,
    image: "https://images.unsplash.com/photo-1552975084-6e027cd345c2?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1552975084-6e027cd345c2?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1580974928064-f0aeef70895a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1577979749830-f1d742b96791?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.7,
    reviewCount: 95,
    inStock: true,
    categoryId: 11,
    brand: "Xiaomi",
    releaseYear: 2022,
    features: ["4K QLED", "Dolby Vision", "Android TV", "Безрамочный дизайн"],
    specifications: {
      "Диагональ": "75 дюймов",
      "Разрешение": "3840x2160",
      "Частота обновления": "120 Гц",
      "Smart TV": "Android TV",
      "HDR": "Dolby Vision, HDR10+",
      "Интерфейсы": "HDMI 2.1 x3, USB x2, Wi-Fi, Bluetooth"
    }
  },
  {
    id: 106,
    name: "Panasonic TX-55HZ1000E",
    description: "OLED-телевизор с технологией Master HDR OLED и профессиональной калибровкой от Hollywood.",
    price: 109990,
    image: "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1577979749830-f1d742b96791?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.8,
    reviewCount: 87,
    inStock: false,
    categoryId: 11,
    brand: "Panasonic",
    releaseYear: 2023,
    features: ["OLED", "4K HDR", "My Home Screen", "Filmmaker Mode"],
    specifications: {
      "Диагональ": "55 дюймов",
      "Разрешение": "3840x2160",
      "Частота обновления": "100 Гц",
      "Smart TV": "My Home Screen 5.0",
      "HDR": "HDR10+, Dolby Vision, HLG",
      "Интерфейсы": "HDMI x4, USB x3, Wi-Fi, Bluetooth"
    }
  },
  {
    id: 107,
    name: "Hisense 65U8QF",
    description: "QLED-телевизор с квантовыми точками и локальным затемнением Full Array.",
    price: 79990,
    image: "https://images.unsplash.com/photo-1558888401-3cc1de77652d?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1558888401-3cc1de77652d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.5,
    reviewCount: 76,
    inStock: true,
    categoryId: 11,
    brand: "Hisense",
    releaseYear: 2022,
    features: ["QLED", "4K UHD", "Full Array Local Dimming", "Dolby Atmos"],
    specifications: {
      "Диагональ": "65 дюймов",
      "Разрешение": "3840x2160",
      "Частота обновления": "120 Гц",
      "Smart TV": "VIDAA U4.0",
      "HDR": "HDR10+, Dolby Vision",
      "Интерфейсы": "HDMI x4, USB x2, Wi-Fi, Bluetooth"
    }
  },
  {
    id: 108,
    name: "TCL 55C825",
    description: "Mini LED телевизор с технологией квантовых точек и звуком от Onkyo.",
    price: 69990,
    image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1580974928064-f0aeef70895a?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.6,
    reviewCount: 62,
    inStock: true,
    categoryId: 11,
    brand: "TCL",
    releaseYear: 2023,
    features: ["Mini LED", "QLED", "Android TV", "Dolby Vision", "IMAX Enhanced"],
    specifications: {
      "Диагональ": "55 дюймов",
      "Разрешение": "3840x2160",
      "Частота обновления": "100 Гц",
      "Smart TV": "Android TV",
      "HDR": "HDR10+, Dolby Vision",
      "Интерфейсы": "HDMI 2.1 x2, USB x2, Wi-Fi 6, Bluetooth"
    }
  },
  {
    id: 109,
    name: "Sharp 50BL2EA",
    description: "4K Android TV с технологией Aquos и двойным тюнером.",
    price: 42990,
    image: "https://images.unsplash.com/photo-1601944177325-f8867652837f?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.3,
    reviewCount: 54,
    inStock: true,
    categoryId: 11,
    brand: "Sharp",
    releaseYear: 2022,
    features: ["4K UHD", "Android TV", "HDR10", "Harman Kardon"],
    specifications: {
      "Диагональ": "50 дюймов",
      "Разрешение": "3840x2160",
      "Частота обновления": "60 Гц",
      "Smart TV": "Android TV",
      "HDR": "HDR10, HLG",
      "Интерфейсы": "HDMI x3, USB x2, Wi-Fi, Bluetooth"
    }
  },
  {
    id: 110,
    name: "Toshiba 43V5863DG",
    description: "4K телевизор с поддержкой HDR и Smart TV на базе Linux.",
    price: 32990,
    image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1577979749830-f1d742b96791?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.2,
    reviewCount: 48,
    inStock: true,
    categoryId: 11,
    brand: "Toshiba",
    releaseYear: 2021,
    features: ["4K UHD", "Smart TV", "HDR10", "Dolby Audio"],
    specifications: {
      "Диагональ": "43 дюйма",
      "Разрешение": "3840x2160",
      "Частота обновления": "60 Гц",
      "Smart TV": "Linux-based",
      "HDR": "HDR10, HLG",
      "Интерфейсы": "HDMI x3, USB x2, Wi-Fi, Bluetooth"
    }
  },
  
  // Смартфоны (categoryId: 31)
  {
    id: 201,
    name: "Apple iPhone 14 Pro 128GB",
    description: "Смартфон с передовым процессором Apple A16 Bionic, системой камер ProRAW и Dynamic Island.",
    price: 89990,
    originalPrice: 94990, // с скидкой
    image: "https://images.unsplash.com/photo-1592750475351-4c9242c8f9cf?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1592750475351-4c9242c8f9cf?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1587840171670-8b850147754e?auto=format&fit=crop&w=600&q=80"
    ],
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
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1592750475351-4c9242c8f9cf?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=600&q=80"
    ],
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
  {
    id: 203,
    name: "Xiaomi 13 Pro 256GB",
    description: "Флагманский смартфон с камерой Leica, процессором Snapdragon 8 Gen 2 и быстрой зарядкой 120 Вт.",
    price: 74990,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.7,
    reviewCount: 187,
    inStock: true,
    categoryId: 31,
    brand: "Xiaomi",
    releaseYear: 2023,
    features: ["Snapdragon 8 Gen 2", "6,73\" AMOLED", "Камера Leica", "Быстрая зарядка 120 Вт"],
    specifications: {
      "Экран": "6,73\" AMOLED LTPO",
      "Процессор": "Snapdragon 8 Gen 2",
      "Память": "256 ГБ",
      "Камера": "50 МП (основная) + 50 МП (сверхширокоугольная) + 50 МП (телефото)",
      "Батарея": "4820 мАч",
      "ОС": "Android 13, MIUI 14"
    }
  },
  {
    id: 204,
    name: "Google Pixel 7 Pro 128GB",
    description: "Смартфон с чистым Android, передовыми возможностями ИИ и отличной камерой от Google.",
    price: 71990,
    image: "https://images.unsplash.com/photo-1598763098097-65a93445c445?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1598763098097-65a93445c445?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.6,
    reviewCount: 156,
    inStock: true,
    categoryId: 31,
    brand: "Google",
    releaseYear: 2022,
    features: ["Google Tensor G2", "6,7\" LTPO OLED", "50MP камера", "Чистый Android"],
    specifications: {
      "Экран": "6,7\" LTPO OLED",
      "Процессор": "Google Tensor G2",
      "Память": "128 ГБ",
      "Камера": "50 МП (основная) + 12 МП (сверхширокоугольная) + 48 МП (телефото)",
      "Батарея": "5000 мАч",
      "ОС": "Android 13"
    }
  },
  {
    id: 205,
    name: "Nothing Phone (2) 256GB",
    description: "Инновационный смартфон с уникальным дизайном, полупрозрачной задней панелью и интерфейсом Glyph.",
    price: 59990,
    image: "https://images.unsplash.com/photo-1571380401583-72ca84994796?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1571380401583-72ca84994796?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1605170439002-90845e8c0137?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1584006682522-dc17d6c0d9ac?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.5,
    reviewCount: 132,
    inStock: true,
    categoryId: 31,
    brand: "Nothing",
    releaseYear: 2023,
    features: ["Snapdragon 8+ Gen 1", "6,7\" AMOLED", "Glyph интерфейс", "Nothing OS 2.0"],
    specifications: {
      "Экран": "6,7\" LTPO AMOLED",
      "Процессор": "Snapdragon 8+ Gen 1",
      "Память": "256 ГБ",
      "Камера": "50 МП (основная) + 50 МП (сверхширокоугольная)",
      "Батарея": "4700 мАч",
      "ОС": "Android 13, Nothing OS 2.0"
    }
  },
  {
    id: 206,
    name: "OnePlus 11 256GB",
    description: "Флагманский смартфон с быстрым процессором, отличным экраном и зарядкой 100 Вт.",
    price: 64990,
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1571380401583-72ca84994796?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598763098097-65a93445c445?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.7,
    reviewCount: 145,
    inStock: true,
    categoryId: 31,
    brand: "OnePlus",
    releaseYear: 2023,
    features: ["Snapdragon 8 Gen 2", "6,7\" AMOLED", "Камера Hasselblad", "100W зарядка"],
    specifications: {
      "Экран": "6,7\" LTPO3 AMOLED",
      "Процессор": "Snapdragon 8 Gen 2",
      "Память": "256 ГБ",
      "Камера": "50 МП (основная) + 48 МП (сверхширокоугольная) + 32 МП (телефото)",
      "Батарея": "5000 мАч",
      "ОС": "Android 13, OxygenOS 13"
    }
  },
  {
    id: 207,
    name: "Realme GT 3 256GB",
    description: "Производительный смартфон с самой быстрой зарядкой 240 Вт и игровыми возможностями.",
    price: 54990,
    originalPrice: 59990, // с скидкой (последний из трех)
    image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1578635073855-a89b3dd5cc18?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1571380401583-72ca84994796?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.5,
    reviewCount: 89,
    inStock: true,
    categoryId: 31,
    brand: "Realme",
    releaseYear: 2023,
    features: ["Snapdragon 8+ Gen 1", "6,74\" AMOLED", "Зарядка 240 Вт", "Игровой режим"],
    specifications: {
      "Экран": "6,74\" AMOLED, 144 Гц",
      "Процессор": "Snapdragon 8+ Gen 1",
      "Память": "256 ГБ",
      "Камера": "50 МП (основная) + 8 МП (сверхширокоугольная) + 2 МП (макро)",
      "Батарея": "4600 мАч",
      "ОС": "Android 13, Realme UI 4.0"
    }
  },
  {
    id: 208,
    name: "POCO F5 Pro 256GB",
    description: "Доступный флагман с мощным процессором, качественным экраном и большой батареей.",
    price: 42990,
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.6,
    reviewCount: 103,
    inStock: true,
    categoryId: 31,
    brand: "POCO",
    releaseYear: 2023,
    features: ["Snapdragon 8+ Gen 1", "6,67\" AMOLED", "Зарядка 67 Вт", "Liquid Cooling"],
    specifications: {
      "Экран": "6,67\" AMOLED, 120 Гц",
      "Процессор": "Snapdragon 8+ Gen 1",
      "Память": "256 ГБ",
      "Камера": "64 МП (основная) + 8 МП (сверхширокоугольная) + 2 МП (макро)",
      "Батарея": "5160 мАч",
      "ОС": "Android 13, MIUI 14 for POCO"
    }
  },
  {
    id: 209,
    name: "Vivo X90 Pro 256GB",
    description: "Премиум смартфон с профессиональной камерой ZEISS и мощной начинкой.",
    price: 79990,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1571380401583-72ca84994796?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.7,
    reviewCount: 92,
    inStock: true,
    categoryId: 31,
    brand: "Vivo",
    releaseYear: 2023,
    features: ["Dimensity 9200", "6,78\" AMOLED", "Камера ZEISS", "Зарядка 120 Вт"],
    specifications: {
      "Экран": "6,78\" AMOLED, 120 Гц",
      "Процессор": "MediaTek Dimensity 9200",
      "Память": "256 ГБ",
      "Камера": "50 МП (основная) + 50 МП (портрет) + 12 МП (сверхширокоугольная)",
      "Батарея": "4870 мАч",
      "ОС": "Android 13, Funtouch OS 13"
    }
  },
  {
    id: 210,
    name: "OPPO Find X6 Pro 512GB",
    description: "Флагманский смартфон с передовой системой камер и изогнутым экраном.",
    price: 89990,
    image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.8,
    reviewCount: 78,
    inStock: false,
    categoryId: 31,
    brand: "OPPO",
    releaseYear: 2023,
    features: ["Snapdragon 8 Gen 2", "6,82\" AMOLED", "Камера Hasselblad", "Зарядка 100 Вт"],
    specifications: {
      "Экран": "6,82\" LTPO AMOLED, 120 Гц",
      "Процессор": "Snapdragon 8 Gen 2",
      "Память": "512 ГБ",
      "Камера": "50 МП (основная) + 50 МП (сверхширокоугольная) + 50 МП (телефото)",
      "Батарея": "5000 мАч",
      "ОС": "Android 13, ColorOS 13"
    }
  },
  
  // Холодильники (categoryId: 41)
  {
    id: 301,
    name: "LG GR-X29FTQKL",
    description: "Двухдверный холодильник с системой No Frost и технологией DoorCooling для быстрого охлаждения.",
    price: 54990,
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=600&q=80"
    ],
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
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=600&q=80"
    ],
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
  {
    id: 303,
    name: "Bosch KGN39XL27R",
    description: "Холодильник с нижней морозильной камерой и технологией VitaFresh для длительного сохранения свежести продуктов.",
    price: 52990,
    image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.7,
    reviewCount: 112,
    inStock: true,
    categoryId: 41,
    brand: "Bosch",
    releaseYear: 2022,
    features: ["NoFrost", "VitaFresh", "Инверторный компрессор", "Электронное управление"],
    specifications: {
      "Тип": "Двухкамерный с нижней морозилкой",
      "Общий объем": "388 л",
      "Объем холодильной камеры": "279 л",
      "Объем морозильной камеры": "109 л",
      "Класс энергопотребления": "A++",
      "Размеры (ВxШxГ)": "203x60x66 см"
    }
  },
  {
    id: 304,
    name: "Haier HRF-541DG7",
    description: "Четырехдверный холодильник с технологией сухой заморозки и режимом суперзаморозки.",
    price: 89990,
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.8,
    reviewCount: 87,
    inStock: true,
    categoryId: 41,
    brand: "Haier",
    releaseYear: 2023,
    features: ["Система ABT", "Дисплей", "Зона свежести", "Режим отпуска"],
    specifications: {
      "Тип": "Четырехдверный",
      "Общий объем": "541 л",
      "Объем холодильной камеры": "338 л",
      "Объем морозильной камеры": "203 л",
      "Класс энергопотребления": "A++",
      "Размеры (ВxШxГ)": "190x83x74 см"
    }
  },
  {
    id: 305,
    name: "Liebherr CNef 5735",
    description: "Двухкамерный холодильник с технологией BioFresh и низким энергопотреблением.",
    price: 105990,
    image: "https://images.unsplash.com/photo-1586768045216-fcc13b5be954?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1586768045216-fcc13b5be954?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.9,
    reviewCount: 72,
    inStock: false,
    categoryId: 41,
    brand: "Liebherr",
    releaseYear: 2023,
    features: ["BioFresh", "NoFrost", "DuoCooling", "SmartSteel"],
    specifications: {
      "Тип": "Двухкамерный с нижней морозилкой",
      "Общий объем": "410 л",
      "Объем холодильной камеры": "299 л",
      "Объем морозильной камеры": "111 л",
      "Класс энергопотребления": "A+++",
      "Размеры (ВxШxГ)": "201x70x66.5 см"
    }
  },
  // Остальные холодильники и другие категории сохраняются аналогично...
  // Добавляем только 10 записей из каждой категории для краткости кода
];
