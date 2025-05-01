
import { Category } from '@/types';

export const categories: Category[] = [
  {
    id: 1,
    name: "Телевизоры и аудио",
    icon: "tv",
    description: "Smart TV, LED, OLED, плазменные телевизоры и аудиотехника",
    subcategories: [
      {
        id: 11,
        name: "Телевизоры",
        icon: "tv",
        description: "LED, OLED, QLED, 4K и 8K телевизоры"
      },
      {
        id: 12,
        name: "Аудиосистемы",
        icon: "speaker",
        description: "Колонки, саундбары, домашние кинотеатры"
      },
      {
        id: 13,
        name: "Наушники",
        icon: "headphones",
        description: "Проводные и беспроводные наушники"
      }
    ]
  },
  {
    id: 2,
    name: "Компьютеры и ноутбуки",
    icon: "laptop",
    description: "Ноутбуки, ПК, моноблоки, комплектующие",
    subcategories: [
      {
        id: 21,
        name: "Ноутбуки",
        icon: "laptop",
        description: "Игровые, офисные, ультрабуки"
      },
      {
        id: 22,
        name: "Компьютеры",
        icon: "monitor",
        description: "Системные блоки, моноблоки"
      },
      {
        id: 23,
        name: "Комплектующие",
        icon: "cpu",
        description: "Процессоры, видеокарты, материнские платы"
      }
    ]
  },
  {
    id: 3,
    name: "Смартфоны и планшеты",
    icon: "smartphone",
    description: "Смартфоны, планшеты и аксессуары к ним",
    subcategories: [
      {
        id: 31,
        name: "Смартфоны",
        icon: "smartphone",
        description: "Мобильные телефоны всех брендов"
      },
      {
        id: 32,
        name: "Планшеты",
        icon: "tablet",
        description: "Планшетные компьютеры"
      },
      {
        id: 33,
        name: "Аксессуары",
        icon: "smartphone",
        description: "Чехлы, защитные стекла, зарядные устройства"
      }
    ]
  },
  {
    id: 4,
    name: "Бытовая техника",
    icon: "refrigerator",
    description: "Крупная бытовая техника для дома",
    subcategories: [
      {
        id: 41,
        name: "Холодильники",
        icon: "refrigerator",
        description: "Однокамерные, двухкамерные, Side-by-side"
      },
      {
        id: 42,
        name: "Стиральные машины",
        icon: "washing-machine",
        description: "Фронтальные, вертикальные, узкие"
      },
      {
        id: 43,
        name: "Пылесосы",
        icon: "vacuum",
        description: "Обычные, моющие, роботы-пылесосы"
      }
    ]
  },
  {
    id: 5,
    name: "Кухонная техника",
    icon: "microwave",
    description: "Техника для кухни и приготовления пищи",
    subcategories: [
      {
        id: 51,
        name: "Микроволновки",
        icon: "microwave",
        description: "С грилем, соло, встраиваемые"
      },
      {
        id: 52,
        name: "Плиты",
        icon: "oven",
        description: "Электрические, газовые, комбинированные"
      },
      {
        id: 53,
        name: "Кофемашины",
        icon: "coffee",
        description: "Капсульные, рожковые, автоматические"
      }
    ]
  },
  {
    id: 6,
    name: "Климатическая техника",
    icon: "thermometer",
    description: "Кондиционеры, обогреватели, увлажнители",
    subcategories: [
      {
        id: 61,
        name: "Кондиционеры",
        icon: "air-conditioner",
        description: "Настенные, напольные, мобильные"
      },
      {
        id: 62,
        name: "Обогреватели",
        icon: "heater",
        description: "Масляные, конвекторы, тепловентиляторы"
      },
      {
        id: 63,
        name: "Увлажнители",
        icon: "droplets",
        description: "Ультразвуковые, паровые, мойки воздуха"
      }
    ]
  }
];
